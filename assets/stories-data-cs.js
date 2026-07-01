/* === Novogenia Story Database (EN, native site) ===
   Genetic variants told as first-person stories.
   Used by lifestyle.html, beauty.html, supplements.html.
   Source: NovoDaily German story set, translated for the EN-first native rebuild.
   Categories kept as internal keys (never displayed) so cluster filters match.
=================================================== */
window.NOVO_STORIES = [
{id:'koffein',category:'Verträglichkeit',gene:'CYP1A2',geneName:'Cytochrome P450 1A2',person:{name:'Lisa',age:34},photo:'story_persons/01_lisa_koffein.jpg',geneEffect:'Pomalé odbourávání kofeinu',
 headline:`„Myslela jsem si, že ranní káva mi prospívá. <span class="accent">Moje geny říkají něco jiného.</span>“`,
 shortStory:`Tři šálky denně byly můj rituál – dokud jsem nezjistila, že můj <b>gen CYP1A2</b> odbourává kofein jen pomalu. Místo aby mě povzbudila, zatěžuje má káva srdce a cévy celé hodiny.`},

{id:'laktose',category:'Verträglichkeit',gene:'LCT',geneName:'Lactase gene (LCT)',person:{name:'Julia',age:29},photo:'story_persons/02_julia_laktose.jpg',geneEffect:'Predispozice k nesnášenlivosti laktózy',
 headline:`„Bolest břicha po jogurtu? Roky jsem to <span class="accent">prostě přehlížela.</span>“`,
 shortStory:`„Jsi jen citlivá,“ říkali všichni. Můj <b>gen LCT</b> ale říká: po kojeneckém věku se moje tvorba laktázy téměř úplně vypnula – mám nesnášenlivost laktózy.`},

{id:'salz',category:'Verträglichkeit',gene:'AGT',geneName:'Angiotensinogen gene (AGT)',person:{name:'Andreas',age:57},photo:'story_persons/04_andreas_salz.jpg',geneEffect:'Zvýšená citlivost na sůl',
 headline:`„Můj lékař mě varuje před solí. Moje geny vysvětlují, <span class="accent">proč mě zasahuje obzvlášť silně.</span>“`,
 shortStory:`Vysoký krevní tlak – v mém případě má ale i trocha soli velký účinek. Můj <b>gen AGT</b> mě činí obzvlášť citlivým na sůl: i malá množství mi znatelně zvyšují krevní tlak.`},

{id:'gluten',category:'Verträglichkeit',gene:'HLA-DQ2/DQ8',geneName:'HLA type II',person:{name:'Magdalena',age:32},photo:'story_persons/06_magdalena_gluten.jpg',geneEffect:'Zvýšené riziko celiakie',
 headline:`„Bezlepková strava pro mě dřív byla životní styl. <span class="accent">Dnes je to nutnost.</span>“`,
 shortStory:`Jedla jsem málo lepku, protože to dělali ostatní. Můj <b>gen HLA-DQ2</b> ale říká: patřím do rizikové skupiny pro celiakii. Krevní test to potvrdil.`},

{id:'vitamin-d',category:'Mikronährstoffe',gene:'VDR',geneName:'Vitamin D receptor (VDR)',person:{name:'Markus',age:38},photo:'story_persons/08_markus_vitamind.jpg',geneEffect:'Snížená aktivita receptoru',
 headline:`„Jsem hodně venku a mám přijatelnou hladinu vitaminu D. <span class="accent">Pro moje geny je to pořád málo.</span>“`,
 shortStory:`V zimě lyžování, v létě turistika – slunce pro mě nikdy nebylo problém s nedostatkem. Moje hladina vitaminu D byla „normálních“ 30 ng/ml. Ale můj <b>gen VDR</b> říká: kvůli mé variantě receptoru je 30 ng/ml příliš málo. Potřebuji 60+, jinak vitamin D uvnitř mých buněk prostě nefunguje.`},

{id:'folsaeure',category:'Mikronährstoffe',gene:'MTHFR',geneName:'Methylenetetrahydrofolate reductase (MTHFR)',person:{name:'Sarah',age:30},photo:'story_persons/09_sarah_folsaeure.jpg',geneEffect:'Zhoršená aktivace folátu',
 headline:`„Moje gynekoložka mi doporučila kyselinu listovou. Moje geny ji <span class="accent">sotva dokázaly využít.</span>“`,
 shortStory:`Během těhotenství jsem svědomitě užívala kyselinu listovou. Můj <b>gen MTHFR</b> ale nese dvojitou variantu, která běžnou kyselinu listovou dokáže jen stěží přeměnit na aktivní formu (methylfolát).`},

{id:'eisen',category:'Mikronährstoffe',gene:'HFE',geneName:'Haemochromatosis gene (HFE)',person:{name:'Stefanie',age:43},photo:'story_persons/10_stefanie_eisen.jpg',geneEffect:'Riziko přetížení železem',
 headline:`„Tablety železa na moji únavu? <span class="accent">Pro mě by to bylo nebezpečné.</span>“`,
 shortStory:`Unavená, bledá, vyčerpaná – klasický obraz nedostatku železa. Ale můj <b>gen HFE</b> ukazuje opak: mám sklon k přetížení železem.`},

{id:'omega-3',category:'Mikronährstoffe',gene:'FADS1',geneName:'Fatty acid desaturase 1 (FADS1)',person:{name:'Thomas',age:53},photo:'story_persons/12_thomas_omega3.jpg',geneEffect:'Atypická reakce na omega-3',
 headline:`„Roky užívám rybí tuk na snížení cholesterolu. V mém případě to <span class="accent">problém zhoršuje.</span>“`,
 shortStory:`Můj lékař mi doporučil kapsle s omega-3. Můj <b>gen FADS1</b> ale říká: s touto variantou mi rybí tuk HDL vlastně ještě víc snižuje, místo aby ho zvyšoval.`},

{id:'selen',category:'Mikronährstoffe',gene:'GPX1',geneName:'Glutathione peroxidase 1 (GPX1)',person:{name:'Bernhard',age:48},photo:'story_persons/14_bernhard_selen.jpg',geneEffect:'Dvojnásobná potřeba selenu',
 headline:`„Myslel jsem si, že přijímám dost selenu. <span class="accent">Kvůli genové variantě ho potřebuji dvakrát tolik.</span>“`,
 shortStory:`Moje hladina selenu byla „v normě“ – tu a tam para ořechy, dvakrát týdně ryby. Ale můj <b>gen GPX1</b> nese variantu, která mou potřebu selenu téměř zdvojnásobuje. Co je pro průměrného člověka dost, byl pro mě chronický nedostatek.`},

{id:'q10',category:'Mikronährstoffe',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Daniela',age:47},photo:'story_persons/22_daniela_q10.jpg',geneEffect:'Snížená aktivace Q10',
 headline:`„Dvanáct let jsem užívala koenzym Q10 – a moje geny odhalily: <span class="accent">bylo to všechno zbytečné.</span>“`,
 shortStory:`600 € ročně za kvalitní Q10 – na vrásky, na energii, na srdce. Ale můj <b>gen NQO1</b> nese variantu, která silně zpomaluje aktivaci Q10 do jeho účinné formy (ubichinolu). 12 let vyhozených peněz.`},

{id:'oxidativer-stress',category:'Mikronährstoffe',gene:'SOD2',geneName:'Superoxide dismutase 2 (SOD2)',person:{name:'Petra',age:50},photo:'story_persons/25_petra_sod2.jpg',geneEffect:'Snížená ochranná kapacita',
 headline:`„Moje geny mě před oxidativním stresem dostatečně nechrání. Teď tuto ochranu nechávám na <span class="accent">antioxidantech</span>.“`,
 shortStory:`Bobule, brokolice, granátové jablko – moje strava by mohla být na obálce wellness časopisu. Ale můj <b>gen SOD2</b> tlumí vlastní antioxidační aktivitu mého těla. Víc ovoce samo o sobě nepomáhá – cílené mikroživiny ano.`},

{id:'entgiftung-rauchen',category:'Mikronährstoffe',gene:'GSTM1',geneName:'Glutathione S-transferase Mu 1 (GSTM1)',person:{name:'Klaus',age:60},photo:'story_persons/26_klaus_gstm1.jpg',geneEffect:'Kompletní nulová varianta',
 headline:`„Vždycky jsem si myslel, že kouření není tak zlé – moji příbuzní všichni kouří bez následků. <span class="accent">Pro mě je to mnohem horší.</span>“`,
 shortStory:`Otec, strýc, teta – všichni kouří desítky let, všichni zdraví. Myslel jsem, že to máme v rodině. Můj <b>gen GSTM1</b> ale říká: já ne. Nulová varianta nechává mé tělo proti toxinům téměř bezbranné.`},

{id:'immunsystem',category:'Mikronährstoffe',gene:'TNF-α',geneName:'Tumour necrosis factor alpha (TNF-α)',person:{name:'Robert',age:55},photo:'story_persons/27_robert_tnf.jpg',geneEffect:'Přehnaně reaktivní imunitní systém',
 headline:`„Moje geny činí můj imunitní systém příliš agresivním. Správnou stravou <span class="accent">tomu mohu čelit.</span>“`,
 shortStory:`Ztuhlé klouby, neustálý tinnitus, těžká víčka po ránu – klasické příznaky „inflammagingu“. Můj <b>gen TNF-α</b> říká: moje zánětlivá reakce je geneticky nadprůměrná. Můj imunitní systém přehnaně reaguje na každý malý podnět.`},

{id:'homocystein',category:'Mikronährstoffe',gene:'CBS / MTHFR',geneName:'Cystathionine beta-synthase (CBS)',person:{name:'Elke',age:45},photo:'story_persons/29_elke_cbs.jpg',geneEffect:'Vyšší nároky na metabolismus homocysteinu',
 headline:`„Moje genetická analýza konečně vysvětlila <span class="accent">mou přirozeně vysokou hladinu homocysteinu.</span>“`,
 shortStory:`Můj lékař změřil homocystein – 22 µmol/L, mnohem příliš vysoko (norma <10). Moje geny <b>MTHFR + CBS + MTR</b> společně tvoří rizikový profil, který přesně tuto hodnotu vysvětluje. Dnes cíleně užívám methylfolát, B12 a B6 – a moje hladina klesla na 8 µmol/L.`},

{id:'koffein-schlaf',category:'Verträglichkeit',gene:'CYP1A2',geneName:'Cytochrome P450 1A2',person:{name:'Tobias',age:37},photo:'story_persons/19_tobias_actn3.jpg',geneEffect:'Extrémní citlivost na kofein',
 headline:`„Po jedné kávě nemůžu pět hodin usnout. <span class="accent">Moje geny odhalují proč.</span>“`,
 shortStory:`Stačí jediné espresso pozdě odpoledne – a moje mysl je bdělá až do půlnoci. Můj <b>gen CYP1A2</b> je vysoce citlivá varianta: kofein zůstává v mé krvi dvakrát déle než v průměru.`},

{id:'schwester-vergleich',category:'Stoffwechsel & Gewicht',gene:'FTO',geneName:'Fat Mass and Obesity-Associated (FTO)',person:{name:'Tanja',age:36},photo:'story_persons/32_tanja_schwester.jpg',geneEffect:'Riziková varianta obezity (na rozdíl od její sestry)',
 headline:`„Moje sestra může jíst, co chce, a nikdy nepřibere. <span class="accent">Geneticky jsme prostě jiné.</span>“`,
 shortStory:`Vypadáme podobně, jíme podobně – a přesto je štíhlá, zatímco já bojuji. Můj <b>gen FTO</b> nese rizikovou variantu; její ne. Konečně to chápu: není to o mé vůli.`},

{id:'low-carb',category:'Stoffwechsel & Gewicht',gene:'APOA5 / PPARG',geneName:'Lipid metabolism cluster',person:{name:'Verena',age:41},photo:'story_persons/33_verena_lowcarb.jpg',geneEffect:'Reakce na sacharidy, citlivost na tuky',
 headline:`„Low carb byl mezi mými přáteli velký hit. Pro mě byl <span class="accent">úplně k ničemu.</span>“`,
 shortStory:`Tři měsíce přísného low carb. Mí přátelé zhubli 6–8 kilo, já 0,5. Můj <b>profil APOA5 a PPARG</b> ukazuje: na mírné sacharidy reaguji nadprůměrně a na vysoký příjem tuků spíše špatně.`},

{id:'sport-vergeblich',category:'Stoffwechsel & Gewicht',gene:'ADRB2 + FTO',geneName:'Adrenoreceptor + FTO',person:{name:'Stefan',age:42},photo:'story_persons/34_stefan_sportlos.jpg',geneEffect:'Nízká reakce spalování tuků při cvičení',
 headline:`„Dřu ve fitku – a přesto sotva hubnu. <span class="accent">Moje geny vysvětlily proč.</span>“`,
 shortStory:`Silový trénink třikrát týdně plus běhy na 5 km. Na váze: skoro nic. Můj <b>gen ADRB2</b> špatně reaguje na spalování tuků při cvičení a můj <b>FTO</b> to ještě zpomaluje. Pro mě musí být pohyb spojen se stravou.`},

{id:'diaet-resistenz',category:'Stoffwechsel & Gewicht',gene:'PPARG / FTO',geneName:'PPARG obesity cluster',person:{name:'Eva',age:48},photo:'story_persons/35_eva_diaet.jpg',geneEffect:'Adaptivní úsporný režim při hladu',
 headline:`„Když jím méně, mám hlad. Na váze se <span class="accent">stejně nic neděje.</span>“`,
 shortStory:`Snížím kalorie na 1 500 kcal – a mé tělo přejde do úsporného režimu místo spalování tuků. Kombinace mého <b>genu PPARG</b> + <b>FTO</b> znamená, že můj metabolismus reaguje na omezení kalorií tím, že se vypne, ne tím, že bych hubla.`},

{id:'fto-heisshunger',category:'Stoffwechsel & Gewicht',gene:'FTO',geneName:'Fat Mass and Obesity-Associated (FTO)',person:{name:'Maria',age:37},photo:'story_persons/15_maria_fto.jpg',geneEffect:'Riziková varianta obezity (spouštěč hladu)',
 headline:`„Mám variantu v genu FTO – vysvětluje můj <span class="accent">nepřirozeně silný hlad</span> a mé chutě na jídlo.“`,
 shortStory:`Můj hlad nikdy nepůsobil „normálně“ – chutě na sladké tři hodiny po pořádném jídle. Můj <b>gen FTO</b> nese rizikovou variantu A/A: gen signálu hladu, který přesně tyto chutě pohání.`},

{id:'saettigung',category:'Stoffwechsel & Gewicht',gene:'LEPR',geneName:'Leptin receptor (LEPR)',person:{name:'Nina',age:28},photo:'story_persons/16_nina_lepr.jpg',geneEffect:'Snížená reakce sytosti',
 headline:`„Po jídle se často cítím přejedená a malátná. <span class="accent">Můj signál hladu se spouští příliš pozdě.</span>“`,
 shortStory:`Jím rychle a obvykle si až po 20 minutách uvědomím, že jsem sytá – to už jsem se často pořádně přejedla. Můj <b>gen LEPR</b> zpomaluje mou reakci na leptin – signál sytosti se ke mně dostává se zpožděním.`},

{id:'fett-vs-carb',category:'Stoffwechsel & Gewicht',gene:'PPARG',geneName:'Peroxisome proliferator-activated receptor (PPARG)',person:{name:'Florian',age:40},photo:'story_persons/17_florian_ppar.jpg',geneEffect:'Vysoká míra ukládání tuku',
 headline:`„Myslel jsem si, že jen snadno přibírám. Moje geny odhalily: <span class="accent">u mě jsou to jen tukové kalorie, ne sacharidy.</span>“`,
 shortStory:`Toast s avokádem, olivový olej, ořechy – moje „zdravá“ strava. Ale můj <b>gen PPARG</b> ukládá každou tukovou kalorii efektivně, zatímco sacharidy mou váhu sotva ovlivní. Roky špatné strategie.`},

{id:'muskelmasse',category:'Sport',gene:'ACTN3 + MSTN',geneName:'Muscle fibre profile',person:{name:'Stephan',age:46},photo:'story_persons/36_stephan_muskel.jpg',geneEffect:'Zvýšená ztráta svalů při deficitu',
 headline:`„Ztráta svalů při dietě je u mě obzvlášť dramatická. <span class="accent">Cíleným silovým tréninkem se chráním.</span>“`,
 shortStory:`Při poslední dietě jsem spolu s 8 kg tuku ztratil i 4 kg svalů – mnohem příliš. Můj <b>profil ACTN3 a MSTN</b> to vysvětluje: mé svaly rostou pomaleji a odbourávají se rychleji než v průměru. Pro mě není silový trénink volba – je to nutnost.`},

{id:'bauchspeck',category:'Stoffwechsel & Gewicht',gene:'APOC3 / ADIPOQ',geneName:'Belly-fat distribution cluster',person:{name:'Werner',age:49},photo:'story_persons/37_werner_bauch.jpg',geneEffect:'Sklon k viscerálnímu rozložení tuku',
 headline:`„Když přiberu, jde to všechno do břicha. <span class="accent">Moje geny ukázaly proč.</span>“`,
 shortStory:`Štíhlé nohy, kulaté břicho – klasický „typ jablko“. Můj <b>profil ADIPOQ a APOC3</b> říká: přednostně ukládám viscerální (břišní) tuk. To není jen kosmetické – metabolicky je to ten nejnebezpečnější tuk.`},

{id:'jojo',category:'Stoffwechsel & Gewicht',gene:'FTO + ADRB2',geneName:'Yo-yo risk cluster',person:{name:'Birgit',age:43},photo:'story_persons/38_birgit_jojo.jpg',geneEffect:'Silnější jojo efekt',
 headline:`„Kvůli svým genům mám obzvlášť silný jojo efekt. <span class="accent">Mou jedinou cestou je změna životního stylu, ne bleskurychlá dieta.</span>“`,
 shortStory:`Tři diety – třikrát se každé kilo vrátilo, a ještě jedno navrch. Moje kombinace <b>FTO + ADRB2</b> nutí mé tělo po každém omezení přejít do maximálního režimu obnovy. Dnes vím: pro mě je bleskurychlá dieta ten nejhorší přístup.`},

{id:'kaffee-kollagen',category:'Beauty',gene:'CYP1A2 + Collagen',geneName:'Caffeine–collagen axis',person:{name:'Lara',age:61},photo:'story_persons/43_lara_kaffee_kollagen.jpg',geneEffect:'Kofein potlačuje syntézu kolagenu',
 headline:`„Moje ranní káva blokovala tvorbu kolagenu a urychlovala mé stárnutí. <span class="accent">Čas to přehodnotit.</span>“`,
 shortStory:`Roky 4 šálky kávy denně. Můj DNA test ukazuje: v kombinaci s mou <b>variantou CYP1A2</b> nepůsobí kofein jen jako stresor – také potlačuje syntézu kolagenu a urychluje stárnutí pleti.`},

{id:'hyaluron-abbau',category:'Beauty',gene:'HYAL1',geneName:'Hyaluronidase 1 (HYAL1)',person:{name:'Heidi',age:56},photo:'story_persons/40_heidi_hyaluron.jpg',geneEffect:'Zvýšené odbourávání kyseliny hyaluronové',
 headline:`„Moje geny nechrání mou pleť před odbouráváním kyseliny hyaluronové. <span class="accent">To vysvětluje mou neustále suchou pleť.</span>“`,
 shortStory:`Ať se hydratuji, jak chci – moje pleť zůstává suchá. Můj <b>gen HYAL1</b> je vysoce aktivní varianta: enzym, který odbourává kyselinu hyaluronovou (vlastní zásobárnu vlhkosti těla), u mě běží naplno. Kyselina hyaluronová mizí rychleji, než se doplňuje.`},

{id:'q10-beauty',category:'Beauty',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Ingrid',age:63},photo:'story_persons/44_ingrid_q10.jpg',geneEffect:'Aktivace Q10 snížená',
 headline:`„Všichni přísahají na koenzym Q10 jako na anti-aging zázrak. <span class="accent">Můj genový test: mně nedělá nic.</span>“`,
 shortStory:`Roky kapsle Q10, krém s Q10 v koupelně. Ale můj <b>gen NQO1</b> nese rizikovou variantu, která silně zpomaluje aktivaci Q10 do jeho účinné formy. Produkty s Q10 mi skoro nic nedělaly – přechod na ubichinol byl zlom.`},

{id:'immun-haut',category:'Beauty',gene:'TNF-α + IL6',geneName:'Inflammation cluster',person:{name:'Brigitte',age:55},photo:'story_persons/45_brigitte_immun.jpg',geneEffect:'Přehnaně reaktivní zánětlivá reakce',
 headline:`„Mé genové varianty činí můj imunitní systém příliš agresivním. <span class="accent">Časem to poškozuje mou pleť.</span>“`,
 shortStory:`Citlivá, zarudlá pleť, opakující se drobné záněty. Můj <b>gen TNF-α</b> nese přehnaně reaktivní variantu: i malé podněty jako stres nebo infekce spouštějí zánětlivé kožní reakce. Můj imunitní systém přestřeluje – a moje pleť za to platí.`},

{id:'apoe',category:'Mikronährstoffe',gene:'APOE',geneName:'Apolipoprotein E (APOE)',person:{name:'Walter',age:59},photo:'story_persons/28_walter_apoe.jpg',geneEffect:'APOE ε4 – riziková varianta cholesterolu',
 headline:`„Můj cholesterol stoupá navzdory cvičení a stravě. <span class="accent">Můj gen APOE vysvětluje proč.</span>“`,
 shortStory:`Půlmaratony, středomořská strava – a stále LDL na 175. Můj <b>gen APOE</b> nese variantu ε4: u mě může každý gram nasyceného tuku z jídla prudce vyhnat LDL nahoru.`},

{id:'comt-stress',category:'Burnout & Stress',gene:'COMT',geneName:'Catechol-O-methyltransferase (COMT)',person:{name:'Jana',age:25},photo:'story_persons/30_jana_comt.jpg',geneEffect:'Pomalé odbourávání stresových hormonů',
 headline:`„Drobné příhody mě vždy okamžitě stresovaly. <span class="accent">Můj gen COMT mě před tím dostatečně nechrání.</span>“`,
 shortStory:`Ostatní se po práci dokážou vypnout – moje mysl se točí dál, i pozdní e-mail mě dokáže rozhodit. Můj <b>gen COMT</b> odbourává stresové hormony pomaleji. Dnes cíleně využívám aktivity, které podporují můj metabolismus stresu.`},

{id:'comt-impulse',category:'Burnout & Stress',gene:'COMT',geneName:'Catechol-O-methyltransferase (COMT)',person:{name:'Helmut',age:51},photo:'story_persons/46_helmut_impuls.jpg',geneEffect:'Vyšší impulzivita na podněty odměny',
 headline:`„Alkohol, hazard – těžko se to drží pod kontrolou. <span class="accent">Můj gen COMT držel vysvětlení.</span>“`,
 shortStory:`Roky sebeobviňování – dokud jsem nezjistil, že moje <b>varianta genu COMT</b> silně ovlivňuje můj dopaminový systém. Podněty odměny vnímám intenzivněji a útlum po „kicku“ je pomalejší – což činí kontrolu impulzů objektivně těžší.`},

{id:'supp-eisen',category:'Nahrungsergänzung',gene:'HFE',geneName:'Haemochromatosis gene (HFE)',person:{name:'Reinhard',age:47},photo:'story_persons/56_renate_eisen.jpg',geneEffect:'Individuálně upravené dávkování železa',
 headline:`„Mé riziko HFE činí běžné doplňky se železem nebezpečnými. <span class="accent">Dnes vím, co mé tělo skutečně potřebuje.</span>“`,
 shortStory:`Klasické doplňky s „power železem“ by pro mě byly riskantní – geneticky mám sklon k přetížení železem. Dnes se vyhýbám plošným multivitaminovým směsím se železem a spoléhám na kofaktory, které optimalizují, jak přirozeně vstřebávám železo z jídla.`},

{id:'supp-folsaeure',category:'Nahrungsergänzung',gene:'MTHFR',geneName:'Methylenetetrahydrofolate reductase (MTHFR)',person:{name:'Ulrike',age:51},photo:'story_persons/58_ulrike_folsaeure.jpg',geneEffect:'Folát ve formě methylfolátu',
 headline:`„Kyselina listová ze supermarketu? S mou variantou MTHFR k ničemu. <span class="accent">Potřebuji už aktivovanou formu.</span>“`,
 shortStory:`Běžná kyselina listová je pro mé tělo nepoužitelná – můj <b>gen MTHFR</b> ji dokáže jen stěží aktivovat. Dnes užívám 5-MTHF (L-methylfolát) – hotovou aktivovanou formu, kterou mé buňky mohou přímo využít.`},

{id:'supp-selen',category:'Nahrungsergänzung',gene:'GPX1',geneName:'Glutathione peroxidase 1 (GPX1)',person:{name:'Hartmut',age:50},photo:'story_persons/59_hartmut_selen.jpg',geneEffect:'Dvojnásobná potřeba selenu, individuálně dávkovaná',
 headline:`„Moje varianta GPX1 zdvojnásobuje mou potřebu selenu. <span class="accent">Dnes dávkuji přesně – ne paušálně.</span>“`,
 shortStory:`Běžné multivitaminy obsahují 55 µg selenu – standardní dávku. Ale s mou <b>variantou GPX1</b> potřebuji kolem 120 µg, abych dosáhl stejné antioxidační ochrany. Dnes to vím – a suplementuji odpovídajícím způsobem.`},

{id:'supp-q10',category:'Nahrungsergänzung',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Inge',age:49},photo:'story_persons/57_inge_q10.jpg',geneEffect:'Q10 ve formě ubichinolu',
 headline:`„Běžný Q10 s mou variantou NQO1 nedělá nic. <span class="accent">Potřebuji jiné antioxidanty.</span>“`,
 shortStory:`Levný Q10 ve formě ubichinonu? Pro můj <b>gen NQO1</b> nepoužitelný – chybí mi aktivující enzym. Dnes spoléhám na jiné antioxidanty: astaxanthin, vitamin C, vitamin E a prekurzory glutathionu. Má hladina energie a kvalita pleti z toho konečně těží.`},

{id:'supp-vitamin-d',category:'Nahrungsergänzung',gene:'VDR',geneName:'Vitamin D receptor (VDR)',person:{name:'Wolfgang',age:54},photo:'story_persons/60_wolfgang_d3.jpg',geneEffect:'Vyšší dávka vitaminu D dle genetiky',
 headline:`„Moje varianta VDR potřebuje dvojnásobnou dávku vitaminu D. <span class="accent">Běžné produkty mi nestačí.</span>“`,
 shortStory:`Běžné produkty s 1 000 IU vitaminu D? S mou <b>variantou VDR</b> příliš málo – potřebuji alespoň 3 000–4 000 IU, abych dosáhl účinného výsledku. Dnes to vím a suplementuji odpovídajícím způsobem.`},

{id:'sprint-vs-ausdauer',category:'Performance',gene:'ACTN3 + ACE',geneName:'Power / endurance profile',person:{name:'Manuel',age:33},photo:'story_persons/47_manuel_ausdauer.jpg',geneEffect:'Vytrvalostně dominantní profil',
 headline:`„Celý život jsem trénoval výbušnou sílu. Můj genový test odhalil: <span class="accent">můj talent leží ve vytrvalosti.</span>“`,
 shortStory:`CrossFit, olympijské vzpírání, sprinterské tratě – disciplíny, které mi nikdy pořádně nesedly. Můj <b>profil ACTN3 + ACE</b> ukazuje: geneticky jsem klasický vytrvalostní typ. Překvapený, frustrovaný, ale konečně s vysvětlením.`},

{id:'testosteron',category:'Performance',gene:'SHBG + AR',geneName:'Sex hormone-binding globulin (SHBG)',person:{name:'Otto',age:62},photo:'story_persons/48_otto_testo.jpg',geneEffect:'Zvýšená vazba testosteronu',
 headline:`„Můj genový test konečně vysvětlil <span class="accent">mou chronicky nízkou hladinu testosteronu.</span>“`,
 shortStory:`Nízká chuť, menší nárůst svalů, ubývající energie – lékařské testy ukázaly chronicky nízký volný testosteron. Můj <b>gen SHBG</b> to vysvětluje: u mě je testosteron vázán silněji, takže „volně“ ho je k dispozici méně.`},

{id:'laktat-hoch',category:'Performance',gene:'MCT1 + LDHA',geneName:'Lactate metabolism',person:{name:'Kevin',age:31},photo:'story_persons/49_kevin_laktat.jpg',geneEffect:'Zpomalené odbourávání laktátu',
 headline:`„Můj genový test mi vysvětlil, <span class="accent">že mám prostě vyšší hodnoty laktátu.</span>“`,
 shortStory:`Laktátový práh podle tréninkového plánu: 4 mmol/L. Mé skutečné hodnoty: 5,5–6,5 mmol/L při stejném tempu. Můj <b>gen MCT1</b> je riziková varianta: transport laktátu ze svalů u mě probíhá pomaleji.`},

{id:'sport-stress',category:'Performance',gene:'COMT + ADRB2',geneName:'Stress–performance cluster',person:{name:'Pascal',age:29},photo:'story_persons/50_pascal_stress.jpg',geneEffect:'Zesílená stresová reakce',
 headline:`„Výkon ve vrcholovém sportu je stresující. <span class="accent">A moje geny navíc pracují proti mně.</span>“`,
 shortStory:`Den závodu, adrenalin proudí – a mé tělo ho zase potřebuje příliš dlouho odbourat. Můj <b>profil COMT + ADRB2</b> je stresově citlivá konstelace. Špičkový výkon mě stojí víc než ostatní.`},

{id:'erholung-lang',category:'Performance',gene:'IL6 + CRP',geneName:'Inflammation–recovery cluster',person:{name:'Mathias',age:27},photo:'story_persons/51_mathias_erholung.jpg',geneEffect:'Prodloužená zánětlivá reakce',
 headline:`„Moje geny protahují dobu mé regenerace po tréninku <span class="accent">zbytečně dlouho.</span>“`,
 shortStory:`Zatímco mí tréninkoví partneři jsou po 24 hodinách zpátky v plné síle, já potřebuji 48 – někdy 72. Můj <b>gen IL6</b> nese vysoce aktivní variantu: moje zánětlivá reakce po zátěži trvá déle.`},

{id:'muskelmasse-talent',category:'Performance',gene:'MSTN + IGF1',geneName:'Muscle-building cluster',person:{name:'Daniel',age:22},photo:'story_persons/52_daniel_muskel.jpg',geneEffect:'Optimální profil hypertrofie',
 headline:`„Podle mých genů mám přesně tu správnou predispozici pro velkou svalovou hmotu. <span class="accent">To dokonale sedí k mému cíli.</span>“`,
 shortStory:`Kulturistika je můj cíl. Můj genový test to potvrzuje: můj <b>profil MSTN + IGF1</b> je optimální pro hypertrofii. Nízká aktivita myostatinu (svalové brzdy), vysoká reakce IGF1 na trénink. Geneticky plný zápřah.`},

{id:'puste-aus',category:'Performance',gene:'ACTN3',geneName:'Alpha-actinin 3 (ACTN3)',person:{name:'Jakob',age:20},photo:'story_persons/53_jakob_puste.jpg',geneEffect:'Sprintersky dominantní profil vláken',
 headline:`„Teď vím, proč mi uprostřed zápasu dochází dech: <span class="accent">jsem genetický sprinter, ne vytrvalostní běžec.</span>“`,
 shortStory:`Fotbal: skvělé výbušné akce, těžko vydržet 90 minut. Můj <b>gen ACTN3</b> to vysvětluje: varianta R/R – vysoký podíl rychlých svalových vláken, klasický sprinterský profil. V týmovém sportu je to výhoda i nevýhoda zároveň.`},

{id:'vo2-max',category:'Performance',gene:'PPARGC1A',geneName:'Mitochondrial biogenesis gene (PPARGC1A)',person:{name:'Patrick',age:26},photo:'story_persons/54_felix_vo2.jpg',geneEffect:'Špičková mitochondriální aktivita',
 headline:`„Podle mých genů mám <span class="accent">nejlepší předpoklady pro vysoké VO2max.</span>“`,
 shortStory:`Můj poslední výkonnostní test: VO2max 64 ml/kg/min – elitní pásmo pro můj věk. Můj <b>gen PPARGC1A</b> to potvrzuje: mám špičkovou variantu pro mitochondriální biogenezi. Mé tělo produkuje energii z kyslíku efektivněji než v průměru.`},

{id:'verletzung',category:'Performance',gene:'COL5A1',geneName:'Collagen type V alpha 1 (COL5A1)',person:{name:'Lukas',age:44},photo:'story_persons/55_tobias_verletzung.jpg',geneEffect:'Zvýšené riziko poranění šlach',
 headline:`„Jedno krátké zaváhání a zranění mě stálo 3 zápasy. <span class="accent">Genový test to předpověděl.</span>“`,
 shortStory:`Problém s Achillovou šlachou po sprinterském cvičení. 3 týdny mimo, 3 prohrané zápasy. Můj <b>gen COL5A1</b> nese rizikovou variantu – má šlachová struktura je méně odolná proti přetržení než v průměru. Kdybych to věděl dříve, byl bych opatrnější.`}
];
