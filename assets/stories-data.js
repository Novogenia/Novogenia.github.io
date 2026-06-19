/* === Novogenia Story Database (EN, native site) ===
   Genetic variants told as first-person stories.
   Used by lifestyle.html, beauty.html, supplements.html.
   Source: NovoDaily German story set, translated for the EN-first native rebuild.
   Categories kept as internal keys (never displayed) so cluster filters match.
=================================================== */
window.NOVO_STORIES = [
{id:'koffein',category:'Verträglichkeit',gene:'CYP1A2',geneName:'Cytochrome P450 1A2',person:{name:'Lisa',age:34},photo:'story_persons/01_lisa_koffein.jpg',geneEffect:'Slow caffeine breakdown',
 headline:`“I thought my morning coffee was good for me. <span class="accent">My genes say otherwise.</span>”`,
 shortStory:`Three cups a day were my ritual — until I learned that my <b>CYP1A2 gene</b> breaks down caffeine only slowly. Instead of giving me a lift, my coffee strains my cardiovascular system for hours.`},

{id:'laktose',category:'Verträglichkeit',gene:'LCT',geneName:'Lactase gene (LCT)',person:{name:'Julia',age:29},photo:'story_persons/02_julia_laktose.jpg',geneEffect:'Lactose intolerance predisposed',
 headline:`“Stomach ache after yoghurt? For years I <span class="accent">simply ignored it.</span>”`,
 shortStory:`“You’re just sensitive,” everyone said. My <b>LCT gene</b> says: after infancy my lactase production was switched off almost entirely — I’m lactose intolerant.`},

{id:'salz',category:'Verträglichkeit',gene:'AGT',geneName:'Angiotensinogen gene (AGT)',person:{name:'Andreas',age:57},photo:'story_persons/04_andreas_salz.jpg',geneEffect:'Increased salt sensitivity',
 headline:`“My doctor warns me about salt. My genes explain <span class="accent">why it hits me especially hard.</span>”`,
 shortStory:`High blood pressure — but in my case even a little salt has an effect. My <b>AGT gene</b> makes me especially salt-sensitive: even small amounts raise my blood pressure markedly.`},

{id:'gluten',category:'Verträglichkeit',gene:'HLA-DQ2/DQ8',geneName:'HLA type II',person:{name:'Magdalena',age:32},photo:'story_persons/06_magdalena_gluten.jpg',geneEffect:'Increased coeliac risk',
 headline:`“Going gluten-free used to be a lifestyle for me. <span class="accent">Today it’s a necessity.</span>”`,
 shortStory:`I ate low-gluten because others did. My <b>HLA-DQ2 gene</b> says: I belong to the risk group for coeliac disease. A blood test confirmed it.`},

{id:'vitamin-d',category:'Mikronährstoffe',gene:'VDR',geneName:'Vitamin D receptor (VDR)',person:{name:'Markus',age:38},photo:'story_persons/08_markus_vitamind.jpg',geneEffect:'Reduced receptor activity',
 headline:`“I’m outdoors a lot and have acceptable vitamin D levels. <span class="accent">For my genes that’s still too little.</span>”`,
 shortStory:`Skiing in winter, hiking in summer — sun was never a deficiency issue for me. My vitamin D level was a “normal” 30 ng/ml. But my <b>VDR gene</b> says: my receptor variant makes 30 ng/ml too little. I need 60+, otherwise vitamin D simply doesn’t work inside my cells.`},

{id:'folsaeure',category:'Mikronährstoffe',gene:'MTHFR',geneName:'Methylenetetrahydrofolate reductase (MTHFR)',person:{name:'Sarah',age:30},photo:'story_persons/09_sarah_folsaeure.jpg',geneEffect:'Impaired folate activation',
 headline:`“My gynaecologist recommended folic acid. My genes could <span class="accent">barely use it.</span>”`,
 shortStory:`During my pregnancy I dutifully took folic acid. My <b>MTHFR gene</b> carries a double variant that can barely convert ordinary folic acid into the active form (methylfolate).`},

{id:'eisen',category:'Mikronährstoffe',gene:'HFE',geneName:'Haemochromatosis gene (HFE)',person:{name:'Stefanie',age:43},photo:'story_persons/10_stefanie_eisen.jpg',geneEffect:'Risk of iron overload',
 headline:`“Iron tablets for my fatigue? <span class="accent">For me that would be dangerous.</span>”`,
 shortStory:`Tired, pale, drained — the classic picture of iron deficiency. But my <b>HFE gene</b> shows the opposite: I’m prone to iron overload.`},

{id:'omega-3',category:'Mikronährstoffe',gene:'FADS1',geneName:'Fatty acid desaturase 1 (FADS1)',person:{name:'Thomas',age:53},photo:'story_persons/12_thomas_omega3.jpg',geneEffect:'Atypical omega-3 response',
 headline:`“I’ve taken fish oil for years to lower cholesterol. In my case it <span class="accent">makes the problem worse.</span>”`,
 shortStory:`My doctor recommended omega-3 capsules. My <b>FADS1 gene</b> says: with this variant fish oil actually pushes my HDL down further instead of raising it.`},

{id:'selen',category:'Mikronährstoffe',gene:'GPX1',geneName:'Glutathione peroxidase 1 (GPX1)',person:{name:'Bernhard',age:48},photo:'story_persons/14_bernhard_selen.jpg',geneEffect:'Doubled selenium requirement',
 headline:`“I thought I was getting enough selenium. <span class="accent">Because of a gene variant I need twice as much.</span>”`,
 shortStory:`My selenium level was “within normal range” — Brazil nuts now and then, fish twice a week. But my <b>GPX1 gene</b> has a variant that nearly doubles my selenium requirement. What’s enough for the average person was chronic deficiency for me.`},

{id:'q10',category:'Mikronährstoffe',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Daniela',age:47},photo:'story_persons/22_daniela_q10.jpg',geneEffect:'Reduced Q10 activation',
 headline:`“Twelve years of taking coenzyme Q10 — and my genes revealed: <span class="accent">it was all for nothing.</span>”`,
 shortStory:`€600 a year on high-quality Q10 — for wrinkles, for energy, for my heart. But my <b>NQO1 gene</b> has a variant that strongly slows the activation of Q10 into its effective form (ubiquinol). 12 years of money burned.`},

{id:'oxidativer-stress',category:'Mikronährstoffe',gene:'SOD2',geneName:'Superoxide dismutase 2 (SOD2)',person:{name:'Petra',age:50},photo:'story_persons/25_petra_sod2.jpg',geneEffect:'Reduced protective capacity',
 headline:`“My genes don’t protect me well enough from oxidative stress. Now I let <span class="accent">antioxidants</span> provide that protection.”`,
 shortStory:`Berries, broccoli, pomegranate — my diet could be a wellness-magazine cover. But my <b>SOD2 gene</b> dampens my body’s own antioxidant activity. More fruit alone doesn’t help — targeted micronutrients do.`},

{id:'entgiftung-rauchen',category:'Mikronährstoffe',gene:'GSTM1',geneName:'Glutathione S-transferase Mu 1 (GSTM1)',person:{name:'Klaus',age:60},photo:'story_persons/26_klaus_gstm1.jpg',geneEffect:'Complete null variant',
 headline:`“I always thought smoking wasn’t that bad — my relatives all smoke without consequences. <span class="accent">For me it’s far worse.</span>”`,
 shortStory:`Father, uncle, aunt — all smoking for decades, all healthy. I thought it ran in the family. My <b>GSTM1 gene</b> says: not for me. The null variant leaves my body almost defenceless against toxins.`},

{id:'immunsystem',category:'Mikronährstoffe',gene:'TNF-α',geneName:'Tumour necrosis factor alpha (TNF-α)',person:{name:'Robert',age:55},photo:'story_persons/27_robert_tnf.jpg',geneEffect:'Over-reactive immune system',
 headline:`“My genes make my immune system too aggressive. With the right diet <span class="accent">I can counteract it.</span>”`,
 shortStory:`Stiff joints, constant tinnitus, heavy eyelids in the morning — the classic “inflammaging” symptoms. My <b>TNF-α gene</b> says: my inflammatory response is genetically above average. My immune system overreacts to every small trigger.`},

{id:'homocystein',category:'Mikronährstoffe',gene:'CBS / MTHFR',geneName:'Cystathionine beta-synthase (CBS)',person:{name:'Elke',age:45},photo:'story_persons/29_elke_cbs.jpg',geneEffect:'Higher homocysteine-metabolism demand',
 headline:`“My genetic analysis finally explained <span class="accent">my naturally high homocysteine levels.</span>”`,
 shortStory:`My doctor measured homocysteine — 22 µmol/L, far too high (norm <10). My genes <b>MTHFR + CBS + MTR</b> together form a risk profile that explains exactly this value. Today I take targeted methylfolate, B12 and B6 — and my level has dropped to 8 µmol/L.`},

{id:'koffein-schlaf',category:'Verträglichkeit',gene:'CYP1A2',geneName:'Cytochrome P450 1A2',person:{name:'Tobias',age:37},photo:'story_persons/19_tobias_actn3.jpg',geneEffect:'Extreme caffeine sensitivity',
 headline:`“After one coffee I can’t sleep for five hours. <span class="accent">My genes reveal why.</span>”`,
 shortStory:`Just a single espresso in the late afternoon — and my mind is wide awake until midnight. My <b>CYP1A2 gene</b> is a high-sensitivity variant: caffeine stays in my blood twice as long as average.`},

{id:'schwester-vergleich',category:'Stoffwechsel & Gewicht',gene:'FTO',geneName:'Fat Mass and Obesity-Associated (FTO)',person:{name:'Tanja',age:36},photo:'story_persons/32_tanja_schwester.jpg',geneEffect:'Obesity risk variant (unlike her sister)',
 headline:`“My sister can eat whatever she wants and never gains weight. <span class="accent">Genetically we’re simply different.</span>”`,
 shortStory:`We look alike, we eat alike — and yet she’s slim while I struggle. My <b>FTO gene</b> carries the risk variant; hers doesn’t. I finally understand: it isn’t my willpower.`},

{id:'low-carb',category:'Stoffwechsel & Gewicht',gene:'APOA5 / PPARG',geneName:'Lipid metabolism cluster',person:{name:'Verena',age:41},photo:'story_persons/33_verena_lowcarb.jpg',geneEffect:'Carbohydrate responder, fat sensitivity',
 headline:`“Low carb was all the rage among my friends. For me it was <span class="accent">completely useless.</span>”`,
 shortStory:`Three months of strict low carb. My friends lost 6–8 kilos, I lost 0.5. My <b>APOA5 and PPARG profile</b> shows: I respond above average to moderate carbohydrates and rather poorly to high fat intake.`},

{id:'sport-vergeblich',category:'Stoffwechsel & Gewicht',gene:'ADRB2 + FTO',geneName:'Adrenoreceptor + FTO',person:{name:'Stefan',age:42},photo:'story_persons/34_stefan_sportlos.jpg',geneEffect:'Low exercise fat-burning response',
 headline:`“I push myself in the gym — and still barely lose weight. <span class="accent">My genes explained why.</span>”`,
 shortStory:`Strength training three times a week, plus 5-km runs. On the scale: almost nothing. My <b>ADRB2 gene</b> responds poorly to exercise fat-burning, and my <b>FTO</b> slows things further. For me, movement has to be combined with diet.`},

{id:'diaet-resistenz',category:'Stoffwechsel & Gewicht',gene:'PPARG / FTO',geneName:'PPARG obesity cluster',person:{name:'Eva',age:48},photo:'story_persons/35_eva_diaet.jpg',geneEffect:'Adaptive hunger-saving mode',
 headline:`“When I eat less, I go hungry. On the scale <span class="accent">nothing happens anyway.</span>”`,
 shortStory:`Cutting calories to 1,500 kcal — and my body switches to energy-saving mode instead of fat-burning. My <b>PPARG gene</b> + <b>FTO</b> combination means my metabolism responds to calorie restriction by shutting down, not by losing weight.`},

{id:'fto-heisshunger',category:'Stoffwechsel & Gewicht',gene:'FTO',geneName:'Fat Mass and Obesity-Associated (FTO)',person:{name:'Maria',age:37},photo:'story_persons/15_maria_fto.jpg',geneEffect:'Obesity risk variant (hunger driver)',
 headline:`“I have a variant in the FTO gene — it explains my <span class="accent">unnaturally strong hunger</span> and my food cravings.”`,
 shortStory:`My hunger never felt “normal” — cravings for sweets three hours after a proper meal. My <b>FTO gene</b> carries the A/A risk variant: the hunger-signal gene that drives exactly these cravings.`},

{id:'saettigung',category:'Stoffwechsel & Gewicht',gene:'LEPR',geneName:'Leptin receptor (LEPR)',person:{name:'Nina',age:28},photo:'story_persons/16_nina_lepr.jpg',geneEffect:'Reduced satiety response',
 headline:`“After eating I often feel overly full and sluggish. <span class="accent">My hunger signal kicks in too late.</span>”`,
 shortStory:`I eat fast, and usually only realise after 20 minutes that I’m full — by then often well overeaten. My <b>LEPR gene</b> slows my leptin response — the satiety signal reaches me with a delay.`},

{id:'fett-vs-carb',category:'Stoffwechsel & Gewicht',gene:'PPARG',geneName:'Peroxisome proliferator-activated receptor (PPARG)',person:{name:'Florian',age:40},photo:'story_persons/17_florian_ppar.jpg',geneEffect:'High fat-storage rate',
 headline:`“I thought I just gain weight easily. My genes revealed: <span class="accent">for me it’s only fat calories, not carbs.</span>”`,
 shortStory:`Avocado toast, olive oil, nuts — my “healthy” diet. But my <b>PPARG gene</b> stores every fat calorie efficiently, while carbs barely affect my weight. Years of the wrong strategy.`},

{id:'muskelmasse',category:'Sport',gene:'ACTN3 + MSTN',geneName:'Muscle fibre profile',person:{name:'Stephan',age:46},photo:'story_persons/36_stephan_muskel.jpg',geneEffect:'Increased muscle loss under deficit',
 headline:`“Losing muscle on a diet is especially drastic for me. <span class="accent">Targeted strength training is how I protect myself.</span>”`,
 shortStory:`On my last diet I lost 4 kg of muscle alongside 8 kg of fat — far too much. My <b>ACTN3 and MSTN profiles</b> explain it: my muscle builds more slowly and breaks down faster than average. For me, strength training isn’t an option — it’s a must.`},

{id:'bauchspeck',category:'Stoffwechsel & Gewicht',gene:'APOC3 / ADIPOQ',geneName:'Belly-fat distribution cluster',person:{name:'Werner',age:49},photo:'story_persons/37_werner_bauch.jpg',geneEffect:'Visceral fat distribution tendency',
 headline:`“When I gain weight, it all goes to my belly. <span class="accent">My genes showed why.</span>”`,
 shortStory:`Slim legs, round belly — the classic “apple type”. My <b>ADIPOQ and APOC3 profile</b> says: I preferentially store visceral (abdominal) fat. That’s not just cosmetic — metabolically it’s the most dangerous fat.`},

{id:'jojo',category:'Stoffwechsel & Gewicht',gene:'FTO + ADRB2',geneName:'Yo-yo risk cluster',person:{name:'Birgit',age:43},photo:'story_persons/38_birgit_jojo.jpg',geneEffect:'Stronger rebound effect',
 headline:`“Because of my genes I have an especially strong yo-yo effect. <span class="accent">My only path is a lifestyle change, not a crash diet.</span>”`,
 shortStory:`Three diets — three times every kilo came back, plus one. My <b>FTO + ADRB2 combination</b> makes my body switch to maximum rebuild mode after every restriction. Today I know: for me a crash diet is the worst approach.`},

{id:'kaffee-kollagen',category:'Beauty',gene:'CYP1A2 + Collagen',geneName:'Caffeine–collagen axis',person:{name:'Lara',age:61},photo:'story_persons/43_lara_kaffee_kollagen.jpg',geneEffect:'Caffeine inhibits collagen synthesis',
 headline:`“My morning coffee was blocking my collagen production and speeding up my ageing. <span class="accent">Time to rethink.</span>”`,
 shortStory:`For years, 4 cups of coffee a day. My DNA test shows: combined with my <b>CYP1A2 variant</b>, caffeine doesn’t just act as a stressor for me — it also inhibits collagen synthesis and accelerates skin ageing.`},

{id:'hyaluron-abbau',category:'Beauty',gene:'HYAL1',geneName:'Hyaluronidase 1 (HYAL1)',person:{name:'Heidi',age:56},photo:'story_persons/40_heidi_hyaluron.jpg',geneEffect:'Increased hyaluronic-acid breakdown',
 headline:`“My genes don’t protect my skin from hyaluronic-acid breakdown. <span class="accent">That explains my constantly dry skin.</span>”`,
 shortStory:`No matter how much I moisturise — my skin stays dry. My <b>HYAL1 gene</b> is a high-activity variant: the enzyme that breaks down hyaluronic acid (the body’s own moisture reservoir) runs at full tilt in me. Hyaluronic acid disappears faster than it’s replaced.`},

{id:'q10-beauty',category:'Beauty',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Ingrid',age:63},photo:'story_persons/44_ingrid_q10.jpg',geneEffect:'Q10 activation reduced',
 headline:`“Everyone swears by coenzyme Q10 as an anti-ageing miracle. <span class="accent">My gene test: for me it does nothing.</span>”`,
 shortStory:`Q10 capsules for years, Q10 cream in the bathroom. But my <b>NQO1 gene</b> has a risk variant that strongly slows the activation of Q10 into its effective form. For me the Q10 products did almost nothing — switching to ubiquinol was the game changer.`},

{id:'immun-haut',category:'Beauty',gene:'TNF-α + IL6',geneName:'Inflammation cluster',person:{name:'Brigitte',age:55},photo:'story_persons/45_brigitte_immun.jpg',geneEffect:'Over-reactive inflammatory response',
 headline:`“My gene variants make my immune system too aggressive. <span class="accent">Over time that damages my skin.</span>”`,
 shortStory:`Sensitive, reddened skin, recurring small inflammations. My <b>TNF-α gene</b> carries an over-reactive variant: even small triggers like stress or an infection set off inflammatory skin reactions. My immune system overshoots — and my skin pays the price.`},

{id:'apoe',category:'Mikronährstoffe',gene:'APOE',geneName:'Apolipoprotein E (APOE)',person:{name:'Walter',age:59},photo:'story_persons/28_walter_apoe.jpg',geneEffect:'APOE ε4 — cholesterol risk variant',
 headline:`“My cholesterol rises despite exercise and diet. <span class="accent">My APOE gene explains why.</span>”`,
 shortStory:`Half-marathons, a Mediterranean diet — and still LDL at 175. My <b>APOE gene</b> carries the ε4 variant: in me, every gram of saturated fat from food can drive LDL sharply upward.`},

{id:'comt-stress',category:'Burnout & Stress',gene:'COMT',geneName:'Catechol-O-methyltransferase (COMT)',person:{name:'Jana',age:25},photo:'story_persons/30_jana_comt.jpg',geneEffect:'Slow stress-hormone breakdown',
 headline:`“Small incidents always stressed me instantly. <span class="accent">My COMT gene doesn’t protect me well enough from that.</span>”`,
 shortStory:`Others can switch off after work — my mind keeps spinning, even a late email can throw me off. My <b>COMT gene</b> breaks down stress hormones more slowly. Today I deliberately use activities that support my stress metabolism.`},

{id:'comt-impulse',category:'Burnout & Stress',gene:'COMT',geneName:'Catechol-O-methyltransferase (COMT)',person:{name:'Helmut',age:51},photo:'story_persons/46_helmut_impuls.jpg',geneEffect:'Higher impulsivity to reward cues',
 headline:`“Alcohol, gambling — hard to keep under control. <span class="accent">My COMT gene held the explanation.</span>”`,
 shortStory:`Years of self-blame — until I learned that my <b>COMT gene variant</b> strongly influences my dopamine system. Reward cues feel more intense to me, and the comedown after the “kick” is slower — which makes impulse control objectively harder.`},

{id:'supp-eisen',category:'Nahrungsergänzung',gene:'HFE',geneName:'Haemochromatosis gene (HFE)',person:{name:'Reinhard',age:47},photo:'story_persons/56_renate_eisen.jpg',geneEffect:'Tailored iron dosing',
 headline:`“My HFE risk makes off-the-shelf iron supplements dangerous. <span class="accent">Today I know what my body really needs.</span>”`,
 shortStory:`Classic “power iron” supplements would be risky for me — I’m genetically prone to iron overload. Today I avoid blanket multivitamin blends with iron and rely on co-factors that optimise how I absorb iron naturally from food.`},

{id:'supp-folsaeure',category:'Nahrungsergänzung',gene:'MTHFR',geneName:'Methylenetetrahydrofolate reductase (MTHFR)',person:{name:'Ulrike',age:51},photo:'story_persons/58_ulrike_folsaeure.jpg',geneEffect:'Folate as methylfolate',
 headline:`“Folic acid from the supermarket? Useless with my MTHFR variant. <span class="accent">I need the already-activated form.</span>”`,
 shortStory:`Standard folic acid is unusable for my body — my <b>MTHFR gene</b> can barely activate it. Today I take 5-MTHF (L-methylfolate) — the ready-activated form my cells can use directly.`},

{id:'supp-selen',category:'Nahrungsergänzung',gene:'GPX1',geneName:'Glutathione peroxidase 1 (GPX1)',person:{name:'Hartmut',age:50},photo:'story_persons/59_hartmut_selen.jpg',geneEffect:'Doubled selenium need, individually dosed',
 headline:`“My GPX1 variant doubles my selenium requirement. <span class="accent">Today I dose precisely — not by default.</span>”`,
 shortStory:`Standard multivitamins contain 55 µg of selenium — the standard dose. But with my <b>GPX1 variant</b> I need around 120 µg to achieve the same antioxidant protection. Today I know that — and supplement accordingly.`},

{id:'supp-q10',category:'Nahrungsergänzung',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Inge',age:49},photo:'story_persons/57_inge_q10.jpg',geneEffect:'Q10 as ubiquinol',
 headline:`“Standard Q10 does nothing with my NQO1 variant. <span class="accent">I need different antioxidants.</span>”`,
 shortStory:`Cheap Q10 in ubiquinone form? Unusable for my <b>NQO1 gene</b> — I lack the activating enzyme. Today I rely on other antioxidants: astaxanthin, vitamin C, vitamin E and glutathione precursors. My energy levels and skin quality have finally benefited.`},

{id:'supp-vitamin-d',category:'Nahrungsergänzung',gene:'VDR',geneName:'Vitamin D receptor (VDR)',person:{name:'Wolfgang',age:54},photo:'story_persons/60_wolfgang_d3.jpg',geneEffect:'Higher vitamin D dose per genetics',
 headline:`“My VDR variant needs double the vitamin D dose. <span class="accent">Standard products aren’t enough for me.</span>”`,
 shortStory:`Standard products with 1,000 IU of vitamin D? Too little with my <b>VDR variant</b> — I need at least 3,000–4,000 IU to achieve an effective result. Today I know that and supplement accordingly.`},

{id:'sprint-vs-ausdauer',category:'Performance',gene:'ACTN3 + ACE',geneName:'Power / endurance profile',person:{name:'Manuel',age:33},photo:'story_persons/47_manuel_ausdauer.jpg',geneEffect:'Endurance-dominant profile',
 headline:`“All my life I trained for explosive power. My gene test revealed: <span class="accent">my talent lies in endurance.</span>”`,
 shortStory:`CrossFit, Olympic lifting, sprint distances — the disciplines that never really suited me. My <b>ACTN3 + ACE profile</b> shows: genetically I’m a classic endurance type. Surprised, frustrated, but finally with an explanation.`},

{id:'testosteron',category:'Performance',gene:'SHBG + AR',geneName:'Sex hormone-binding globulin (SHBG)',person:{name:'Otto',age:62},photo:'story_persons/48_otto_testo.jpg',geneEffect:'Increased testosterone binding',
 headline:`“My gene test finally explained <span class="accent">my chronically low testosterone levels.</span>”`,
 shortStory:`Low drive, less muscle gain, fading energy — medical tests showed chronically low free testosterone. My <b>SHBG gene</b> explains it: in me, testosterone is bound more strongly, so less is available “free”.`},

{id:'laktat-hoch',category:'Performance',gene:'MCT1 + LDHA',geneName:'Lactate metabolism',person:{name:'Kevin',age:31},photo:'story_persons/49_kevin_laktat.jpg',geneEffect:'Delayed lactate clearance',
 headline:`“My gene test explained to me <span class="accent">that I simply have higher lactate values.</span>”`,
 shortStory:`Training-plan lactate threshold: 4 mmol/L. My real values: 5.5–6.5 mmol/L at the same pace. My <b>MCT1 gene</b> is a risk variant: my lactate transport out of the muscles runs more slowly.`},

{id:'sport-stress',category:'Performance',gene:'COMT + ADRB2',geneName:'Stress–performance cluster',person:{name:'Pascal',age:29},photo:'story_persons/50_pascal_stress.jpg',geneEffect:'Amplified stress response',
 headline:`“Performance in competitive sport is stressful. <span class="accent">And my genes work against me on top of that.</span>”`,
 shortStory:`Race day, adrenaline pumping — and my body takes too long to clear it again. My <b>COMT + ADRB2 profile</b> is a stress-sensitive constellation. Peak performance costs me more than others.`},

{id:'erholung-lang',category:'Performance',gene:'IL6 + CRP',geneName:'Inflammation–recovery cluster',person:{name:'Mathias',age:27},photo:'story_persons/51_mathias_erholung.jpg',geneEffect:'Prolonged inflammatory response',
 headline:`“My genes stretch my recovery time after training <span class="accent">needlessly long.</span>”`,
 shortStory:`While my training partners are back to full strength after 24 hours, I need 48 — sometimes 72. My <b>IL6 gene</b> carries a high-activity variant: my inflammatory response after exertion lasts longer.`},

{id:'muskelmasse-talent',category:'Performance',gene:'MSTN + IGF1',geneName:'Muscle-building cluster',person:{name:'Daniel',age:22},photo:'story_persons/52_daniel_muskel.jpg',geneEffect:'Optimal hypertrophy profile',
 headline:`“According to my genes I have exactly the right predisposition for large muscle mass. <span class="accent">That fits my goal perfectly.</span>”`,
 shortStory:`Bodybuilding is my goal. My gene test confirms it: my <b>MSTN + IGF1 profile</b> is optimal for hypertrophy. Low myostatin activity (the muscle brake), high IGF1 response to training. A genetic full go.`},

{id:'puste-aus',category:'Performance',gene:'ACTN3',geneName:'Alpha-actinin 3 (ACTN3)',person:{name:'Jakob',age:20},photo:'story_persons/53_jakob_puste.jpg',geneEffect:'Sprinter-dominant fibre profile',
 headline:`“Now I know why I run out of breath mid-game: <span class="accent">I’m a genetic sprinter, not an endurance runner.</span>”`,
 shortStory:`Football: great explosive bursts, hard to last 90 minutes. My <b>ACTN3 gene</b> explains it: R/R variant — a high proportion of fast-twitch fibres, a classic sprinter profile. In team sport that’s both an advantage and a drawback.`},

{id:'vo2-max',category:'Performance',gene:'PPARGC1A',geneName:'Mitochondrial biogenesis gene (PPARGC1A)',person:{name:'Patrick',age:26},photo:'story_persons/54_felix_vo2.jpg',geneEffect:'Top mitochondrial activity',
 headline:`“According to my genes I have the <span class="accent">best conditions for a high VO2max.</span>”`,
 shortStory:`My last performance test: VO2max 64 ml/kg/min — elite range for my age. My <b>PPARGC1A gene</b> confirms it: I have the top variant for mitochondrial biogenesis. My body produces energy from oxygen more efficiently than average.`},

{id:'verletzung',category:'Performance',gene:'COL5A1',geneName:'Collagen type V alpha 1 (COL5A1)',person:{name:'Lukas',age:44},photo:'story_persons/55_tobias_verletzung.jpg',geneEffect:'Increased tendon-injury risk',
 headline:`“One brief lapse and an injury cost me 3 games. <span class="accent">The gene test had predicted it.</span>”`,
 shortStory:`An Achilles tendon problem after a sprint drill. 3 weeks out, 3 games lost. My <b>COL5A1 gene</b> carries a risk variant — my tendon structure is less tear-resistant than average. Had I known earlier, I’d have been more careful.`}
];
