/* === Novogenia Story Database (EN, native site) ===
   Genetic variants told as first-person stories.
   Used by lifestyle.html, beauty.html, supplements.html.
   Source: NovoDaily German story set, translated for the EN-first native rebuild.
   Categories kept as internal keys (never displayed) so cluster filters match.
=================================================== */
window.NOVO_STORIES = [
{id:'koffein',category:'Verträglichkeit',gene:'CYP1A2',geneName:'Cytochrome P450 1A2',person:{name:'Lisa',age:34},photo:'story_persons/01_lisa_koffein.jpg',geneEffect:'咖啡因代谢缓慢',
 headline:`“我一直以为早上那杯咖啡对身体有益。<span class="accent">可我的基因却说不然。</span>”`,
 shortStory:`每天三杯咖啡是我的仪式——直到我得知，我的 <b>CYP1A2 基因</b>分解咖啡因的速度非常缓慢。咖啡非但没有让我精神振奋，反而在数小时里持续给我的心血管系统增加负担。`},

{id:'laktose',category:'Verträglichkeit',gene:'LCT',geneName:'Lactase gene (LCT)',person:{name:'Julia',age:29},photo:'story_persons/02_julia_laktose.jpg',geneEffect:'乳糖不耐受易感',
 headline:`“吃完酸奶就肚子痛？多年来我<span class="accent">只是一味地忽略它。</span>”`,
 shortStory:`“你只是肠胃比较敏感罢了，”大家都这么说。可我的 <b>LCT 基因</b>却揭示：过了婴儿期，我的乳糖酶几乎完全停止了分泌——我是乳糖不耐受。`},

{id:'salz',category:'Verträglichkeit',gene:'AGT',geneName:'Angiotensinogen gene (AGT)',person:{name:'Andreas',age:57},photo:'story_persons/04_andreas_salz.jpg',geneEffect:'盐敏感性升高',
 headline:`“医生警告我要少吃盐。而我的基因解释了<span class="accent">为什么盐对我的影响格外大。</span>”`,
 shortStory:`高血压——但对我来说，哪怕只是一点点盐都会产生影响。我的 <b>AGT 基因</b>让我对盐格外敏感：即使少量摄入，也会让我的血压明显升高。`},

{id:'gluten',category:'Verträglichkeit',gene:'HLA-DQ2/DQ8',geneName:'HLA type II',person:{name:'Magdalena',age:32},photo:'story_persons/06_magdalena_gluten.jpg',geneEffect:'乳糜泻风险升高',
 headline:`“无麸质饮食过去对我只是一种生活方式。<span class="accent">如今却是一种必需。</span>”`,
 shortStory:`我曾因为身边的人这样吃，就跟着少吃麸质。可我的 <b>HLA-DQ2 基因</b>揭示：我属于乳糜泻的高危人群。一次血液检测证实了这一点。`},

{id:'vitamin-d',category:'Mikronährstoffe',gene:'VDR',geneName:'Vitamin D receptor (VDR)',person:{name:'Markus',age:38},photo:'story_persons/08_markus_vitamind.jpg',geneEffect:'受体活性降低',
 headline:`“我经常户外活动，维生素 D 水平也还过得去。<span class="accent">可对我的基因来说，这依然太少了。</span>”`,
 shortStory:`冬天滑雪，夏天徒步——阳光对我从来不是问题。我的维生素 D 水平是“正常”的 30 ng/ml。但我的 <b>VDR 基因</b>却揭示：我的受体变异让 30 ng/ml 显得太低。我需要 60 以上，否则维生素 D 在我的细胞里根本无法发挥作用。`},

{id:'folsaeure',category:'Mikronährstoffe',gene:'MTHFR',geneName:'Methylenetetrahydrofolate reductase (MTHFR)',person:{name:'Sarah',age:30},photo:'story_persons/09_sarah_folsaeure.jpg',geneEffect:'叶酸活化受阻',
 headline:`“我的妇科医生建议我补充叶酸。可我的基因<span class="accent">几乎无法利用它。</span>”`,
 shortStory:`怀孕期间，我一丝不苟地服用叶酸。而我的 <b>MTHFR 基因</b>携带着双重变异，几乎无法把普通叶酸转化成活性形式（甲基叶酸）。`},

{id:'eisen',category:'Mikronährstoffe',gene:'HFE',geneName:'Haemochromatosis gene (HFE)',person:{name:'Stefanie',age:43},photo:'story_persons/10_stefanie_eisen.jpg',geneEffect:'铁过载风险',
 headline:`“为了缓解疲劳吃铁片？<span class="accent">对我来说那可是很危险的。</span>”`,
 shortStory:`疲惫、面色苍白、精力枯竭——典型的缺铁表现。但我的 <b>HFE 基因</b>显示的恰恰相反：我容易发生铁过载。`},

{id:'omega-3',category:'Mikronährstoffe',gene:'FADS1',geneName:'Fatty acid desaturase 1 (FADS1)',person:{name:'Thomas',age:53},photo:'story_persons/12_thomas_omega3.jpg',geneEffect:'欧米伽-3 反应异常',
 headline:`“为了降胆固醇，我吃了多年鱼油。可在我身上它<span class="accent">反而让问题更糟。</span>”`,
 shortStory:`医生建议我服用欧米伽-3 胶囊。可我的 <b>FADS1 基因</b>揭示：带着这种变异，鱼油非但没有升高我的 HDL，反而把它压得更低。`},

{id:'selen',category:'Mikronährstoffe',gene:'GPX1',geneName:'Glutathione peroxidase 1 (GPX1)',person:{name:'Bernhard',age:48},photo:'story_persons/14_bernhard_selen.jpg',geneEffect:'硒需求量翻倍',
 headline:`“我以为自己摄入的硒已经够了。<span class="accent">可因为一个基因变异，我需要的是两倍。</span>”`,
 shortStory:`我的硒水平“在正常范围内”——偶尔吃点巴西坚果，一周吃两次鱼。但我的 <b>GPX1 基因</b>带有一种变异，让我的硒需求量几乎翻了一倍。对普通人足够的量，对我却是长期缺乏。`},

{id:'q10',category:'Mikronährstoffe',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Daniela',age:47},photo:'story_persons/22_daniela_q10.jpg',geneEffect:'Q10 活化能力降低',
 headline:`“服用辅酶 Q10 十二年——而我的基因揭示：<span class="accent">全都白费了。</span>”`,
 shortStory:`每年花 600 欧元买高品质 Q10——为了抗皱、为了精力、为了我的心脏。但我的 <b>NQO1 基因</b>带有一种变异，会强烈拖慢 Q10 转化为有效形式（还原型辅酶 Q10）的活化过程。整整 12 年的钱都打了水漂。`},

{id:'oxidativer-stress',category:'Mikronährstoffe',gene:'SOD2',geneName:'Superoxide dismutase 2 (SOD2)',person:{name:'Petra',age:50},photo:'story_persons/25_petra_sod2.jpg',geneEffect:'保护能力降低',
 headline:`“我的基因无法很好地保护我免受氧化应激。如今我让<span class="accent">抗氧化剂</span>来提供这份保护。”`,
 shortStory:`蓝莓、西兰花、石榴——我的饮食简直可以登上养生杂志封面。但我的 <b>SOD2 基因</b>抑制了身体自身的抗氧化活性。单靠多吃水果没用——有针对性的微量营养素才管用。`},

{id:'entgiftung-rauchen',category:'Mikronährstoffe',gene:'GSTM1',geneName:'Glutathione S-transferase Mu 1 (GSTM1)',person:{name:'Klaus',age:60},photo:'story_persons/26_klaus_gstm1.jpg',geneEffect:'完全缺失型变异',
 headline:`“我一直以为吸烟没那么糟——我的亲戚都抽烟，也没什么事。<span class="accent">可对我来说，情况要严重得多。</span>”`,
 shortStory:`父亲、叔叔、姑姑——都抽了几十年烟，个个身体健康。我以为这是家族遗传的底子。可我的 <b>GSTM1 基因</b>揭示：这对我并不适用。缺失型变异让我的身体在毒素面前几乎毫无防御。`},

{id:'immunsystem',category:'Mikronährstoffe',gene:'TNF-α',geneName:'Tumour necrosis factor alpha (TNF-α)',person:{name:'Robert',age:55},photo:'story_persons/27_robert_tnf.jpg',geneEffect:'免疫系统反应过度',
 headline:`“我的基因让免疫系统过于激进。而通过正确的饮食，<span class="accent">我可以加以抵消。</span>”`,
 shortStory:`关节僵硬、耳鸣不断、早上眼皮沉重——典型的“炎性衰老”症状。我的 <b>TNF-α 基因</b>揭示：我的炎症反应在基因层面高于平均水平。我的免疫系统对每一个微小的诱因都会反应过度。`},

{id:'homocystein',category:'Mikronährstoffe',gene:'CBS / MTHFR',geneName:'Cystathionine beta-synthase (CBS)',person:{name:'Elke',age:45},photo:'story_persons/29_elke_cbs.jpg',geneEffect:'同型半胱氨酸代谢需求更高',
 headline:`“我的基因分析终于解释了<span class="accent">我天生偏高的同型半胱氨酸水平。</span>”`,
 shortStory:`医生测了我的同型半胱氨酸——22 µmol/L，远远偏高（标准值 <10）。我的 <b>MTHFR + CBS + MTR</b> 基因共同构成的风险特征，恰好解释了这个数值。如今我有针对性地补充甲基叶酸、B12 和 B6——我的数值已降到了 8 µmol/L。`},

{id:'koffein-schlaf',category:'Verträglichkeit',gene:'CYP1A2',geneName:'Cytochrome P450 1A2',person:{name:'Tobias',age:37},photo:'story_persons/19_tobias_actn3.jpg',geneEffect:'对咖啡因极度敏感',
 headline:`“喝一杯咖啡，我就五个小时睡不着。<span class="accent">我的基因揭示了原因。</span>”`,
 shortStory:`哪怕只是傍晚一杯浓缩咖啡——我的大脑就会一直清醒到午夜。我的 <b>CYP1A2 基因</b>是一种高敏感变异：咖啡因在我血液里停留的时间是常人的两倍。`},

{id:'schwester-vergleich',category:'Stoffwechsel & Gewicht',gene:'FTO',geneName:'Fat Mass and Obesity-Associated (FTO)',person:{name:'Tanja',age:36},photo:'story_persons/32_tanja_schwester.jpg',geneEffect:'肥胖风险变异（与她妹妹不同）',
 headline:`“我妹妹想吃什么就吃什么，从来不长胖。<span class="accent">在基因层面，我们根本就是两样人。</span>”`,
 shortStory:`我们长得像，吃得也一样——可她苗条，我却怎么都难。我的 <b>FTO 基因</b>携带风险变异，她却没有。我终于明白了：这不是我的意志力问题。`},

{id:'low-carb',category:'Stoffwechsel & Gewicht',gene:'APOA5 / PPARG',geneName:'Lipid metabolism cluster',person:{name:'Verena',age:41},photo:'story_persons/33_verena_lowcarb.jpg',geneEffect:'碳水响应型、脂肪敏感',
 headline:`“低碳水在我朋友圈里风靡一时。对我来说却<span class="accent">完全没用。</span>”`,
 shortStory:`严格低碳水坚持了三个月。我的朋友们瘦了 6–8 公斤，我只瘦了 0.5 公斤。我的 <b>APOA5 与 PPARG 特征</b>显示：我对适量碳水的反应高于平均，而对高脂肪摄入的反应则相当差。`},

{id:'sport-vergeblich',category:'Stoffwechsel & Gewicht',gene:'ADRB2 + FTO',geneName:'Adrenoreceptor + FTO',person:{name:'Stefan',age:42},photo:'story_persons/34_stefan_sportlos.jpg',geneEffect:'运动燃脂反应低',
 headline:`“我在健身房拼命练——体重却几乎不掉。<span class="accent">我的基因解释了原因。</span>”`,
 shortStory:`一周三次力量训练，外加 5 公里跑。可秤上：几乎没变化。我的 <b>ADRB2 基因</b>对运动燃脂的反应很差，而我的 <b>FTO</b> 又进一步拖慢了进程。对我来说，运动必须和饮食结合起来才行。`},

{id:'diaet-resistenz',category:'Stoffwechsel & Gewicht',gene:'PPARG / FTO',geneName:'PPARG obesity cluster',person:{name:'Eva',age:48},photo:'story_persons/35_eva_diaet.jpg',geneEffect:'适应性省能饥饿模式',
 headline:`“我少吃，就得挨饿。可秤上<span class="accent">照样毫无动静。</span>”`,
 shortStory:`把热量降到 1500 kcal——我的身体不去燃脂，反而切换到了省能模式。我的 <b>PPARG 基因</b> + <b>FTO</b> 组合意味着：面对热量限制，我的新陈代谢的反应是“关机”，而不是减重。`},

{id:'fto-heisshunger',category:'Stoffwechsel & Gewicht',gene:'FTO',geneName:'Fat Mass and Obesity-Associated (FTO)',person:{name:'Maria',age:37},photo:'story_persons/15_maria_fto.jpg',geneEffect:'肥胖风险变异（饥饿驱动）',
 headline:`“我的 FTO 基因带有一处变异——它解释了我那<span class="accent">异常强烈的饥饿感</span>以及对食物的渴望。”`,
 shortStory:`我的饥饿感从来都不“正常”——正经吃完一顿饭三小时后，就又开始馋甜食。我的 <b>FTO 基因</b>携带 A/A 风险变异：正是这个饥饿信号基因，驱动着这些渴望。`},

{id:'saettigung',category:'Stoffwechsel & Gewicht',gene:'LEPR',geneName:'Leptin receptor (LEPR)',person:{name:'Nina',age:28},photo:'story_persons/16_nina_lepr.jpg',geneEffect:'饱腹反应减弱',
 headline:`“吃完东西我常常觉得撑得难受、昏昏欲睡。<span class="accent">我的饱腹信号总是来得太晚。</span>”`,
 shortStory:`我吃得快，往往过了 20 分钟才意识到自己饱了——那时通常已经吃过头了。我的 <b>LEPR 基因</b>拖慢了我的瘦素反应——饱腹信号总是延迟才传到我这里。`},

{id:'fett-vs-carb',category:'Stoffwechsel & Gewicht',gene:'PPARG',geneName:'Peroxisome proliferator-activated receptor (PPARG)',person:{name:'Florian',age:40},photo:'story_persons/17_florian_ppar.jpg',geneEffect:'脂肪储存率高',
 headline:`“我一直以为自己只是容易长胖。我的基因揭示：<span class="accent">对我来说，长胖的只是脂肪热量，而不是碳水。</span>”`,
 shortStory:`牛油果吐司、橄榄油、坚果——我那份“健康”饮食。但我的 <b>PPARG 基因</b>会高效地储存每一份脂肪热量，而碳水几乎不影响我的体重。多年来一直用错了策略。`},

{id:'muskelmasse',category:'Sport',gene:'ACTN3 + MSTN',geneName:'Muscle fibre profile',person:{name:'Stephan',age:46},photo:'story_persons/36_stephan_muskel.jpg',geneEffect:'热量赤字下肌肉流失加剧',
 headline:`“节食时掉肌肉，对我来说尤其严重。<span class="accent">有针对性的力量训练，是我保护自己的方式。</span>”`,
 shortStory:`上一次节食，我在减掉 8 公斤脂肪的同时，也掉了 4 公斤肌肉——远远太多了。我的 <b>ACTN3 与 MSTN 特征</b>解释了原因：我的肌肉增长比平均更慢，分解却更快。对我来说，力量训练不是一个选项——而是必须。`},

{id:'bauchspeck',category:'Stoffwechsel & Gewicht',gene:'APOC3 / ADIPOQ',geneName:'Belly-fat distribution cluster',person:{name:'Werner',age:49},photo:'story_persons/37_werner_bauch.jpg',geneEffect:'内脏脂肪分布倾向',
 headline:`“我一长胖，全都堆在肚子上。<span class="accent">我的基因揭示了原因。</span>”`,
 shortStory:`腿细，肚子圆——典型的“苹果型”身材。我的 <b>ADIPOQ 与 APOC3 特征</b>揭示：我更倾向于储存内脏（腹部）脂肪。这不仅是外观问题——从代谢角度看，它是最危险的脂肪。`},

{id:'jojo',category:'Stoffwechsel & Gewicht',gene:'FTO + ADRB2',geneName:'Yo-yo risk cluster',person:{name:'Birgit',age:43},photo:'story_persons/38_birgit_jojo.jpg',geneEffect:'反弹效应更强',
 headline:`“因为我的基因，我的溜溜球效应格外明显。<span class="accent">我唯一的出路是改变生活方式，而不是节食速成。</span>”`,
 shortStory:`三次节食——三次每一公斤都长了回来，还多出一公斤。我的 <b>FTO + ADRB2 组合</b>让我的身体在每一次限制之后都切换到最大程度的重建模式。如今我明白了：对我来说，节食速成是最糟糕的办法。`},

{id:'kaffee-kollagen',category:'Beauty',gene:'CYP1A2 + Collagen',geneName:'Caffeine–collagen axis',person:{name:'Lara',age:61},photo:'story_persons/43_lara_kaffee_kollagen.jpg',geneEffect:'咖啡因抑制胶原蛋白合成',
 headline:`“我的晨间咖啡一直在阻碍我的胶原蛋白生成，加速我的衰老。<span class="accent">是时候重新考虑了。</span>”`,
 shortStory:`多年来，每天 4 杯咖啡。我的 DNA 检测显示：结合我的 <b>CYP1A2 变异</b>，咖啡因对我来说不仅是一种压力源——它还会抑制胶原蛋白合成、加速皮肤老化。`},

{id:'hyaluron-abbau',category:'Beauty',gene:'HYAL1',geneName:'Hyaluronidase 1 (HYAL1)',person:{name:'Heidi',age:56},photo:'story_persons/40_heidi_hyaluron.jpg',geneEffect:'透明质酸分解加剧',
 headline:`“我的基因无法保护皮肤免受透明质酸的分解。<span class="accent">这解释了我为什么皮肤总是干燥。</span>”`,
 shortStory:`无论我怎么补水——皮肤依旧干燥。我的 <b>HYAL1 基因</b>是一种高活性变异：那种分解透明质酸（身体自身的水分储库）的酶，在我体内全速运转。透明质酸消失的速度比补充的速度还快。`},

{id:'q10-beauty',category:'Beauty',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Ingrid',age:63},photo:'story_persons/44_ingrid_q10.jpg',geneEffect:'Q10 活化降低',
 headline:`“人人都把辅酶 Q10 奉为抗衰老神物。<span class="accent">我的基因检测却说：对我毫无用处。</span>”`,
 shortStory:`吃了多年 Q10 胶囊，浴室里还摆着 Q10 面霜。但我的 <b>NQO1 基因</b>带有一种风险变异，会强烈拖慢 Q10 转化为有效形式的活化过程。对我来说，那些 Q10 产品几乎毫无作用——改用还原型辅酶 Q10 才是真正的转折点。`},

{id:'immun-haut',category:'Beauty',gene:'TNF-α + IL6',geneName:'Inflammation cluster',person:{name:'Brigitte',age:55},photo:'story_persons/45_brigitte_immun.jpg',geneEffect:'炎症反应过度',
 headline:`“我的基因变异让免疫系统过于激进。<span class="accent">日积月累，这会损害我的皮肤。</span>”`,
 shortStory:`皮肤敏感、发红，反复出现小炎症。我的 <b>TNF-α 基因</b>携带一种反应过度的变异：即便是压力或一次感染这样的小诱因，也会引发皮肤的炎症反应。我的免疫系统反应过头——代价则由我的皮肤来承担。`},

{id:'apoe',category:'Mikronährstoffe',gene:'APOE',geneName:'Apolipoprotein E (APOE)',person:{name:'Walter',age:59},photo:'story_persons/28_walter_apoe.jpg',geneEffect:'APOE ε4——胆固醇风险变异',
 headline:`“尽管我坚持运动和饮食，胆固醇还是往上涨。<span class="accent">我的 APOE 基因解释了原因。</span>”`,
 shortStory:`跑半程马拉松、地中海饮食——可 LDL 还是高达 175。我的 <b>APOE 基因</b>携带 ε4 变异：在我身上，食物里每一克饱和脂肪都可能把 LDL 猛推上去。`},

{id:'comt-stress',category:'Burnout & Stress',gene:'COMT',geneName:'Catechol-O-methyltransferase (COMT)',person:{name:'Jana',age:25},photo:'story_persons/30_jana_comt.jpg',geneEffect:'压力激素分解缓慢',
 headline:`“一点小事总能立刻让我紧张。<span class="accent">我的 COMT 基因无法很好地保护我免受这种影响。</span>”`,
 shortStory:`别人下班后能放空自己——我的脑子却停不下来，哪怕一封深夜邮件都能让我失衡。我的 <b>COMT 基因</b>分解压力激素的速度更慢。如今我会有意识地借助一些活动，来支持我的压力代谢。`},

{id:'comt-impulse',category:'Burnout & Stress',gene:'COMT',geneName:'Catechol-O-methyltransferase (COMT)',person:{name:'Helmut',age:51},photo:'story_persons/46_helmut_impuls.jpg',geneEffect:'对奖赏刺激的冲动性更高',
 headline:`“酒精、赌博——很难控制住。<span class="accent">我的 COMT 基因里藏着答案。</span>”`,
 shortStory:`多年来我一直自责——直到我得知，我的 <b>COMT 基因变异</b>强烈影响着我的多巴胺系统。奖赏刺激对我来说感受更强烈，而“快感”过后的回落又更慢——这让冲动控制在客观上变得更难。`},

{id:'supp-eisen',category:'Nahrungsergänzung',gene:'HFE',geneName:'Haemochromatosis gene (HFE)',person:{name:'Reinhard',age:47},photo:'story_persons/56_renate_eisen.jpg',geneEffect:'量身定制的铁剂剂量',
 headline:`“我的 HFE 风险让市售铁剂变得危险。<span class="accent">如今我知道了身体真正需要什么。</span>”`,
 shortStory:`那些常见的“强效补铁”产品对我来说是有风险的——我在基因层面就容易发生铁过载。如今我避开含铁的通用复合维生素，转而依靠那些能优化我从食物中自然吸收铁的辅助因子。`},

{id:'supp-folsaeure',category:'Nahrungsergänzung',gene:'MTHFR',geneName:'Methylenetetrahydrofolate reductase (MTHFR)',person:{name:'Ulrike',age:51},photo:'story_persons/58_ulrike_folsaeure.jpg',geneEffect:'以甲基叶酸形式补充叶酸',
 headline:`“超市买的叶酸？对我的 MTHFR 变异来说没用。<span class="accent">我需要的是已经活化好的形式。</span>”`,
 shortStory:`普通叶酸对我的身体毫无用处——我的 <b>MTHFR 基因</b>几乎无法把它活化。如今我服用 5-MTHF（左旋甲基叶酸）——那种我的细胞可以直接利用、已经活化好的形式。`},

{id:'supp-selen',category:'Nahrungsergänzung',gene:'GPX1',geneName:'Glutathione peroxidase 1 (GPX1)',person:{name:'Hartmut',age:50},photo:'story_persons/59_hartmut_selen.jpg',geneEffect:'硒需求翻倍，个性化定量',
 headline:`“我的 GPX1 变异让硒需求翻倍。<span class="accent">如今我精准定量——而不是照常规来。</span>”`,
 shortStory:`普通复合维生素含 55 µg 硒——这是标准剂量。但带着我的 <b>GPX1 变异</b>，我需要约 120 µg 才能达到同样的抗氧化保护。如今我明白了这一点——并据此进行补充。`},

{id:'supp-q10',category:'Nahrungsergänzung',gene:'NQO1',geneName:'NAD(P)H quinone dehydrogenase 1 (NQO1)',person:{name:'Inge',age:49},photo:'story_persons/57_inge_q10.jpg',geneEffect:'以还原型辅酶 Q10 补充',
 headline:`“对我的 NQO1 变异来说，普通 Q10 毫无作用。<span class="accent">我需要的是别的抗氧化剂。</span>”`,
 shortStory:`氧化型（泛醌）的廉价 Q10？对我的 <b>NQO1 基因</b>来说毫无用处——我缺少那种活化酶。如今我依靠其他抗氧化剂：虾青素、维生素 C、维生素 E 以及谷胱甘肽前体。我的精力水平和皮肤状态终于因此受益。`},

{id:'supp-vitamin-d',category:'Nahrungsergänzung',gene:'VDR',geneName:'Vitamin D receptor (VDR)',person:{name:'Wolfgang',age:54},photo:'story_persons/60_wolfgang_d3.jpg',geneEffect:'按基因需要更高的维生素 D 剂量',
 headline:`“我的 VDR 变异需要双倍的维生素 D 剂量。<span class="accent">标准产品对我来说不够。</span>”`,
 shortStory:`含 1000 IU 维生素 D 的标准产品？对我的 <b>VDR 变异</b>来说太少了——我至少需要 3000–4000 IU 才能达到有效结果。如今我明白了这一点，并据此进行补充。`},

{id:'sprint-vs-ausdauer',category:'Performance',gene:'ACTN3 + ACE',geneName:'Power / endurance profile',person:{name:'Manuel',age:33},photo:'story_persons/47_manuel_ausdauer.jpg',geneEffect:'耐力主导型特征',
 headline:`“我这辈子都在为爆发力而训练。我的基因检测揭示：<span class="accent">我的天赋在于耐力。</span>”`,
 shortStory:`CrossFit、奥林匹克举重、短跑距离——这些项目从来都不太适合我。我的 <b>ACTN3 + ACE 特征</b>显示：在基因层面，我是典型的耐力型。既意外又沮丧，但终于有了解释。`},

{id:'testosteron',category:'Performance',gene:'SHBG + AR',geneName:'Sex hormone-binding globulin (SHBG)',person:{name:'Otto',age:62},photo:'story_persons/48_otto_testo.jpg',geneEffect:'睾酮结合增强',
 headline:`“我的基因检测终于解释了<span class="accent">我长期偏低的睾酮水平。</span>”`,
 shortStory:`动力不足、增肌变慢、精力渐退——医学检测显示我的游离睾酮长期偏低。我的 <b>SHBG 基因</b>解释了原因：在我体内，睾酮被更牢地结合起来，于是能以“游离”形式利用的就更少了。`},

{id:'laktat-hoch',category:'Performance',gene:'MCT1 + LDHA',geneName:'Lactate metabolism',person:{name:'Kevin',age:31},photo:'story_persons/49_kevin_laktat.jpg',geneEffect:'乳酸清除延迟',
 headline:`“我的基因检测向我解释了<span class="accent">为什么我的乳酸值本来就更高。</span>”`,
 shortStory:`训练计划里的乳酸阈值：4 mmol/L。而我的真实数值：在同样配速下达到 5.5–6.5 mmol/L。我的 <b>MCT1 基因</b>是一种风险变异：我把乳酸运出肌肉的速度更慢。`},

{id:'sport-stress',category:'Performance',gene:'COMT + ADRB2',geneName:'Stress–performance cluster',person:{name:'Pascal',age:29},photo:'story_persons/50_pascal_stress.jpg',geneEffect:'压力反应被放大',
 headline:`“竞技体育本身就充满压力。<span class="accent">而我的基因还要在此之外跟我作对。</span>”`,
 shortStory:`比赛当天，肾上腺素飙升——而我的身体要花太长时间才能把它重新清除。我的 <b>COMT + ADRB2 特征</b>是一种对压力敏感的组合。发挥出巅峰状态，对我来说比别人代价更大。`},

{id:'erholung-lang',category:'Performance',gene:'IL6 + CRP',geneName:'Inflammation–recovery cluster',person:{name:'Mathias',age:27},photo:'story_persons/51_mathias_erholung.jpg',geneEffect:'炎症反应延长',
 headline:`“我的基因把我训练后的恢复时间<span class="accent">拖得毫无必要地漫长。</span>”`,
 shortStory:`当我的训练伙伴 24 小时后就重新满血复活时，我却需要 48 小时——有时甚至 72 小时。我的 <b>IL6 基因</b>携带一种高活性变异：我在运动后的炎症反应持续得更久。`},

{id:'muskelmasse-talent',category:'Performance',gene:'MSTN + IGF1',geneName:'Muscle-building cluster',person:{name:'Daniel',age:22},photo:'story_persons/52_daniel_muskel.jpg',geneEffect:'最佳肌肥大特征',
 headline:`“根据我的基因，我拥有练出大块肌肉的绝佳天赋。<span class="accent">这与我的目标完美契合。</span>”`,
 shortStory:`健美是我的目标。我的基因检测证实了这一点：我的 <b>MSTN + IGF1 特征</b>非常适合肌肥大。低肌肉生长抑制素活性（肌肉的“刹车”），高 IGF1 训练反应。基因层面全面放行。`},

{id:'puste-aus',category:'Performance',gene:'ACTN3',geneName:'Alpha-actinin 3 (ACTN3)',person:{name:'Jakob',age:20},photo:'story_persons/53_jakob_puste.jpg',geneEffect:'短跑主导型纤维特征',
 headline:`“现在我明白了为什么我打到一半就上气不接下气：<span class="accent">我天生是短跑选手，而不是耐力跑者。</span>”`,
 shortStory:`踢足球：爆发冲刺很棒，却很难撑满 90 分钟。我的 <b>ACTN3 基因</b>解释了原因：R/R 变异——快肌纤维占比很高，是典型的短跑选手特征。在团队运动里，这既是优势，也是短板。`},

{id:'vo2-max',category:'Performance',gene:'PPARGC1A',geneName:'Mitochondrial biogenesis gene (PPARGC1A)',person:{name:'Patrick',age:26},photo:'story_persons/54_felix_vo2.jpg',geneEffect:'顶级线粒体活性',
 headline:`“根据我的基因，我具备<span class="accent">达到高 VO2max 的最佳条件。</span>”`,
 shortStory:`我上一次的体能测试：VO2max 64 ml/kg/min——在我这个年龄属于精英水平。我的 <b>PPARGC1A 基因</b>证实了这一点：我拥有线粒体生成的顶级变异。我的身体把氧气转化为能量的效率高于平均。`},

{id:'verletzung',category:'Performance',gene:'COL5A1',geneName:'Collagen type V alpha 1 (COL5A1)',person:{name:'Lukas',age:44},photo:'story_persons/55_tobias_verletzung.jpg',geneEffect:'肌腱损伤风险升高',
 headline:`“一时疏忽，一次受伤就让我错过了 3 场比赛。<span class="accent">基因检测早就预测到了。</span>”`,
 shortStory:`一次冲刺训练后，跟腱出了问题。停赛 3 周，错过 3 场比赛。我的 <b>COL5A1 基因</b>携带一种风险变异——我的肌腱结构比平均更不耐撕裂。要是早知道，我就会更加小心。`}
];
