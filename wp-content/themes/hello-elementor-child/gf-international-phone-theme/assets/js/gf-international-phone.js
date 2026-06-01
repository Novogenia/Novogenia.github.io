/**
 * GF International Phone Field JavaScript
 */

(function($) {
    'use strict';
    
    var GFInternationalPhone = {
        
        init: function() {
            this.bindEvents();
            this.initExistingFields();
        },
        
        bindEvents: function() {
            // Initialize on form render
            $(document).on('gform_post_render', function(event, form_id) {
                GFInternationalPhone.initFields(form_id);
            });
            
            // Country select change
            $(document).on('change', '.gf_international_phone_country', this.handleCountryChange.bind(this));
            
            // Phone input events
            $(document).on('input', '.gf_international_phone_number', this.handlePhoneInput.bind(this));
            $(document).on('blur', '.gf_international_phone_number', this.handlePhoneBlur.bind(this));
            
            // Form submission
            $(document).on('submit', '.gform_wrapper form', this.validateBeforeSubmit.bind(this));
        },
        
        initExistingFields: function() {
            $('.gfield_phone').each(function() {
                var $field = $(this);
                GFInternationalPhone.initField($field);
            });
        },
        
        initFields: function(form_id) {
            $('#gform_' + form_id + ' .gfield_phone').each(function() {
                var $field = $(this);
                GFInternationalPhone.initField($field);
            });
        },
        
        initField: function($field) {
            var $container = $field.find('.ginput_container_international_phone');
            if (!$container.length) {
                return;
            }
            
            var $countrySelect = $container.find('.gf_international_phone_country');
            var $phoneInput = $container.find('.gf_international_phone_number');
            
            // Update display for already selected country
            if ($countrySelect.val()) {
                this.updateSelectedDisplay($countrySelect);
            }
            
            // Auto-detect country if enabled and no value set
            if ($countrySelect.length && !$countrySelect.val() && !$phoneInput.val()) {
                this.detectUserCountry($countrySelect);
            }
            
            // Update placeholder based on selected country
            this.updatePhonePlaceholder($countrySelect, $phoneInput);
        },
        
        detectUserCountry: function($countrySelect) {
            // Add loading class
            $countrySelect.addClass('detecting-country');
            
            var $container = $countrySelect.closest('.ginput_container_international_phone');
            
            $.ajax({
                url: gfInternationalPhone.ajaxurl,
                type: 'POST',
                data: {
                    action: 'gf_get_user_country',
                    nonce: gfInternationalPhone.nonce
                },
                success: function(response) {
                    if (response.success && response.data.country_code) {
                        $countrySelect.val(response.data.country_code).trigger('change');
                        
                        // Show country detection message
                        var countryName = '';
                        if (gfInternationalPhone.countries[response.data.country_code]) {
                            countryName = gfInternationalPhone.countries[response.data.country_code].name;
                            GFInternationalPhone.showCountryHint($container, gfInternationalPhone.messages.locationDetected + ': ' + countryName);
                        }
                    }
                },
                error: function() {
                    // Silent fail - just use default
                },
                complete: function() {
                    // Remove loading class
                    $countrySelect.removeClass('detecting-country');
                }
            });
        },
        
        handleCountryChange: function(e) {
            var $select = $(e.target);
            var $container = $select.closest('.ginput_container_international_phone');
            var $phoneInput = $container.find('.gf_international_phone_number');
            
            this.updateSelectedDisplay($select);
            this.updatePhonePlaceholder($select, $phoneInput);
            this.updateFullNumber($container);
        },
        
        updateSelectedDisplay: function($select) {
            var selectedOption = $select.find('option:selected');
            var countryCode = $select.val();
            
            if (countryCode && gfInternationalPhone.countries[countryCode]) {
                var country = gfInternationalPhone.countries[countryCode];
                // Store original text if not already stored
                if (!selectedOption.data('original-text')) {
                    selectedOption.data('original-text', selectedOption.text());
                }
                // Update to show only flag and dial code
                selectedOption.text(country.flag + ' ' + country.dial_code);
            }
        },
        
        updatePhonePlaceholder: function($countrySelect, $phoneInput) {
            var dialCode = $countrySelect.find('option:selected').data('dial-code');
            
            if (dialCode) {
                $phoneInput.attr('placeholder', gfInternationalPhone.messages.phoneNumber);
            } else {
                $phoneInput.attr('placeholder', gfInternationalPhone.messages.phoneNumber);
            }
        },
        
        handlePhoneInput: function(e) {
            var $input = $(e.target);
            var $container = $input.closest('.ginput_container_international_phone');
            var $countrySelect = $container.find('.gf_international_phone_country');
            var value = $input.val().trim();
            var currentCountry = $countrySelect.val();
            
            // Check if user is entering international format
            if (value.indexOf('+') === 0) {
                // Try to auto-detect country from dial code
                var matched = false;
                var bestMatch = null;
                var bestMatchLength = 0;
                
                $.each(gfInternationalPhone.countries, function(code, country) {
                    if (value.indexOf(country.dial_code) === 0 && country.dial_code.length > bestMatchLength) {
                        // Check if there's more content after the dial code
                        var afterDialCode = value.substring(country.dial_code.length);
                        if (afterDialCode.length > 0) {
                            bestMatch = {
                                code: code,
                                afterDialCode: afterDialCode
                            };
                            bestMatchLength = country.dial_code.length;
                        }
                    }
                });
                
                if (bestMatch) {
                    $countrySelect.val(bestMatch.code);
                    $input.val(bestMatch.afterDialCode);
                    matched = true;
                    // Update the display to show only flag and code
                    this.updateSelectedDisplay($countrySelect);
                }
                
                if (!matched) {
                    // Clear country selection for manual international entry
                    $countrySelect.val('');
                }
            } else {
                // National format
                var cleanValue = value.replace(/[^\d\s\-\(\)]/g, '');
                if (cleanValue !== value) {
                    $input.val(cleanValue);
                }
                
                // Smart logic: If no country selected and user enters national number
                if (!currentCountry && cleanValue.length > 0) {
                    // Check for common Austrian number patterns
                    if (cleanValue.match(/^0[1-9]/)) {
                        // Looks like Austrian number (starts with 0)
                        $countrySelect.val('AT').trigger('change');
                        this.updateSelectedDisplay($countrySelect);
                        this.showCountryHint($container, gfInternationalPhone.messages.austriaSelected);
                    } else if (cleanValue.match(/^[1-9]\d{8,}/)) {
                        // Could be a number without leading 0
                        // Auto-select default country (AT)
                        $countrySelect.val('AT').trigger('change');
                        this.updateSelectedDisplay($countrySelect);
                        this.showCountryHint($container, gfInternationalPhone.messages.selectCountryOrAddPlus);
                    }
                }
            }
            
            this.updateFullNumber($container);
        },
        
        handlePhoneBlur: function(e) {
            var $input = $(e.target);
            this.validatePhoneNumber($input);
        },
        
        validatePhoneNumber: function($input) {
            var $field = $input.closest('.gfield');
            var $container = $input.closest('.ginput_container_international_phone');
            var $countrySelect = $container.find('.gf_international_phone_country');
            var value = $input.val().trim();
            var isValid = true;
            var message = '';
            
            // Remove existing errors
            $field.removeClass('gfield_error');
            $container.find('.validation_message').remove();
            
            if (!value) {
                return true;
            }
            
            if (value.indexOf('+') === 0) {
                // International format validation
                if (!value.match(/^\+[1-9]\d{1,14}$/)) {
                    isValid = false;
                    message = gfInternationalPhone.messages.invalidFormat;
                }
            } else {
                // National format validation
                var cleanNumber = value.replace(/[^\d]/g, '');
                if (cleanNumber.length > 0 && cleanNumber.length < 6) {
                    isValid = false;
                    message = gfInternationalPhone.messages.tooShort;
                } else if (cleanNumber.length > 15) {
                    isValid = false;
                    message = gfInternationalPhone.messages.tooLong;
                }
                
                // Check if country is selected for national numbers
                if (isValid && !$countrySelect.val() && cleanNumber.length > 0) {
                    // Try to be smart about it
                    if (value.match(/^0[1-9]/)) {
                        // Looks like Austrian number, auto-select AT
                        $countrySelect.val('AT').trigger('change');
                        this.showCountryHint($container, 'Austria (+43) auto-selected');
                        // Re-validate with country selected
                        return this.validatePhoneNumber($input);
                    } else {
                        isValid = false;
                        message = gfInternationalPhone.messages.selectCountry;
                    }
                }
            }
            
            if (!isValid) {
                $field.addClass('gfield_error');
                $container.append('<div class="validation_message">' + message + '</div>');
            }
            
            return isValid;
        },
        
        updateFullNumber: function($container) {
            var $fullField = $container.find('.gf_international_phone_full');
            var $countrySelect = $container.find('.gf_international_phone_country');
            var $phoneInput = $container.find('.gf_international_phone_number');
            
            var country = $countrySelect.val();
            var phone = $phoneInput.val().trim();
            var fullNumber = '';
            
            if (phone) {
                if (phone.indexOf('+') === 0) {
                    // Already international format
                    fullNumber = phone;
                } else if (country && gfInternationalPhone.countries[country]) {
                    // Combine country + national
                    var dialCode = gfInternationalPhone.countries[country].dial_code;
                    var cleanPhone = phone.replace(/[^\d]/g, '');
                    
                    // Remove leading 0 for Austrian numbers
                    if (country === 'AT' && cleanPhone.indexOf('0') === 0) {
                        cleanPhone = cleanPhone.substring(1);
                    }
                    
                    fullNumber = dialCode + cleanPhone;
                }
            }
            
            $fullField.val(fullNumber);
        },
        
        showCountryHint: function($container, message) {
            // Remove existing hints
            $container.find('.country-hint').remove();
            
            // Add new hint
            var $hint = $('<div class="country-hint">' + message + '</div>');
            $container.append($hint);
            
            // Auto-hide after 3 seconds
            setTimeout(function() {
                $hint.fadeOut(300, function() {
                    $hint.remove();
                });
            }, 3000);
        },
        
        validateBeforeSubmit: function(e) {
            var hasErrors = false;
            var $form = $(e.target);
            
            $form.find('.gfield_phone').each(function() {
                var $field = $(this);
                var $container = $field.find('.ginput_container_international_phone');
                
                if (!$container.length) {
                    return;
                }
                
                var $phoneInput = $container.find('.gf_international_phone_number');
                var $countrySelect = $container.find('.gf_international_phone_country');
                
                // Check if field is required
                var isRequired = $field.hasClass('gfield_required') || $field.find('.gfield_required').length > 0;
                var phone = $phoneInput.val().trim();
                
                if (isRequired && !phone) {
                    $field.addClass('gfield_error');
                    if (!$container.find('.validation_message').length) {
                        $container.append('<div class="validation_message">' + gfInternationalPhone.messages.thisFieldRequired + '</div>');
                    }
                    hasErrors = true;
                } else if (phone) {
                    // Validate phone if provided
                    if (!this.validatePhoneNumber($phoneInput)) {
                        hasErrors = true;
                    }
                }
                
                // Update full number before submit
                this.updateFullNumber($container);
            }.bind(this));
            
            if (hasErrors) {
                e.preventDefault();
                
                // Scroll to first error
                var $firstError = $form.find('.gfield_error:first');
                if ($firstError.length) {
                    $('html, body').animate({
                        scrollTop: $firstError.offset().top - 100
                    }, 500);
                }
                
                return false;
            }
        }
    };
    
    // Initialize
    $(document).ready(function() {
        GFInternationalPhone.init();
    });
    
})(jQuery);