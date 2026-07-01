/* === Novogenia Story Database (EN, native site) ===
   Genetic variants told as first-person stories.
   Used by lifestyle.html, beauty.html, supplements.html.
   Source: NovoDaily German story set, translated for the EN-first native rebuild.
   Categories kept as internal keys (never displayed) so cluster filters match.
=================================================== */
window.NOVO_STORIES = [
{id:'koffein',category:'Verträglichkeit',gene:'CYP1A2',geneName:'Cytochrome P450 1A2',person:{name:'Lisa',age:34},photo:'story_persons/01_lisa_koffein.jpg',geneEffect:'Dégradation lente de la caféine',
 headline:`« Je pensais que mon café du matin me faisait du bien. <span class="accent">Mes gènes disent le contraire.</span> »`,
 shortStory:`Trois tasses par jour étaient mon rituel — jusqu'à ce que j'apprenne que mon <b>gène CYP1A2</b> ne dégrade la caféine que lentement. Au lieu de me donner un coup de fouet, mon café sollicite mon système cardiovasculaire pendant des heures.`},

{id:'laktose',category:'Verträglichkeit',gene:'LCT',geneName:'Lactase gene (LCT)',person:{name:'Julia',age:29},photo:'story_persons/02_julia_laktose.jpg',geneEffect:'Prédisposition à l\'intolérance au lactose',
 headline:`« Mal au ventre après un yaourt ? Pendant des années, je l'ai <span class="accent">tout simplement ignoré.</span> »`,
 shortStory:`« Tu es juste sensible », me disait-on. Mon <b>gène LCT</b> dit : après la petite enfance, ma production de lactase s'est presque entièrement arrêtée — je suis intolérante au lactose.`},

{id:'salz',category:'Verträglichkeit',gene:'AGT',geneName:'Angiotensinogen gene (AGT)',person:{name:'Andreas',age:57},photo:'story_persons/04_andreas_salz.jpg',geneEffect:'Sensibilité accrue au sel',
 headline:`« Mon médecin me met en garde contre le sel. Mes gènes expliquent <span class="accent">pourquoi cela me touche particulièrement fort.</span> »`,
 shortStory:`Hypertension — mais dans mon cas, même un peu de sel a un effet. Mon <b>gène AGT</b> me rend particulièrement sensible au sel : même de petites quantités font nettement monter ma tension.`},

{id:'gluten',category:'Verträglichkeit',gene:'HLA-DQ2/DQ8',geneName:'HLA type II',person:{name:'Magdalena',age:32},photo:'story_persons/06_magdalena_gluten.jpg',geneEffect:'Risque accru de maladie cœliaque',
 headline:`« Manger sans gluten était autrefois un choix de vie pour moi. <span class="accent">Aujourd'hui, c'est une nécessité.</span> »`,
 shortStory:`Je mangeais pauvre en gluten parce que les autres le faisaient. Mon <b>gène HLA-DQ2</b> dit : j'appartiens au groupe à risque pour la maladie cœliaque. Une prise de sang l'a confirmé.`},

{id:'vitamin-d',category:'Mikronährstoffe',gene:'VDR',geneName:'Vitamin D receptor (VDR)',person:{name:'Markus',age:38},photo:'story_persons/08_markus_vitamind.jpg',geneEffect:'Activité réduite du récepteur',
 headline:`« Je passe beaucoup de temps dehors et j'ai un taux de vitamine D acceptable. <span class="accent">Pour mes gènes, c'est encore trop peu.</span> »`,
 shortStory:`Du ski en hiver, de la randonnée en été — le soleil n'a jamais été un problème de carence pour moi. Mon taux de vitamine D était « normal » à 30 ng/ml. Mais mon <b>gène VDR</b> dit : ma variante de récepteur rend 30 ng/ml insuffisant. Il m'en faut plus de 60, sinon la vitamine D ne fonctionne tout simplement pas à l'intérieur de mes cellules.`},

{id:'folsaeure',category:'Mikronährstoffe',gene:'MTHFR',geneName:'Methylenetetrahydrofolate reductase (MTHFR)',person:{name:'Sarah',age:30},photo:'story_persons/09_sarah_folsaeure.jpg',geneEffect:'Activation altérée des folates',
 headline:`« Ma gynécologue m'a recommandé de l'acide folique. Mes gènes pouvaient <span class="accent">à peine l'utiliser.</span> »`,
 shortStory:`Pendant ma grossesse, j'ai consciencieusement pris de l'acide folique. Mon <b>gène MTHFR</b> porte une double variante qui ne peut presque pas convertir l'acide folique ordinaire en sa forme active (le méthylfolate).`},

{id:'eisen',category:'Mikronährstoffe',gene:'HFE',geneName:'Haemochromatosis gene (HFE)',person:{name:'Stefanie',age:43},photo:'story_persons/10_stefanie_eisen.jpg',geneEffect:'Risque de surcharge en fer',
 headline:`« Des comprimés de fer pour ma fatigue ? <span class="accent">Pour moi, ce serait dangereux.</span> »`,
 shortStory:`Fatiguée, pâle, épuisée — le tableau classique d'une carence en fer. Mais mon <b>gène HFE</b> montre l'inverse : je suis sujette à une surcharge en fer.`},

{id:'omega-3',category:'Mikronährstoffe',gene:'FADS1',geneName:'Fatty acid desaturase 1 (FADS1)',person:{name:'Thomas',age:53},photo:'story_persons/12_thomas_omega3.jpg',geneEffect:'Réponse atypique aux oméga-3',
 headline:`« Je prends de l'huile de poisson depuis des années pour baisser mon cholestérol. Dans mon cas, cela <span class="accent">aggrave le problème.</span> »`,
 shortStory:`Mon médecin m'a recommandé des capsules d'oméga-3. Mon <b>gène FADS1</b> dit : avec cette variante, l'huile de poisson fait en réalité baisser encore mon HDL au lieu de l'augmenter.`},

{id:'selen',category:'Mikronährstoffe',gene:'GPX1',geneName:'Glutathione peroxidase 1 (GPX1)',person:{name:'Bernhard',age:48},photo:'story_persons/14_bernhard_selen.jpg',geneEffect:'Besoin en sélénium doublé',
 headline:`« Je pensais avoir assez de sélénium. <span class="accent">À cause d'une variante génétique, il m'en faut deux fois plus.</span> »`,
 shortStory:`Mon taux de sélénium était « dans la norme » — quelques noix du Brésil de temps en temps, du poisson deux fois par semaine. Mais mon <b>gène GPX1</b> présente une variante qui double presque mon besoin en sélénium. Ce qui suffit à une personne moyenne était pour moi une carence chronique.`},

{id:'q10',category:'Mikronährstoffe',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Daniela',age:47},photo:'story_persons/22_daniela_q10.jpg',geneEffect:'Activation réduite du Q10',
 headline:`« Douze ans à prendre de la coenzyme Q10 — et mes gènes ont révélé : <span class="accent">tout cela ne servait à rien.</span> »`,
 shortStory:`600 € par an en Q10 de haute qualité — pour les rides, pour l'énergie, pour mon cœur. Mais mon <b>gène NQO1</b> présente une variante qui ralentit fortement l'activation du Q10 en sa forme efficace (l'ubiquinol). 12 ans d'argent gaspillé.`},

{id:'oxidativer-stress',category:'Mikronährstoffe',gene:'SOD2',geneName:'Superoxide dismutase 2 (SOD2)',person:{name:'Petra',age:50},photo:'story_persons/25_petra_sod2.jpg',geneEffect:'Capacité de protection réduite',
 headline:`« Mes gènes ne me protègent pas assez bien du stress oxydatif. Aujourd'hui, je laisse les <span class="accent">antioxydants</span> assurer cette protection. »`,
 shortStory:`Baies, brocoli, grenade — mon alimentation pourrait faire la une d'un magazine de bien-être. Mais mon <b>gène SOD2</b> atténue l'activité antioxydante propre à mon corps. Plus de fruits ne suffit pas à eux seuls — des micronutriments ciblés, oui.`},

{id:'entgiftung-rauchen',category:'Mikronährstoffe',gene:'GSTM1',geneName:'Glutathione S-transferase Mu 1 (GSTM1)',person:{name:'Klaus',age:60},photo:'story_persons/26_klaus_gstm1.jpg',geneEffect:'Variante nulle complète',
 headline:`« J'ai toujours pensé que fumer n'était pas si grave — tous mes proches fument sans conséquences. <span class="accent">Pour moi, c'est bien pire.</span> »`,
 shortStory:`Mon père, mon oncle, ma tante — tous fumeurs depuis des décennies, tous en bonne santé. Je pensais que c'était de famille. Mon <b>gène GSTM1</b> dit : pas pour moi. La variante nulle laisse mon corps presque sans défense face aux toxines.`},

{id:'immunsystem',category:'Mikronährstoffe',gene:'TNF-α',geneName:'Tumour necrosis factor alpha (TNF-α)',person:{name:'Robert',age:55},photo:'story_persons/27_robert_tnf.jpg',geneEffect:'Système immunitaire hyperréactif',
 headline:`« Mes gènes rendent mon système immunitaire trop agressif. Avec la bonne alimentation, <span class="accent">je peux le contrer.</span> »`,
 shortStory:`Articulations raides, acouphènes permanents, paupières lourdes le matin — les symptômes classiques de l'« inflammaging ». Mon <b>gène TNF-α</b> dit : ma réponse inflammatoire est génétiquement supérieure à la moyenne. Mon système immunitaire réagit de manière excessive au moindre déclencheur.`},

{id:'homocystein',category:'Mikronährstoffe',gene:'CBS / MTHFR',geneName:'Cystathionine beta-synthase (CBS)',person:{name:'Elke',age:45},photo:'story_persons/29_elke_cbs.jpg',geneEffect:'Besoin accru pour le métabolisme de l\'homocystéine',
 headline:`« Mon analyse génétique a enfin expliqué <span class="accent">mon taux d'homocystéine naturellement élevé.</span> »`,
 shortStory:`Mon médecin a mesuré l'homocystéine — 22 µmol/L, bien trop élevé (norme <10). Mes gènes <b>MTHFR + CBS + MTR</b> forment ensemble un profil de risque qui explique exactement cette valeur. Aujourd'hui, je prends du méthylfolate, de la B12 et de la B6 de façon ciblée — et mon taux est descendu à 8 µmol/L.`},

{id:'koffein-schlaf',category:'Verträglichkeit',gene:'CYP1A2',geneName:'Cytochrome P450 1A2',person:{name:'Tobias',age:37},photo:'story_persons/19_tobias_actn3.jpg',geneEffect:'Sensibilité extrême à la caféine',
 headline:`« Après un seul café, je ne peux pas dormir pendant cinq heures. <span class="accent">Mes gènes en révèlent la raison.</span> »`,
 shortStory:`Un simple espresso en fin d'après-midi — et mon esprit reste bien éveillé jusqu'à minuit. Mon <b>gène CYP1A2</b> est une variante à haute sensibilité : la caféine reste deux fois plus longtemps dans mon sang que la moyenne.`},

{id:'schwester-vergleich',category:'Stoffwechsel & Gewicht',gene:'FTO',geneName:'Fat Mass and Obesity-Associated (FTO)',person:{name:'Tanja',age:36},photo:'story_persons/32_tanja_schwester.jpg',geneEffect:'Variante à risque d\'obésité (contrairement à sa sœur)',
 headline:`« Ma sœur peut manger ce qu'elle veut sans jamais prendre de poids. <span class="accent">Génétiquement, nous sommes tout simplement différentes.</span> »`,
 shortStory:`Nous nous ressemblons, nous mangeons pareil — et pourtant elle est mince tandis que moi, je lutte. Mon <b>gène FTO</b> porte la variante à risque ; le sien non. Je comprends enfin : ce n'est pas une question de volonté.`},

{id:'low-carb',category:'Stoffwechsel & Gewicht',gene:'APOA5 / PPARG',geneName:'Lipid metabolism cluster',person:{name:'Verena',age:41},photo:'story_persons/33_verena_lowcarb.jpg',geneEffect:'Répondeuse aux glucides, sensibilité aux graisses',
 headline:`« Le low carb faisait fureur chez mes amis. Pour moi, c'était <span class="accent">totalement inutile.</span> »`,
 shortStory:`Trois mois de low carb strict. Mes amis ont perdu 6 à 8 kilos, moi 0,5. Mon <b>profil APOA5 et PPARG</b> montre : je réponds mieux que la moyenne aux glucides modérés et plutôt mal à un apport élevé en graisses.`},

{id:'sport-vergeblich',category:'Stoffwechsel & Gewicht',gene:'ADRB2 + FTO',geneName:'Adrenoreceptor + FTO',person:{name:'Stefan',age:42},photo:'story_persons/34_stefan_sportlos.jpg',geneEffect:'Faible combustion des graisses à l\'effort',
 headline:`« Je me donne à fond à la salle — et je perds à peine du poids. <span class="accent">Mes gènes m'ont expliqué pourquoi.</span> »`,
 shortStory:`Musculation trois fois par semaine, plus des courses de 5 km. Sur la balance : presque rien. Mon <b>gène ADRB2</b> répond mal à la combustion des graisses par l'exercice, et mon <b>FTO</b> ralentit encore les choses. Pour moi, le mouvement doit être associé à l'alimentation.`},

{id:'diaet-resistenz',category:'Stoffwechsel & Gewicht',gene:'PPARG / FTO',geneName:'PPARG obesity cluster',person:{name:'Eva',age:48},photo:'story_persons/35_eva_diaet.jpg',geneEffect:'Mode d\'économie face à la faim',
 headline:`« Quand je mange moins, j'ai faim. Et sur la balance, <span class="accent">rien ne bouge de toute façon.</span> »`,
 shortStory:`Réduire à 1 500 kcal — et mon corps passe en mode économie d'énergie au lieu de brûler les graisses. La combinaison de mon <b>gène PPARG</b> + <b>FTO</b> fait que mon métabolisme réagit à la restriction calorique en se mettant en veille, sans perdre de poids.`},

{id:'fto-heisshunger',category:'Stoffwechsel & Gewicht',gene:'FTO',geneName:'Fat Mass and Obesity-Associated (FTO)',person:{name:'Maria',age:37},photo:'story_persons/15_maria_fto.jpg',geneEffect:'Variante à risque d\'obésité (moteur de la faim)',
 headline:`« J'ai une variante du gène FTO — elle explique ma <span class="accent">faim anormalement forte</span> et mes fringales. »`,
 shortStory:`Ma faim ne m'a jamais semblé « normale » — des envies de sucré trois heures après un vrai repas. Mon <b>gène FTO</b> porte la variante à risque A/A : le gène du signal de la faim qui provoque exactement ces fringales.`},

{id:'saettigung',category:'Stoffwechsel & Gewicht',gene:'LEPR',geneName:'Leptin receptor (LEPR)',person:{name:'Nina',age:28},photo:'story_persons/16_nina_lepr.jpg',geneEffect:'Réponse de satiété réduite',
 headline:`« Après avoir mangé, je me sens souvent trop pleine et lourde. <span class="accent">Mon signal de faim se déclenche trop tard.</span> »`,
 shortStory:`Je mange vite, et je ne réalise généralement qu'après 20 minutes que je suis rassasiée — souvent bien après en avoir trop mangé. Mon <b>gène LEPR</b> ralentit ma réponse à la leptine — le signal de satiété me parvient avec un décalage.`},

{id:'fett-vs-carb',category:'Stoffwechsel & Gewicht',gene:'PPARG',geneName:'Peroxisome proliferator-activated receptor (PPARG)',person:{name:'Florian',age:40},photo:'story_persons/17_florian_ppar.jpg',geneEffect:'Taux élevé de stockage des graisses',
 headline:`« Je pensais que je prenais juste facilement du poids. Mes gènes ont révélé : <span class="accent">pour moi, ce sont seulement les calories des graisses, pas les glucides.</span> »`,
 shortStory:`Toast à l'avocat, huile d'olive, noix — mon alimentation « saine ». Mais mon <b>gène PPARG</b> stocke efficacement chaque calorie de graisse, tandis que les glucides n'affectent presque pas mon poids. Des années de mauvaise stratégie.`},

{id:'muskelmasse',category:'Sport',gene:'ACTN3 + MSTN',geneName:'Muscle fibre profile',person:{name:'Stephan',age:46},photo:'story_persons/36_stephan_muskel.jpg',geneEffect:'Perte musculaire accrue en déficit',
 headline:`« Perdre du muscle pendant un régime est particulièrement dramatique pour moi. <span class="accent">Une musculation ciblée est ma façon de me protéger.</span> »`,
 shortStory:`Lors de mon dernier régime, j'ai perdu 4 kg de muscle en plus de 8 kg de graisse — bien trop. Mes <b>profils ACTN3 et MSTN</b> l'expliquent : mon muscle se construit plus lentement et se dégrade plus vite que la moyenne. Pour moi, la musculation n'est pas une option — c'est une obligation.`},

{id:'bauchspeck',category:'Stoffwechsel & Gewicht',gene:'APOC3 / ADIPOQ',geneName:'Belly-fat distribution cluster',person:{name:'Werner',age:49},photo:'story_persons/37_werner_bauch.jpg',geneEffect:'Tendance à la répartition de graisse viscérale',
 headline:`« Quand je prends du poids, tout va sur mon ventre. <span class="accent">Mes gènes ont montré pourquoi.</span> »`,
 shortStory:`Des jambes minces, un ventre rond — le classique « type pomme ». Mon <b>profil ADIPOQ et APOC3</b> dit : je stocke de préférence la graisse viscérale (abdominale). Ce n'est pas seulement esthétique — sur le plan métabolique, c'est la graisse la plus dangereuse.`},

{id:'jojo',category:'Stoffwechsel & Gewicht',gene:'FTO + ADRB2',geneName:'Yo-yo risk cluster',person:{name:'Birgit',age:43},photo:'story_persons/38_birgit_jojo.jpg',geneEffect:'Effet rebond plus marqué',
 headline:`« À cause de mes gènes, j'ai un effet yo-yo particulièrement fort. <span class="accent">Ma seule voie est un changement de mode de vie, pas un régime éclair.</span> »`,
 shortStory:`Trois régimes — trois fois chaque kilo est revenu, plus un. Ma <b>combinaison FTO + ADRB2</b> fait que mon corps passe en mode reconstruction maximale après chaque restriction. Aujourd'hui, je le sais : pour moi, un régime éclair est la pire approche.`},

{id:'kaffee-kollagen',category:'Beauty',gene:'CYP1A2 + Collagen',geneName:'Caffeine–collagen axis',person:{name:'Lara',age:61},photo:'story_persons/43_lara_kaffee_kollagen.jpg',geneEffect:'La caféine inhibe la synthèse du collagène',
 headline:`« Mon café du matin bloquait ma production de collagène et accélérait mon vieillissement. <span class="accent">Il était temps de repenser tout ça.</span> »`,
 shortStory:`Pendant des années, 4 tasses de café par jour. Mon test ADN montre : combinée à ma <b>variante CYP1A2</b>, la caféine n'agit pas seulement comme un facteur de stress pour moi — elle inhibe aussi la synthèse du collagène et accélère le vieillissement de la peau.`},

{id:'hyaluron-abbau',category:'Beauty',gene:'HYAL1',geneName:'Hyaluronidase 1 (HYAL1)',person:{name:'Heidi',age:56},photo:'story_persons/40_heidi_hyaluron.jpg',geneEffect:'Dégradation accrue de l\'acide hyaluronique',
 headline:`« Mes gènes ne protègent pas ma peau de la dégradation de l'acide hyaluronique. <span class="accent">Cela explique ma peau constamment sèche.</span> »`,
 shortStory:`Peu importe la quantité de crème hydratante — ma peau reste sèche. Mon <b>gène HYAL1</b> est une variante à haute activité : l'enzyme qui dégrade l'acide hyaluronique (le réservoir d'hydratation propre au corps) tourne à plein régime chez moi. L'acide hyaluronique disparaît plus vite qu'il n'est renouvelé.`},

{id:'q10-beauty',category:'Beauty',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Ingrid',age:63},photo:'story_persons/44_ingrid_q10.jpg',geneEffect:'Activation du Q10 réduite',
 headline:`« Tout le monde ne jure que par la coenzyme Q10 comme miracle anti-âge. <span class="accent">Mon test génétique : pour moi, elle ne fait rien.</span> »`,
 shortStory:`Des capsules de Q10 pendant des années, de la crème au Q10 dans la salle de bain. Mais mon <b>gène NQO1</b> présente une variante à risque qui ralentit fortement l'activation du Q10 en sa forme efficace. Pour moi, les produits au Q10 ne faisaient presque rien — passer à l'ubiquinol a tout changé.`},

{id:'immun-haut',category:'Beauty',gene:'TNF-α + IL6',geneName:'Inflammation cluster',person:{name:'Brigitte',age:55},photo:'story_persons/45_brigitte_immun.jpg',geneEffect:'Réponse inflammatoire hyperréactive',
 headline:`« Mes variantes génétiques rendent mon système immunitaire trop agressif. <span class="accent">À la longue, cela abîme ma peau.</span> »`,
 shortStory:`Peau sensible, rougeurs, petites inflammations récurrentes. Mon <b>gène TNF-α</b> porte une variante hyperréactive : même de petits déclencheurs comme le stress ou une infection provoquent des réactions inflammatoires cutanées. Mon système immunitaire réagit de manière excessive — et ma peau en paie le prix.`},

{id:'apoe',category:'Mikronährstoffe',gene:'APOE',geneName:'Apolipoprotein E (APOE)',person:{name:'Walter',age:59},photo:'story_persons/28_walter_apoe.jpg',geneEffect:'APOE ε4 — variante à risque pour le cholestérol',
 headline:`« Mon cholestérol grimpe malgré le sport et l'alimentation. <span class="accent">Mon gène APOE explique pourquoi.</span> »`,
 shortStory:`Des semi-marathons, une alimentation méditerranéenne — et pourtant un LDL à 175. Mon <b>gène APOE</b> porte la variante ε4 : chez moi, chaque gramme de graisse saturée provenant de l'alimentation peut faire fortement monter le LDL.`},

{id:'comt-stress',category:'Burnout & Stress',gene:'COMT',geneName:'Catechol-O-methyltransferase (COMT)',person:{name:'Jana',age:25},photo:'story_persons/30_jana_comt.jpg',geneEffect:'Dégradation lente des hormones du stress',
 headline:`« Les petits incidents m'ont toujours stressée instantanément. <span class="accent">Mon gène COMT ne me protège pas assez bien de cela.</span> »`,
 shortStory:`Les autres arrivent à décrocher après le travail — mon esprit continue de tourner, même un e-mail tardif peut me déstabiliser. Mon <b>gène COMT</b> dégrade les hormones du stress plus lentement. Aujourd'hui, j'utilise délibérément des activités qui soutiennent mon métabolisme du stress.`},

{id:'comt-impulse',category:'Burnout & Stress',gene:'COMT',geneName:'Catechol-O-methyltransferase (COMT)',person:{name:'Helmut',age:51},photo:'story_persons/46_helmut_impuls.jpg',geneEffect:'Impulsivité accrue face aux signaux de récompense',
 headline:`« Alcool, jeux d'argent — difficiles à maîtriser. <span class="accent">Mon gène COMT en détenait l'explication.</span> »`,
 shortStory:`Des années à me culpabiliser — jusqu'à ce que j'apprenne que ma <b>variante du gène COMT</b> influence fortement mon système dopaminergique. Les signaux de récompense me paraissent plus intenses, et la descente après le « kick » est plus lente — ce qui rend objectivement le contrôle des impulsions plus difficile.`},

{id:'supp-eisen',category:'Nahrungsergänzung',gene:'HFE',geneName:'Haemochromatosis gene (HFE)',person:{name:'Reinhard',age:47},photo:'story_persons/56_renate_eisen.jpg',geneEffect:'Dosage du fer sur mesure',
 headline:`« Mon risque HFE rend les compléments de fer standards dangereux. <span class="accent">Aujourd'hui, je sais ce dont mon corps a vraiment besoin.</span> »`,
 shortStory:`Les compléments classiques « fer puissant » seraient risqués pour moi — je suis génétiquement sujet à une surcharge en fer. Aujourd'hui, j'évite les mélanges multivitaminés génériques contenant du fer et je m'appuie sur des cofacteurs qui optimisent la façon dont j'absorbe naturellement le fer des aliments.`},

{id:'supp-folsaeure',category:'Nahrungsergänzung',gene:'MTHFR',geneName:'Methylenetetrahydrofolate reductase (MTHFR)',person:{name:'Ulrike',age:51},photo:'story_persons/58_ulrike_folsaeure.jpg',geneEffect:'Folate sous forme de méthylfolate',
 headline:`« De l'acide folique du supermarché ? Inutile avec ma variante MTHFR. <span class="accent">Il me faut la forme déjà activée.</span> »`,
 shortStory:`L'acide folique standard est inutilisable pour mon corps — mon <b>gène MTHFR</b> peut à peine l'activer. Aujourd'hui, je prends du 5-MTHF (L-méthylfolate) — la forme déjà activée que mes cellules peuvent utiliser directement.`},

{id:'supp-selen',category:'Nahrungsergänzung',gene:'GPX1',geneName:'Glutathione peroxidase 1 (GPX1)',person:{name:'Hartmut',age:50},photo:'story_persons/59_hartmut_selen.jpg',geneEffect:'Besoin en sélénium doublé, dosé individuellement',
 headline:`« Ma variante GPX1 double mon besoin en sélénium. <span class="accent">Aujourd'hui, je dose avec précision — pas par défaut.</span> »`,
 shortStory:`Les multivitamines standards contiennent 55 µg de sélénium — la dose habituelle. Mais avec ma <b>variante GPX1</b>, il m'en faut environ 120 µg pour obtenir la même protection antioxydante. Aujourd'hui, je le sais — et je me supplémente en conséquence.`},

{id:'supp-q10',category:'Nahrungsergänzung',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Inge',age:49},photo:'story_persons/57_inge_q10.jpg',geneEffect:'Q10 sous forme d\'ubiquinol',
 headline:`« Le Q10 standard ne fait rien avec ma variante NQO1. <span class="accent">Il me faut d'autres antioxydants.</span> »`,
 shortStory:`Du Q10 bon marché sous forme d'ubiquinone ? Inutilisable pour mon <b>gène NQO1</b> — il me manque l'enzyme d'activation. Aujourd'hui, je m'appuie sur d'autres antioxydants : astaxanthine, vitamine C, vitamine E et précurseurs du glutathion. Mon niveau d'énergie et la qualité de ma peau en ont enfin profité.`},

{id:'supp-vitamin-d',category:'Nahrungsergänzung',gene:'VDR',geneName:'Vitamin D receptor (VDR)',person:{name:'Wolfgang',age:54},photo:'story_persons/60_wolfgang_d3.jpg',geneEffect:'Dose de vitamine D plus élevée selon la génétique',
 headline:`« Ma variante VDR nécessite le double de la dose de vitamine D. <span class="accent">Les produits standards ne me suffisent pas.</span> »`,
 shortStory:`Des produits standards avec 1 000 UI de vitamine D ? Trop peu avec ma <b>variante VDR</b> — il me faut au moins 3 000 à 4 000 UI pour obtenir un résultat efficace. Aujourd'hui, je le sais et je me supplémente en conséquence.`},

{id:'sprint-vs-ausdauer',category:'Performance',gene:'ACTN3 + ACE',geneName:'Power / endurance profile',person:{name:'Manuel',age:33},photo:'story_persons/47_manuel_ausdauer.jpg',geneEffect:'Profil à dominante endurance',
 headline:`« Toute ma vie, je me suis entraîné pour la puissance explosive. Mon test génétique a révélé : <span class="accent">mon talent réside dans l'endurance.</span> »`,
 shortStory:`CrossFit, haltérophilie olympique, distances de sprint — les disciplines qui ne m'ont jamais vraiment convenu. Mon <b>profil ACTN3 + ACE</b> montre : génétiquement, je suis un type endurance classique. Surpris, frustré, mais avec enfin une explication.`},

{id:'testosteron',category:'Performance',gene:'SHBG + AR',geneName:'Sex hormone-binding globulin (SHBG)',person:{name:'Otto',age:62},photo:'story_persons/48_otto_testo.jpg',geneEffect:'Liaison accrue de la testostérone',
 headline:`« Mon test génétique a enfin expliqué <span class="accent">mon taux de testostérone chroniquement bas.</span> »`,
 shortStory:`Peu d'entrain, moins de gain musculaire, une énergie qui s'estompe — les analyses médicales ont montré une testostérone libre chroniquement basse. Mon <b>gène SHBG</b> l'explique : chez moi, la testostérone est liée plus fortement, si bien qu'il en reste moins de disponible « libre ».`},

{id:'laktat-hoch',category:'Performance',gene:'MCT1 + LDHA',geneName:'Lactate metabolism',person:{name:'Kevin',age:31},photo:'story_persons/49_kevin_laktat.jpg',geneEffect:'Élimination retardée du lactate',
 headline:`« Mon test génétique m'a expliqué <span class="accent">que j'ai tout simplement des valeurs de lactate plus élevées.</span> »`,
 shortStory:`Seuil de lactate du plan d'entraînement : 4 mmol/L. Mes valeurs réelles : 5,5 à 6,5 mmol/L à la même allure. Mon <b>gène MCT1</b> est une variante à risque : le transport du lactate hors de mes muscles se fait plus lentement.`},

{id:'sport-stress',category:'Performance',gene:'COMT + ADRB2',geneName:'Stress–performance cluster',person:{name:'Pascal',age:29},photo:'story_persons/50_pascal_stress.jpg',geneEffect:'Réponse au stress amplifiée',
 headline:`« La performance en sport de compétition est stressante. <span class="accent">Et en plus, mes gènes jouent contre moi.</span> »`,
 shortStory:`Jour de course, l'adrénaline qui monte — et mon corps met trop de temps à l'éliminer de nouveau. Mon <b>profil COMT + ADRB2</b> est une constellation sensible au stress. La performance de pointe me coûte plus qu'aux autres.`},

{id:'erholung-lang',category:'Performance',gene:'IL6 + CRP',geneName:'Inflammation–recovery cluster',person:{name:'Mathias',age:27},photo:'story_persons/51_mathias_erholung.jpg',geneEffect:'Réponse inflammatoire prolongée',
 headline:`« Mes gènes allongent inutilement mon temps de récupération après l'entraînement. <span class="accent">Trop longtemps.</span> »`,
 shortStory:`Alors que mes partenaires d'entraînement retrouvent toute leur force après 24 heures, il m'en faut 48 — parfois 72. Mon <b>gène IL6</b> porte une variante à haute activité : ma réponse inflammatoire après l'effort dure plus longtemps.`},

{id:'muskelmasse-talent',category:'Performance',gene:'MSTN + IGF1',geneName:'Muscle-building cluster',person:{name:'Daniel',age:22},photo:'story_persons/52_daniel_muskel.jpg',geneEffect:'Profil d\'hypertrophie optimal',
 headline:`« Selon mes gènes, j'ai exactement la bonne prédisposition pour une grande masse musculaire. <span class="accent">Cela correspond parfaitement à mon objectif.</span> »`,
 shortStory:`Le bodybuilding est mon objectif. Mon test génétique le confirme : mon <b>profil MSTN + IGF1</b> est optimal pour l'hypertrophie. Faible activité de la myostatine (le frein musculaire), forte réponse de l'IGF1 à l'entraînement. Un feu vert génétique.`},

{id:'puste-aus',category:'Performance',gene:'ACTN3',geneName:'Alpha-actinin 3 (ACTN3)',person:{name:'Jakob',age:20},photo:'story_persons/53_jakob_puste.jpg',geneEffect:'Profil de fibres à dominante sprinter',
 headline:`« Je sais maintenant pourquoi je suis à bout de souffle en plein match : <span class="accent">je suis un sprinter génétique, pas un coureur d'endurance.</span> »`,
 shortStory:`Football : de superbes accélérations explosives, mais difficile de tenir 90 minutes. Mon <b>gène ACTN3</b> l'explique : variante R/R — une forte proportion de fibres à contraction rapide, un profil de sprinter classique. Dans un sport d'équipe, c'est à la fois un atout et un inconvénient.`},

{id:'vo2-max',category:'Performance',gene:'PPARGC1A',geneName:'Mitochondrial biogenesis gene (PPARGC1A)',person:{name:'Patrick',age:26},photo:'story_persons/54_felix_vo2.jpg',geneEffect:'Activité mitochondriale au top',
 headline:`« Selon mes gènes, j'ai les <span class="accent">meilleures conditions pour une VO2max élevée.</span> »`,
 shortStory:`Mon dernier test de performance : VO2max de 64 ml/kg/min — dans la gamme élite pour mon âge. Mon <b>gène PPARGC1A</b> le confirme : j'ai la meilleure variante pour la biogenèse mitochondriale. Mon corps produit de l'énergie à partir de l'oxygène plus efficacement que la moyenne.`},

{id:'verletzung',category:'Performance',gene:'COL5A1',geneName:'Collagen type V alpha 1 (COL5A1)',person:{name:'Lukas',age:44},photo:'story_persons/55_tobias_verletzung.jpg',geneEffect:'Risque accru de blessure aux tendons',
 headline:`« Un bref moment d'inattention et une blessure m'a coûté 3 matchs. <span class="accent">Le test génétique l'avait prédit.</span> »`,
 shortStory:`Un problème au tendon d'Achille après un exercice de sprint. 3 semaines d'arrêt, 3 matchs perdus. Mon <b>gène COL5A1</b> porte une variante à risque — la structure de mes tendons est moins résistante à la déchirure que la moyenne. Si je l'avais su plus tôt, j'aurais été plus prudent.`}
];
