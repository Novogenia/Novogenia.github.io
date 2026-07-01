/* === Novogenia Story Database (EN, native site) ===
   Genetic variants told as first-person stories.
   Used by lifestyle.html, beauty.html, supplements.html.
   Source: NovoDaily German story set, translated for the EN-first native rebuild.
   Categories kept as internal keys (never displayed) so cluster filters match.
=================================================== */
window.NOVO_STORIES = [
{id:'koffein',category:'Verträglichkeit',gene:'CYP1A2',geneName:'Cytochrome P450 1A2',person:{name:'Lisa',age:34},photo:'story_persons/01_lisa_koffein.jpg',geneEffect:'Degradação lenta da cafeína',
 headline:`“Eu achava que o meu café da manhã me fazia bem. <span class="accent">Os meus genes dizem o contrário.</span>”`,
 shortStory:`Três xícaras por dia eram o meu ritual — até descobrir que o meu <b>gene CYP1A2</b> degrada a cafeína apenas lentamente. Em vez de me dar energia, o meu café sobrecarrega o meu sistema cardiovascular durante horas.`},

{id:'laktose',category:'Verträglichkeit',gene:'LCT',geneName:'Lactase gene (LCT)',person:{name:'Julia',age:29},photo:'story_persons/02_julia_laktose.jpg',geneEffect:'Predisposição à intolerância à lactose',
 headline:`“Dor de barriga depois do iogurte? Durante anos eu simplesmente <span class="accent">ignorei isso.</span>”`,
 shortStory:`“Você é só sensível”, todos diziam. O meu <b>gene LCT</b> diz: depois da infância, a minha produção de lactase foi quase totalmente desativada — sou intolerante à lactose.`},

{id:'salz',category:'Verträglichkeit',gene:'AGT',geneName:'Angiotensinogen gene (AGT)',person:{name:'Andreas',age:57},photo:'story_persons/04_andreas_salz.jpg',geneEffect:'Sensibilidade aumentada ao sal',
 headline:`“O meu médico me alerta sobre o sal. Os meus genes explicam <span class="accent">por que ele me afeta com tanta intensidade.</span>”`,
 shortStory:`Pressão alta — mas, no meu caso, até um pouco de sal faz efeito. O meu <b>gene AGT</b> me torna especialmente sensível ao sal: mesmo pequenas quantidades elevam a minha pressão de forma acentuada.`},

{id:'gluten',category:'Verträglichkeit',gene:'HLA-DQ2/DQ8',geneName:'HLA type II',person:{name:'Magdalena',age:32},photo:'story_persons/06_magdalena_gluten.jpg',geneEffect:'Risco aumentado de doença celíaca',
 headline:`“Comer sem glúten era antes um estilo de vida para mim. <span class="accent">Hoje é uma necessidade.</span>”`,
 shortStory:`Eu comia pouco glúten porque os outros comiam. O meu <b>gene HLA-DQ2</b> diz: eu pertenço ao grupo de risco para a doença celíaca. Um exame de sangue confirmou.`},

{id:'vitamin-d',category:'Mikronährstoffe',gene:'VDR',geneName:'Vitamin D receptor (VDR)',person:{name:'Markus',age:38},photo:'story_persons/08_markus_vitamind.jpg',geneEffect:'Atividade reduzida do receptor',
 headline:`“Passo muito tempo ao ar livre e tenho níveis aceitáveis de vitamina D. <span class="accent">Para os meus genes, ainda é muito pouco.</span>”`,
 shortStory:`Esqui no inverno, caminhadas no verão — o sol nunca foi um problema de deficiência para mim. O meu nível de vitamina D era de “normais” 30 ng/ml. Mas o meu <b>gene VDR</b> diz: a minha variante de receptor torna 30 ng/ml pouco. Eu preciso de 60+, senão a vitamina D simplesmente não funciona dentro das minhas células.`},

{id:'folsaeure',category:'Mikronährstoffe',gene:'MTHFR',geneName:'Methylenetetrahydrofolate reductase (MTHFR)',person:{name:'Sarah',age:30},photo:'story_persons/09_sarah_folsaeure.jpg',geneEffect:'Ativação de folato comprometida',
 headline:`“A minha ginecologista recomendou ácido fólico. Os meus genes mal conseguiam <span class="accent">aproveitá-lo.</span>”`,
 shortStory:`Durante a minha gravidez, tomei ácido fólico com disciplina. O meu <b>gene MTHFR</b> carrega uma variante dupla que mal consegue converter o ácido fólico comum na forma ativa (metilfolato).`},

{id:'eisen',category:'Mikronährstoffe',gene:'HFE',geneName:'Haemochromatosis gene (HFE)',person:{name:'Stefanie',age:43},photo:'story_persons/10_stefanie_eisen.jpg',geneEffect:'Risco de sobrecarga de ferro',
 headline:`“Comprimidos de ferro para o meu cansaço? <span class="accent">Para mim, isso seria perigoso.</span>”`,
 shortStory:`Cansada, pálida, sem energia — o quadro clássico da deficiência de ferro. Mas o meu <b>gene HFE</b> mostra o oposto: eu tenho tendência à sobrecarga de ferro.`},

{id:'omega-3',category:'Mikronährstoffe',gene:'FADS1',geneName:'Fatty acid desaturase 1 (FADS1)',person:{name:'Thomas',age:53},photo:'story_persons/12_thomas_omega3.jpg',geneEffect:'Resposta atípica ao ômega-3',
 headline:`“Tomei óleo de peixe durante anos para baixar o colesterol. No meu caso, isso <span class="accent">piora o problema.</span>”`,
 shortStory:`O meu médico recomendou cápsulas de ômega-3. O meu <b>gene FADS1</b> diz: com esta variante, o óleo de peixe na verdade baixa ainda mais o meu HDL em vez de elevá-lo.`},

{id:'selen',category:'Mikronährstoffe',gene:'GPX1',geneName:'Glutathione peroxidase 1 (GPX1)',person:{name:'Bernhard',age:48},photo:'story_persons/14_bernhard_selen.jpg',geneEffect:'Necessidade de selênio duplicada',
 headline:`“Eu achava que estava consumindo selênio suficiente. <span class="accent">Por causa de uma variante genética, preciso do dobro.</span>”`,
 shortStory:`O meu nível de selênio estava “dentro da faixa normal” — castanhas-do-pará de vez em quando, peixe duas vezes por semana. Mas o meu <b>gene GPX1</b> tem uma variante que quase dobra a minha necessidade de selênio. O que era suficiente para a pessoa média era deficiência crônica para mim.`},

{id:'q10',category:'Mikronährstoffe',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Daniela',age:47},photo:'story_persons/22_daniela_q10.jpg',geneEffect:'Ativação reduzida da Q10',
 headline:`“Doze anos tomando coenzima Q10 — e os meus genes revelaram: <span class="accent">foi tudo em vão.</span>”`,
 shortStory:`€600 por ano em Q10 de alta qualidade — para as rugas, para a energia, para o meu coração. Mas o meu <b>gene NQO1</b> tem uma variante que retarda fortemente a ativação da Q10 na sua forma eficaz (ubiquinol). 12 anos de dinheiro desperdiçado.`},

{id:'oxidativer-stress',category:'Mikronährstoffe',gene:'SOD2',geneName:'Superoxide dismutase 2 (SOD2)',person:{name:'Petra',age:50},photo:'story_persons/25_petra_sod2.jpg',geneEffect:'Capacidade de proteção reduzida',
 headline:`“Os meus genes não me protegem bem o suficiente do estresse oxidativo. Agora deixo os <span class="accent">antioxidantes</span> fornecerem essa proteção.”`,
 shortStory:`Frutas vermelhas, brócolis, romã — a minha alimentação poderia estampar a capa de uma revista de bem-estar. Mas o meu <b>gene SOD2</b> reduz a atividade antioxidante do meu próprio corpo. Mais frutas sozinhas não ajudam — micronutrientes direcionados sim.`},

{id:'entgiftung-rauchen',category:'Mikronährstoffe',gene:'GSTM1',geneName:'Glutathione S-transferase Mu 1 (GSTM1)',person:{name:'Klaus',age:60},photo:'story_persons/26_klaus_gstm1.jpg',geneEffect:'Variante nula completa',
 headline:`“Eu sempre achei que fumar não era tão ruim — os meus parentes todos fumam sem consequências. <span class="accent">Para mim é muito pior.</span>”`,
 shortStory:`Pai, tio, tia — todos fumando há décadas, todos saudáveis. Eu achava que era de família. O meu <b>gene GSTM1</b> diz: não para mim. A variante nula deixa o meu corpo quase indefeso contra as toxinas.`},

{id:'immunsystem',category:'Mikronährstoffe',gene:'TNF-α',geneName:'Tumour necrosis factor alpha (TNF-α)',person:{name:'Robert',age:55},photo:'story_persons/27_robert_tnf.jpg',geneEffect:'Sistema imunológico hiper-reativo',
 headline:`“Os meus genes tornam o meu sistema imunológico agressivo demais. Com a alimentação certa <span class="accent">eu consigo contrabalançar isso.</span>”`,
 shortStory:`Articulações rígidas, zumbido constante, pálpebras pesadas de manhã — os sintomas clássicos do “inflammaging”. O meu <b>gene TNF-α</b> diz: a minha resposta inflamatória é geneticamente acima da média. O meu sistema imunológico reage de forma exagerada a cada pequeno gatilho.`},

{id:'homocystein',category:'Mikronährstoffe',gene:'CBS / MTHFR',geneName:'Cystathionine beta-synthase (CBS)',person:{name:'Elke',age:45},photo:'story_persons/29_elke_cbs.jpg',geneEffect:'Maior demanda no metabolismo da homocisteína',
 headline:`“A minha análise genética finalmente explicou <span class="accent">os meus níveis naturalmente altos de homocisteína.</span>”`,
 shortStory:`O meu médico mediu a homocisteína — 22 µmol/L, muito alto (norma <10). Os meus genes <b>MTHFR + CBS + MTR</b> formam juntos um perfil de risco que explica exatamente esse valor. Hoje tomo metilfolato, B12 e B6 de forma direcionada — e o meu nível caiu para 8 µmol/L.`},

{id:'koffein-schlaf',category:'Verträglichkeit',gene:'CYP1A2',geneName:'Cytochrome P450 1A2',person:{name:'Tobias',age:37},photo:'story_persons/19_tobias_actn3.jpg',geneEffect:'Sensibilidade extrema à cafeína',
 headline:`“Depois de um café, não consigo dormir por cinco horas. <span class="accent">Os meus genes revelam o porquê.</span>”`,
 shortStory:`Basta um único expresso no fim da tarde — e a minha mente fica bem acordada até a meia-noite. O meu <b>gene CYP1A2</b> é uma variante de alta sensibilidade: a cafeína permanece no meu sangue o dobro do tempo da média.`},

{id:'schwester-vergleich',category:'Stoffwechsel & Gewicht',gene:'FTO',geneName:'Fat Mass and Obesity-Associated (FTO)',person:{name:'Tanja',age:36},photo:'story_persons/32_tanja_schwester.jpg',geneEffect:'Variante de risco de obesidade (diferente da irmã)',
 headline:`“A minha irmã pode comer o que quiser e nunca engorda. <span class="accent">Geneticamente, somos simplesmente diferentes.</span>”`,
 shortStory:`Nós nos parecemos, comemos igual — e ainda assim ela é magra enquanto eu luto. O meu <b>gene FTO</b> carrega a variante de risco; o dela não. Finalmente entendo: não é a minha força de vontade.`},

{id:'low-carb',category:'Stoffwechsel & Gewicht',gene:'APOA5 / PPARG',geneName:'Lipid metabolism cluster',person:{name:'Verena',age:41},photo:'story_persons/33_verena_lowcarb.jpg',geneEffect:'Responde a carboidratos, sensibilidade à gordura',
 headline:`“Low carb era a última moda entre os meus amigos. Para mim, foi <span class="accent">completamente inútil.</span>”`,
 shortStory:`Três meses de low carb rigoroso. Os meus amigos perderam 6–8 quilos, eu perdi 0,5. O meu <b>perfil APOA5 e PPARG</b> mostra: eu respondo acima da média a carboidratos moderados e bastante mal a uma alta ingestão de gordura.`},

{id:'sport-vergeblich',category:'Stoffwechsel & Gewicht',gene:'ADRB2 + FTO',geneName:'Adrenoreceptor + FTO',person:{name:'Stefan',age:42},photo:'story_persons/34_stefan_sportlos.jpg',geneEffect:'Baixa queima de gordura pelo exercício',
 headline:`“Eu me esforço na academia — e mesmo assim mal emagreço. <span class="accent">Os meus genes explicaram por quê.</span>”`,
 shortStory:`Treino de força três vezes por semana, mais corridas de 5 km. Na balança: quase nada. O meu <b>gene ADRB2</b> responde mal à queima de gordura pelo exercício, e o meu <b>FTO</b> retarda ainda mais as coisas. Para mim, o movimento precisa ser combinado com a alimentação.`},

{id:'diaet-resistenz',category:'Stoffwechsel & Gewicht',gene:'PPARG / FTO',geneName:'PPARG obesity cluster',person:{name:'Eva',age:48},photo:'story_persons/35_eva_diaet.jpg',geneEffect:'Modo adaptativo de economia contra a fome',
 headline:`“Quando como menos, passo fome. E na balança <span class="accent">nada acontece mesmo assim.</span>”`,
 shortStory:`Cortar as calorias para 1.500 kcal — e o meu corpo entra em modo de economia de energia em vez de queimar gordura. A combinação do meu <b>gene PPARG</b> + <b>FTO</b> significa que o meu metabolismo responde à restrição calórica desligando, e não perdendo peso.`},

{id:'fto-heisshunger',category:'Stoffwechsel & Gewicht',gene:'FTO',geneName:'Fat Mass and Obesity-Associated (FTO)',person:{name:'Maria',age:37},photo:'story_persons/15_maria_fto.jpg',geneEffect:'Variante de risco de obesidade (motor da fome)',
 headline:`“Eu tenho uma variante no gene FTO — ela explica a minha <span class="accent">fome anormalmente forte</span> e a minha vontade compulsiva de comer.”`,
 shortStory:`A minha fome nunca pareceu “normal” — vontade de doces três horas depois de uma refeição completa. O meu <b>gene FTO</b> carrega a variante de risco A/A: o gene do sinal de fome que impulsiona exatamente esses desejos.`},

{id:'saettigung',category:'Stoffwechsel & Gewicht',gene:'LEPR',geneName:'Leptin receptor (LEPR)',person:{name:'Nina',age:28},photo:'story_persons/16_nina_lepr.jpg',geneEffect:'Resposta de saciedade reduzida',
 headline:`“Depois de comer, muitas vezes me sinto cheia demais e lenta. <span class="accent">O meu sinal de fome demora demais para chegar.</span>”`,
 shortStory:`Eu como rápido e, geralmente, só percebo depois de 20 minutos que estou saciada — a essa altura, muitas vezes já comi demais. O meu <b>gene LEPR</b> retarda a minha resposta à leptina — o sinal de saciedade me chega com atraso.`},

{id:'fett-vs-carb',category:'Stoffwechsel & Gewicht',gene:'PPARG',geneName:'Peroxisome proliferator-activated receptor (PPARG)',person:{name:'Florian',age:40},photo:'story_persons/17_florian_ppar.jpg',geneEffect:'Alta taxa de armazenamento de gordura',
 headline:`“Eu achava que simplesmente engordava com facilidade. Os meus genes revelaram: <span class="accent">para mim são só as calorias de gordura, não os carboidratos.</span>”`,
 shortStory:`Torrada com abacate, azeite, castanhas — a minha alimentação “saudável”. Mas o meu <b>gene PPARG</b> armazena cada caloria de gordura de forma eficiente, enquanto os carboidratos mal afetam o meu peso. Anos com a estratégia errada.`},

{id:'muskelmasse',category:'Sport',gene:'ACTN3 + MSTN',geneName:'Muscle fibre profile',person:{name:'Stephan',age:46},photo:'story_persons/36_stephan_muskel.jpg',geneEffect:'Maior perda muscular em déficit',
 headline:`“Perder músculo em uma dieta é especialmente drástico para mim. <span class="accent">O treino de força direcionado é como me protejo.</span>”`,
 shortStory:`Na minha última dieta perdi 4 kg de músculo junto com 8 kg de gordura — muito demais. O meu <b>perfil ACTN3 e MSTN</b> explica: o meu músculo se constrói mais devagar e se decompõe mais rápido que a média. Para mim, o treino de força não é uma opção — é uma obrigação.`},

{id:'bauchspeck',category:'Stoffwechsel & Gewicht',gene:'APOC3 / ADIPOQ',geneName:'Belly-fat distribution cluster',person:{name:'Werner',age:49},photo:'story_persons/37_werner_bauch.jpg',geneEffect:'Tendência à distribuição de gordura visceral',
 headline:`“Quando engordo, tudo vai para a barriga. <span class="accent">Os meus genes mostraram por quê.</span>”`,
 shortStory:`Pernas finas, barriga arredondada — o clássico “tipo maçã”. O meu <b>perfil ADIPOQ e APOC3</b> diz: eu armazeno preferencialmente gordura visceral (abdominal). Isso não é só estético — metabolicamente é a gordura mais perigosa.`},

{id:'jojo',category:'Stoffwechsel & Gewicht',gene:'FTO + ADRB2',geneName:'Yo-yo risk cluster',person:{name:'Birgit',age:43},photo:'story_persons/38_birgit_jojo.jpg',geneEffect:'Efeito rebote mais forte',
 headline:`“Por causa dos meus genes, tenho um efeito sanfona especialmente forte. <span class="accent">O meu único caminho é uma mudança de estilo de vida, não uma dieta radical.</span>”`,
 shortStory:`Três dietas — três vezes cada quilo voltou, mais um. A minha <b>combinação FTO + ADRB2</b> faz o meu corpo entrar em modo de reconstrução máxima depois de cada restrição. Hoje sei: para mim, uma dieta radical é a pior abordagem.`},

{id:'kaffee-kollagen',category:'Beauty',gene:'CYP1A2 + Collagen',geneName:'Caffeine–collagen axis',person:{name:'Lara',age:61},photo:'story_persons/43_lara_kaffee_kollagen.jpg',geneEffect:'A cafeína inibe a síntese de colágeno',
 headline:`“O meu café da manhã estava bloqueando a minha produção de colágeno e acelerando o meu envelhecimento. <span class="accent">Hora de repensar.</span>”`,
 shortStory:`Durante anos, 4 xícaras de café por dia. O meu teste de DNA mostra: combinada com a minha <b>variante CYP1A2</b>, a cafeína não age apenas como um estressor para mim — ela também inibe a síntese de colágeno e acelera o envelhecimento da pele.`},

{id:'hyaluron-abbau',category:'Beauty',gene:'HYAL1',geneName:'Hyaluronidase 1 (HYAL1)',person:{name:'Heidi',age:56},photo:'story_persons/40_heidi_hyaluron.jpg',geneEffect:'Degradação aumentada do ácido hialurônico',
 headline:`“Os meus genes não protegem a minha pele da degradação do ácido hialurônico. <span class="accent">Isso explica a minha pele constantemente seca.</span>”`,
 shortStory:`Não importa quanto eu hidrate — a minha pele continua seca. O meu <b>gene HYAL1</b> é uma variante de alta atividade: a enzima que degrada o ácido hialurônico (o reservatório natural de umidade do corpo) trabalha a todo vapor em mim. O ácido hialurônico desaparece mais rápido do que é reposto.`},

{id:'q10-beauty',category:'Beauty',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Ingrid',age:63},photo:'story_persons/44_ingrid_q10.jpg',geneEffect:'Ativação da Q10 reduzida',
 headline:`“Todo mundo jura pela coenzima Q10 como um milagre antienvelhecimento. <span class="accent">O meu teste genético: para mim, ela não faz nada.</span>”`,
 shortStory:`Cápsulas de Q10 durante anos, creme de Q10 no banheiro. Mas o meu <b>gene NQO1</b> tem uma variante de risco que retarda fortemente a ativação da Q10 na sua forma eficaz. Para mim, os produtos com Q10 quase não fizeram nada — mudar para o ubiquinol foi a virada de jogo.`},

{id:'immun-haut',category:'Beauty',gene:'TNF-α + IL6',geneName:'Inflammation cluster',person:{name:'Brigitte',age:55},photo:'story_persons/45_brigitte_immun.jpg',geneEffect:'Resposta inflamatória hiper-reativa',
 headline:`“As minhas variantes genéticas tornam o meu sistema imunológico agressivo demais. <span class="accent">Com o tempo, isso danifica a minha pele.</span>”`,
 shortStory:`Pele sensível, avermelhada, com pequenas inflamações recorrentes. O meu <b>gene TNF-α</b> carrega uma variante hiper-reativa: até pequenos gatilhos como o estresse ou uma infecção desencadeiam reações inflamatórias na pele. O meu sistema imunológico exagera — e a minha pele paga o preço.`},

{id:'apoe',category:'Mikronährstoffe',gene:'APOE',geneName:'Apolipoprotein E (APOE)',person:{name:'Walter',age:59},photo:'story_persons/28_walter_apoe.jpg',geneEffect:'APOE ε4 — variante de risco de colesterol',
 headline:`“O meu colesterol sobe apesar do exercício e da dieta. <span class="accent">O meu gene APOE explica por quê.</span>”`,
 shortStory:`Meias-maratonas, uma dieta mediterrânea — e ainda assim o LDL em 175. O meu <b>gene APOE</b> carrega a variante ε4: em mim, cada grama de gordura saturada da alimentação pode elevar o LDL de forma acentuada.`},

{id:'comt-stress',category:'Burnout & Stress',gene:'COMT',geneName:'Catechol-O-methyltransferase (COMT)',person:{name:'Jana',age:25},photo:'story_persons/30_jana_comt.jpg',geneEffect:'Degradação lenta dos hormônios do estresse',
 headline:`“Pequenos incidentes sempre me estressavam na hora. <span class="accent">O meu gene COMT não me protege bem o suficiente disso.</span>”`,
 shortStory:`Os outros conseguem desligar depois do trabalho — a minha mente continua girando, até um e-mail tardio consegue me desequilibrar. O meu <b>gene COMT</b> degrada os hormônios do estresse mais lentamente. Hoje uso deliberadamente atividades que apoiam o meu metabolismo do estresse.`},

{id:'comt-impulse',category:'Burnout & Stress',gene:'COMT',geneName:'Catechol-O-methyltransferase (COMT)',person:{name:'Helmut',age:51},photo:'story_persons/46_helmut_impuls.jpg',geneEffect:'Maior impulsividade diante de estímulos de recompensa',
 headline:`“Álcool, jogo — difícil de manter sob controle. <span class="accent">O meu gene COMT tinha a explicação.</span>”`,
 shortStory:`Anos me culpando — até descobrir que a minha <b>variante do gene COMT</b> influencia fortemente o meu sistema de dopamina. Os estímulos de recompensa me parecem mais intensos, e a queda depois do “barato” é mais lenta — o que torna o controle de impulsos objetivamente mais difícil.`},

{id:'supp-eisen',category:'Nahrungsergänzung',gene:'HFE',geneName:'Haemochromatosis gene (HFE)',person:{name:'Reinhard',age:47},photo:'story_persons/56_renate_eisen.jpg',geneEffect:'Dosagem de ferro personalizada',
 headline:`“O meu risco HFE torna perigosos os suplementos de ferro de prateleira. <span class="accent">Hoje sei o que o meu corpo realmente precisa.</span>”`,
 shortStory:`Os suplementos clássicos de “ferro potente” seriam arriscados para mim — sou geneticamente propenso à sobrecarga de ferro. Hoje evito misturas multivitamínicas genéricas com ferro e conto com cofatores que otimizam a forma como absorvo ferro naturalmente dos alimentos.`},

{id:'supp-folsaeure',category:'Nahrungsergänzung',gene:'MTHFR',geneName:'Methylenetetrahydrofolate reductase (MTHFR)',person:{name:'Ulrike',age:51},photo:'story_persons/58_ulrike_folsaeure.jpg',geneEffect:'Folato como metilfolato',
 headline:`“Ácido fólico do supermercado? Inútil com a minha variante MTHFR. <span class="accent">Eu preciso da forma já ativada.</span>”`,
 shortStory:`O ácido fólico comum é inutilizável para o meu corpo — o meu <b>gene MTHFR</b> mal consegue ativá-lo. Hoje tomo 5-MTHF (L-metilfolato) — a forma já ativada que as minhas células podem usar diretamente.`},

{id:'supp-selen',category:'Nahrungsergänzung',gene:'GPX1',geneName:'Glutathione peroxidase 1 (GPX1)',person:{name:'Hartmut',age:50},photo:'story_persons/59_hartmut_selen.jpg',geneEffect:'Necessidade de selênio duplicada, dosada individualmente',
 headline:`“A minha variante GPX1 dobra a minha necessidade de selênio. <span class="accent">Hoje eu doso com precisão — não por padrão.</span>”`,
 shortStory:`Os multivitamínicos comuns contêm 55 µg de selênio — a dose padrão. Mas, com a minha <b>variante GPX1</b>, preciso de cerca de 120 µg para alcançar a mesma proteção antioxidante. Hoje sei disso — e suplemento de acordo.`},

{id:'supp-q10',category:'Nahrungsergänzung',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Inge',age:49},photo:'story_persons/57_inge_q10.jpg',geneEffect:'Q10 como ubiquinol',
 headline:`“A Q10 comum não faz nada com a minha variante NQO1. <span class="accent">Eu preciso de antioxidantes diferentes.</span>”`,
 shortStory:`Q10 barata na forma de ubiquinona? Inutilizável para o meu <b>gene NQO1</b> — falta-me a enzima ativadora. Hoje conto com outros antioxidantes: astaxantina, vitamina C, vitamina E e precursores de glutationa. Os meus níveis de energia e a qualidade da minha pele finalmente se beneficiaram.`},

{id:'supp-vitamin-d',category:'Nahrungsergänzung',gene:'VDR',geneName:'Vitamin D receptor (VDR)',person:{name:'Wolfgang',age:54},photo:'story_persons/60_wolfgang_d3.jpg',geneEffect:'Dose maior de vitamina D conforme a genética',
 headline:`“A minha variante VDR precisa do dobro da dose de vitamina D. <span class="accent">Os produtos padrão não são suficientes para mim.</span>”`,
 shortStory:`Produtos padrão com 1.000 UI de vitamina D? Pouco com a minha <b>variante VDR</b> — preciso de pelo menos 3.000–4.000 UI para alcançar um resultado eficaz. Hoje sei disso e suplemento de acordo.`},

{id:'sprint-vs-ausdauer',category:'Performance',gene:'ACTN3 + ACE',geneName:'Power / endurance profile',person:{name:'Manuel',age:33},photo:'story_persons/47_manuel_ausdauer.jpg',geneEffect:'Perfil dominante de resistência',
 headline:`“A vida toda treinei para potência explosiva. O meu teste genético revelou: <span class="accent">o meu talento está na resistência.</span>”`,
 shortStory:`CrossFit, levantamento olímpico, distâncias de sprint — as modalidades que nunca combinaram comigo de verdade. O meu <b>perfil ACTN3 + ACE</b> mostra: geneticamente sou um clássico tipo de resistência. Surpreso, frustrado, mas finalmente com uma explicação.`},

{id:'testosteron',category:'Performance',gene:'SHBG + AR',geneName:'Sex hormone-binding globulin (SHBG)',person:{name:'Otto',age:62},photo:'story_persons/48_otto_testo.jpg',geneEffect:'Ligação aumentada da testosterona',
 headline:`“O meu teste genético finalmente explicou <span class="accent">os meus níveis cronicamente baixos de testosterona.</span>”`,
 shortStory:`Pouca disposição, menos ganho muscular, energia se esvaindo — os exames médicos mostraram testosterona livre cronicamente baixa. O meu <b>gene SHBG</b> explica: em mim, a testosterona é ligada com mais força, então menos fica disponível de forma “livre”.`},

{id:'laktat-hoch',category:'Performance',gene:'MCT1 + LDHA',geneName:'Lactate metabolism',person:{name:'Kevin',age:31},photo:'story_persons/49_kevin_laktat.jpg',geneEffect:'Eliminação retardada do lactato',
 headline:`“O meu teste genético me explicou <span class="accent">que eu simplesmente tenho valores de lactato mais altos.</span>”`,
 shortStory:`Limiar de lactato do plano de treino: 4 mmol/L. Os meus valores reais: 5,5–6,5 mmol/L no mesmo ritmo. O meu <b>gene MCT1</b> é uma variante de risco: o meu transporte de lactato para fora dos músculos ocorre mais lentamente.`},

{id:'sport-stress',category:'Performance',gene:'COMT + ADRB2',geneName:'Stress–performance cluster',person:{name:'Pascal',age:29},photo:'story_persons/50_pascal_stress.jpg',geneEffect:'Resposta ao estresse amplificada',
 headline:`“O desempenho no esporte competitivo é estressante. <span class="accent">E os meus genes ainda trabalham contra mim por cima disso.</span>”`,
 shortStory:`Dia de prova, adrenalina a mil — e o meu corpo demora demais para eliminá-la de novo. O meu <b>perfil COMT + ADRB2</b> é uma constelação sensível ao estresse. O desempenho máximo me custa mais do que aos outros.`},

{id:'erholung-lang',category:'Performance',gene:'IL6 + CRP',geneName:'Inflammation–recovery cluster',person:{name:'Mathias',age:27},photo:'story_persons/51_mathias_erholung.jpg',geneEffect:'Resposta inflamatória prolongada',
 headline:`“Os meus genes prolongam o meu tempo de recuperação depois do treino <span class="accent">desnecessariamente.</span>”`,
 shortStory:`Enquanto os meus parceiros de treino voltam à força total depois de 24 horas, eu preciso de 48 — às vezes 72. O meu <b>gene IL6</b> carrega uma variante de alta atividade: a minha resposta inflamatória após o esforço dura mais tempo.`},

{id:'muskelmasse-talent',category:'Performance',gene:'MSTN + IGF1',geneName:'Muscle-building cluster',person:{name:'Daniel',age:22},photo:'story_persons/52_daniel_muskel.jpg',geneEffect:'Perfil ótimo de hipertrofia',
 headline:`“Segundo os meus genes, tenho exatamente a predisposição certa para uma grande massa muscular. <span class="accent">Isso combina perfeitamente com o meu objetivo.</span>”`,
 shortStory:`O fisiculturismo é o meu objetivo. O meu teste genético confirma: o meu <b>perfil MSTN + IGF1</b> é ótimo para a hipertrofia. Baixa atividade de miostatina (o freio muscular), alta resposta de IGF1 ao treino. Um sinal verde genético completo.`},

{id:'puste-aus',category:'Performance',gene:'ACTN3',geneName:'Alpha-actinin 3 (ACTN3)',person:{name:'Jakob',age:20},photo:'story_persons/53_jakob_puste.jpg',geneEffect:'Perfil de fibras dominante de velocista',
 headline:`“Agora sei por que fico sem fôlego no meio do jogo: <span class="accent">sou um velocista genético, não um corredor de resistência.</span>”`,
 shortStory:`Futebol: ótimas arrancadas explosivas, difícil aguentar 90 minutos. O meu <b>gene ACTN3</b> explica: variante R/R — uma alta proporção de fibras de contração rápida, um perfil clássico de velocista. No esporte coletivo, isso é uma vantagem e uma desvantagem ao mesmo tempo.`},

{id:'vo2-max',category:'Performance',gene:'PPARGC1A',geneName:'Mitochondrial biogenesis gene (PPARGC1A)',person:{name:'Patrick',age:26},photo:'story_persons/54_felix_vo2.jpg',geneEffect:'Atividade mitocondrial de topo',
 headline:`“Segundo os meus genes, tenho as <span class="accent">melhores condições para um VO2máx elevado.</span>”`,
 shortStory:`O meu último teste de desempenho: VO2máx 64 ml/kg/min — faixa de elite para a minha idade. O meu <b>gene PPARGC1A</b> confirma: eu tenho a melhor variante para a biogênese mitocondrial. O meu corpo produz energia a partir do oxigênio de forma mais eficiente que a média.`},

{id:'verletzung',category:'Performance',gene:'COL5A1',geneName:'Collagen type V alpha 1 (COL5A1)',person:{name:'Lukas',age:44},photo:'story_persons/55_tobias_verletzung.jpg',geneEffect:'Risco aumentado de lesão nos tendões',
 headline:`“Um breve descuido e uma lesão me custou 3 jogos. <span class="accent">O teste genético tinha previsto isso.</span>”`,
 shortStory:`Um problema no tendão de Aquiles depois de um exercício de sprint. 3 semanas afastado, 3 jogos perdidos. O meu <b>gene COL5A1</b> carrega uma variante de risco — a estrutura dos meus tendões é menos resistente a rupturas que a média. Se eu soubesse antes, teria tido mais cuidado.`}
];
