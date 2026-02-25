export interface Riddle {
  id: number;
  questionZh: string;
  questionJa: string;
  answerZh: string;
  answerJa: string;
  hintZh: string;
  hintJa: string;
  categoryZh: string;
  categoryJa: string;
}

export const riddles: Riddle[] = [
  {
    id: 1,
    questionZh: "紅口袋，愛吃糖，過年時，人人愛。",
    questionJa: "赤い袋、あめを食べるのが好き、正月にみんな大好き",
    answerZh: "紅包",
    answerJa: "お年玉袋",
    hintZh: "長輩給晚輩的祝福",
    hintJa: "年長者が年少者に贈る祝福",
    categoryZh: "節慶物品",
    categoryJa: "お祭りの品"
  },
  {
    id: 2,
    questionZh: "圓圓腦袋紅通通，掛在門前照路明。",
    questionJa: "赤い丸い頭、門前で道を照らす。",
    answerZh: "燈籠",
    answerJa: "提灯（ランタン）",
    hintZh: "元宵節的主角",
    hintJa: "元宵節の主役",
    categoryZh: "節慶物品",
    categoryJa: "お祭りの品"
  },
  {
    id: 3,
    questionZh: "白白身子圓又圓，跳進鍋裡打個轉，甜甜蜜蜜過元宵。",
    questionJa: "白い丸い体、鍋で回り、甘い元宵。",
    answerZh: "湯圓",
    answerJa: "白玉団子（しらたまだんご）",
    hintZh: "一種甜甜的糯米點心",
    hintJa: "甘いお餅のデザート",
    categoryZh: "節慶食物",
    categoryJa: "お祭りの食べ物"
  },
  {
    id: 4,
    questionZh: "一位老頭子，頭上長鬍子，脫下綠袍子，滿身金珠子。",
    questionJa: "髭のある老人、緑の服を脱ぐと金の玉。",
    answerZh: "玉米",
    answerJa: "トウモロコシ",
    hintZh: "一種常見的農作物",
    hintJa: "よくある農作物",
    categoryZh: "植物",
    categoryJa: "植物"
  },
  {
    id: 5,
    questionZh: "遠看像火，近看像花，雖然不香，人人愛它。",
    questionJa: "遠くは火、近くは花。香らぬが愛される。",
    answerZh: "煙火",
    answerJa: "花火",
    hintZh: "在夜空中綻放",
    hintJa: "夜空に咲く",
    categoryZh: "自然現象",
    categoryJa: "自然現象"
  },
  {
    id: 6,
    questionZh: "身穿綠衣裳，肚裡紅瓤子，生的兒子多，個個黑臉膛。",
    questionJa: "緑の服、中は赤。子は多く顔は黒。",
    answerZh: "西瓜",
    answerJa: "スイカ",
    hintZh: "夏天最受歡迎的水果",
    hintJa: "夏に一番人気の果物",
    categoryZh: "水果",
    categoryJa: "果物"
  },
  {
    id: 7,
    questionZh: "有耳不能聽。",
    questionJa: "耳はあるが、聞こえない。",
    answerZh: "木耳",
    answerJa: "木耳（きくらげ）",
    hintZh: "長在樹上的耳朵",
    hintJa: "木に生える耳",
    categoryZh: "食物",
    categoryJa: "食べ物"
  },
  {
    id: 8,
    questionZh: "身披黃袍，年紀一大把，手段辣。",
    questionJa: "黄色のマントを着て、とても年寄りで、やり方が辛い。",
    answerZh: "薑",
    answerJa: "生姜（ショウガ）",
    hintZh: "越老越辣的調味料",
    hintJa: "古いほど辛い調味料",
    categoryZh: "蔬菜",
    categoryJa: "野菜"
  },
  {
    id: 9,
    questionZh: "拿人鼻子當馬騎。",
    questionJa: "人の鼻を馬として乗る。",
    answerZh: "眼鏡",
    answerJa: "眼鏡（めがね）",
    hintZh: "幫助你看得更清楚",
    hintJa: "よりはっきりと見えるように助けるもの",
    categoryZh: "物品",
    categoryJa: "物品"
  },
  {
    id: 10,
    questionZh: "不能吃不能喝，每天都要嚐一口。",
    questionJa: "食べられないし飲めないが、毎日一口味わう。",
    answerZh: "牙膏",
    answerJa: "歯磨き粉（はみがきこ）",
    hintZh: "刷牙時必備",
    hintJa: "歯磨きの必需品",
    categoryZh: "物品",
    categoryJa: "物品"
  },
  {
    id: 11,
    questionZh: "小小根兒水中泡，兩瓣花兒頭頂開，活體蔬菜人人愛。",
    questionJa: "水中の根、頭に二枚の葉。人気の野菜。",
    answerZh: "豆芽",
    answerJa: "もやし",
    hintZh: "綠豆或黃豆變成的",
    hintJa: "緑豆や大豆から作られる",
    categoryZh: "食物",
    categoryJa: "食べ物"
  },
  {
    id: 12,
    questionZh: "一匹馬兒兩人騎，這邊高來那邊低，雖然馬兒不會跑，兩人騎著笑嘻嘻。",
    questionJa: "二人の馬。一方が高く、他方が低い。",
    answerZh: "蹺蹺板",
    answerJa: "シーソー",
    hintZh: "公園裡的遊樂設施",
    hintJa: "公園にある遊具",
    categoryZh: "物品",
    categoryJa: "物品"
  },
  {
    id: 13,
    questionZh: "一匹馬兒真正好，沒有尾巴沒有腳，不喝水來不吃草，騎上它就滿街跑。",
    questionJa: "足も尾もない馬。街中を走り回る。",
    answerZh: "自行車",
    answerJa: "自転車",
    hintZh: "有兩個輪子的交通工具",
    hintJa: "二つの車輪がある乗り物",
    categoryZh: "物品",
    categoryJa: "物品"
  },
  {
    id: 14,
    questionZh: "一天過去，脫件衣裳，一年過去，全身脫光。",
    questionJa: "一日一枚脱ぎ、一年で裸になる。",
    answerZh: "日曆",
    answerJa: "日めくりカレンダー",
    hintZh: "用來記錄日期的東西",
    hintJa: "日付を記録するもの",
    categoryZh: "物品",
    categoryJa: "物品"
  },
  {
    id: 15,
    questionZh: "一位公公精神好，從小到老不睡覺。身體輕，勁不小，左推右推推不倒。",
    questionJa: "眠らぬ老人。軽く力強く、倒れない。",
    answerZh: "不倒翁",
    answerJa: "起き上がり小法師",
    hintZh: "一種推不倒的玩具",
    hintJa: "倒れないおもちゃ",
    categoryZh: "物品",
    categoryJa: "物品"
  },
  {
    id: 16,
    questionZh: "一物生得巧，地位比人高。戴上御風寒，脫下有禮貌。",
    questionJa: "地位は人より高く、被れば防寒、脱げば礼儀。",
    answerZh: "帽子",
    answerJa: "帽子",
    hintZh: "戴在頭上的東西",
    hintJa: "頭に被るもの",
    categoryZh: "物品",
    categoryJa: "物品"
  },
  {
    id: 17,
    questionZh: "一物參個口，你有我也有，有他不怎樣，無他就現醜。",
    questionJa: "三つの口、誰でも持つ。ないと恥ずかしい。",
    answerZh: "褲子",
    answerJa: "ズボン",
    hintZh: "穿在下半身的衣物",
    hintJa: "下半身に履く衣類",
    categoryZh: "物品",
    categoryJa: "物品"
  },
  {
    id: 18,
    questionZh: "一個大肚皮，生來怪脾氣，不打不做聲，越打越歡喜。",
    questionJa: "大きなお腹。叩けば叩くほど喜ぶ。",
    answerZh: "鼓",
    answerJa: "太鼓",
    hintZh: "一種打擊樂器",
    hintJa: "打楽器の一種",
    categoryZh: "物品",
    categoryJa: "物品"
  },
  {
    id: 19,
    questionZh: "一個老頭，不跑不走；請他吃飯，他卻搖頭。",
    questionJa: "歩かぬ老人。食事を勧めても首を振る。",
    answerZh: "不倒翁",
    answerJa: "起き上がり小法師",
    hintZh: "跟前面出現過的一個東西一樣",
    hintJa: "前に出てきたものと同じです",
    categoryZh: "物品",
    categoryJa: "物品"
  },
  {
    id: 20,
    questionZh: "一隻八寶袋，樣樣都能裝。能裝山和水，還能裝太陽。",
    questionJa: "魔法の袋。山、川、太陽も入る。",
    answerZh: "眼睛",
    answerJa: "目",
    hintZh: "每個人臉上都有兩個",
    hintJa: "みんなの顔に二つあります",
    categoryZh: "器官",
    categoryJa: "器官"
  },
  {
    id: 21,
    questionZh: "一棵小樹五個杈，不長葉子不開花。能寫會算還會畫，勞動創造全靠它。",
    questionJa: "五つの枝の木。書く、計算、描く。",
    answerZh: "手",
    answerJa: "手",
    hintZh: "身體的一部分",
    hintJa: "体の一部",
    categoryZh: "器官",
    categoryJa: "器官"
  },
  {
    id: 22,
    questionZh: "一個黑孩，從不開口，要是開口，掉出舌頭。",
    questionJa: "一人の黒い子供、決して口を開かない。もし口を開けば、舌が落ちてくる。",
    answerZh: "西瓜子",
    answerJa: "スイカの種",
    hintZh: "吃西瓜時會吐出來的東西",
    hintJa: "スイカを食べる時に吐き出すもの",
    categoryZh: "食物",
    categoryJa: "食べ物"
  },
  {
    id: 23,
    questionZh: "畫時圓，寫時方，冬時短，夏時長。",
    questionJa: "描けば丸く、書けば四角。冬は短く夏は長い。",
    answerZh: "日",
    answerJa: "日（太陽）",
    hintZh: "天上的發光體",
    hintJa: "空にある光るもの",
    categoryZh: "自然",
    categoryJa: "自然"
  },
  {
    id: 24,
    questionZh: "一隻小船，無槳無帆，不走水路，只走雲端。",
    questionJa: "櫂も帆もない船。雲の上を通る。",
    answerZh: "月亮",
    answerJa: "月",
    hintZh: "晚上會出現，形狀會變化",
    hintJa: "夜に現れ、形が変わるもの",
    categoryZh: "自然",
    categoryJa: "自然"
  },
  {
    id: 25,
    questionZh: "千條線，萬條線，掉到水裡看不見。",
    questionJa: "千本の糸。水に落ちると消える。",
    answerZh: "雨",
    answerJa: "雨",
    hintZh: "從天上掉下來的水滴",
    hintJa: "空から降ってくる水滴",
    categoryZh: "自然",
    categoryJa: "自然"
  },
  {
    id: 26,
    questionZh: "頭插紅花花毋開，身上羅衣身底來，人人講娾聲頦好，專喊天門漸漸開。",
    questionJa: "赤い花を挿し、絹を纏う。夜明けを告げる。",
    answerZh: "公雞",
    answerJa: "公雞（おんどり）",
    hintZh: "早晨叫你起床的動物",
    hintJa: "朝、あなたを起こしてくれる動物",
    categoryZh: "家禽",
    categoryJa: "家禽"
  },
  {
    id: 27,
    questionZh: "頭那尖筆管，尾仔翹龍船，日時跳東海，夜來喊孤寒。",
    questionJa: "尖った頭、反った尾。昼は水、夜は寒がる。",
    answerZh: "鴨子",
    answerJa: "鴨子（あひる）",
    hintZh: "走路搖搖擺擺的水鳥",
    hintJa: "よちよち歩く水鳥",
    categoryZh: "家禽",
    categoryJa: "家禽"
  },
  {
    id: 28,
    questionZh: "白罐裝紅糟，緊糟緊生毛。",
    questionJa: "白い缶に赤い酒粕。温めると毛が生える。",
    answerZh: "孵蛋",
    answerJa: "孵卵（ふらん）",
    hintZh: "小雞出生的過程",
    hintJa: "ひよこが生まれる過程",
    categoryZh: "生命現象",
    categoryJa: "生命現象"
  },
  {
    id: 29,
    questionZh: "兩腳打晃槓，打鼓入間房，鐵鎚大棍打毋到，雙手一拍見閻王。",
    questionJa: "ふらふら二本足。叩けばおしまい。",
    answerZh: "蚊子",
    answerJa: "蚊子（か）",
    hintZh: "夏天會吸血的小昆蟲",
    hintJa: "夏に血を吸う小さな昆虫",
    categoryZh: "昆蟲",
    categoryJa: "昆虫"
  },
  {
    id: 30,
    questionZh: "細細水肚企，大了半天飛。",
    questionJa: "幼い頃は水、成長すると空を飛ぶ。",
    answerZh: "蚊子",
    answerJa: "蚊子（か）",
    hintZh: "幼蟲叫孑孓",
    hintJa: "幼虫はボウフラと呼ばれます",
    categoryZh: "昆蟲",
    categoryJa: "昆虫"
  },
  {
    id: 31,
    questionZh: "半天一條橋，中央八卦寮，神仙毋敢過，八仙佇該搖。",
    questionJa: "空中の橋、中央に八卦。虫が揺れる。",
    answerZh: "蜘蛛",
    answerJa: "蜘蛛（くも）",
    hintZh: "會結網捕蟲的動物",
    hintJa: "網を張って虫を捕まえる動物",
    categoryZh: "動物",
    categoryJa: "動物"
  },
  {
    id: 32,
    questionZh: "頭那四四方，尾仔圓叮叮；一日行三道，一夜企到光。",
    questionJa: "四角い頭、丸い尾。一日三回使う。",
    answerZh: "筷子",
    answerJa: "筷子（はし）",
    hintZh: "吃飯時用的餐具",
    hintJa: "食事の時に使う道具",
    categoryZh: "用具",
    categoryJa: "用具"
  },
  {
    id: 33,
    questionZh: "上樹毋怕高，下樹毋怕跌；拔無毛，㓾無血。",
    questionJa: "高さを恐れぬ。殺しても血は出ない。",
    answerZh: "螞蟻",
    answerJa: "螞蟻（あり）",
    hintZh: "勤勞的小昆蟲",
    hintJa: "働き者の小さな昆虫",
    categoryZh: "昆蟲",
    categoryJa: "昆虫"
  },
  {
    id: 34,
    questionZh: "銅鍋煮麵線，緊煮緊毋見。",
    questionJa: "銅の鍋の麺。煮るほど消える。",
    answerZh: "蠟燭",
    answerJa: "蠟燭（ろうそく）",
    hintZh: "燃燒自己照亮別人",
    hintJa: "自分を燃やして周りを照らすもの",
    categoryZh: "用具",
    categoryJa: "用具"
  },
  {
    id: 35,
    questionZh: "爺仔著青衫，倈仔著黃襖；黃襖脫啊忒，兩子爺般般老。",
    questionJa: "父は青、子は黄。脱げば父と同じ姿。",
    answerZh: "竹筍",
    answerJa: "竹筍（たけのこ）",
    hintZh: "長大後會變成竹子",
    hintJa: "大きくなると竹になります",
    categoryZh: "植物",
    categoryJa: "植物"
  },
  {
    id: 36,
    questionZh: "人人講娾兩公婆，自從毋識共下坐；佢嫌娾介皮恁皺，娾嫌佢介鬚恁多。",
    questionJa: "夫婦だが座らぬ。一方は皺、一方は髭。",
    answerZh: "蝦子與蟾蜍",
    answerJa: "蝦子と蟾蜍（えびとひきがえる）",
    hintZh: "一種在水裡，一種在陸地",
    hintJa: "一方は水の中に、もう一方は陸にいます",
    categoryZh: "動物",
    categoryJa: "動物"
  },
  {
    id: 37,
    questionZh: "小小針恁細，緊大緊婆娑；老了腰骨痛，因為子孫多。",
    questionJa: "針のように細く、実ると腰が曲がる。",
    answerZh: "稻子",
    answerJa: "稻子（いね）",
    hintZh: "我們每天吃的主食",
    hintJa: "私たちが毎日食べる主食",
    categoryZh: "植物",
    categoryJa: "植物"
  },
  {
    id: 38,
    questionZh: "茄色个，長長一節ㄧ節个，食个時節要吐渣，係麼个水果？",
    questionJa: "紫の節。カスを吐く果物は何？",
    answerZh: "甘蔗",
    answerJa: "甘蔗（さとうきび）",
    hintZh: "可以用來製糖",
    hintJa: "砂糖の原料になります",
    categoryZh: "水果",
    categoryJa: "果物"
  },
  {
    id: 39,
    questionZh: "大大圓圓个，皮青青，切開來裡背紅紅个，還有當多烏烏个細目珠，係麼个水果？",
    questionJa: "丸く青い皮。中は赤く黒い種。",
    answerZh: "西瓜",
    answerJa: "西瓜（すいか）",
    hintZh: "夏天最消暑的水果",
    hintJa: "夏にぴったりの果物",
    categoryZh: "水果",
    categoryJa: "果物"
  },
  {
    id: 40,
    questionZh: "彎彎个、黃黃个、鼻起來香香个，係麼个水果？",
    questionJa: "曲がって黄色い。良い香りの果物。",
    answerZh: "香蕉",
    answerJa: "香蕉（バナナ）",
    hintZh: "猴子最愛吃的水果",
    hintJa: "猿が大好きな果物",
    categoryZh: "水果",
    categoryJa: "果物"
  },
  {
    id: 41,
    questionZh: "姊妹雙雙一般高，同出同入共商量，冷冷燒燒共下過，酸甜苦辣共下嚐。",
    questionJa: "背の同じ姉妹。共に味わい、共に過ごす。",
    answerZh: "筷子",
    answerJa: "箸（はし）",
    hintZh: "吃飯時必備的一對",
    hintJa: "食事に欠かせない一対のもの",
    categoryZh: "用具",
    categoryJa: "用具"
  },
  {
    id: 42,
    questionZh: "初一啟程，十六到京，烏天暗地，好得有星。",
    questionJa: "一日に出発、十六日に到着。星がある。",
    answerZh: "秤子",
    answerJa: "秤（はかり）",
    hintZh: "用來稱重量的工具",
    hintJa: "重さを量る道具",
    categoryZh: "用具",
    categoryJa: "用具"
  },
  {
    id: 43,
    questionZh: "生在大樹下，死在大人家，羅索仔穿鼻，背囊上繡花。",
    questionJa: "大樹で生まれ、鼻に縄、背に花。",
    answerZh: "量仔（大秤）",
    answerJa: "大きな秤（はかり）",
    hintZh: "體積較大的稱重工具",
    hintJa: "大型の重さを量る道具",
    categoryZh: "用具",
    categoryJa: "用具"
  },
  {
    id: 44,
    questionZh: "四四角角一張檯，年年讀書佢也來，佢讀三年唔識字，俺讀三年中秀才。",
    questionJa: "四角い台。三年間共に学び、彼は不識。",
    answerZh: "書桌",
    answerJa: "机（つくえ）",
    hintZh: "讀書寫字的地方",
    hintJa: "勉強や書き物をする場所",
    categoryZh: "家具",
    categoryJa: "家具"
  },
  {
    id: 45,
    questionZh: "六隻腳，晃槓晃，吹簫打鼓入間房。",
    questionJa: "六本足でふらふら。部屋で鳴く。",
    answerZh: "蚊子",
    answerJa: "蚊（か）",
    hintZh: "嗡嗡叫的吸血昆蟲",
    hintJa: "ブンブン鳴く吸血昆虫",
    categoryZh: "昆蟲",
    categoryJa: "昆虫"
  },
  {
    id: 46,
    questionZh: "頭擺做過好漢來，唔知今仰恁哀哉，人客來食俺無份，人客走吔俺正來。",
    questionJa: "客が去った後、私の出番が来る。",
    answerZh: "抹布",
    answerJa: "雑巾（ぞうきん）",
    hintZh: "用來擦桌子的布",
    hintJa: "テーブルを拭くための布",
    categoryZh: "用具",
    categoryJa: "用具"
  },
  {
    id: 47,
    questionZh: "一間屋仔三個門，氐背淨歇半個人。",
    questionJa: "三つの門がある家。半分の人が住む。",
    answerZh: "褲子",
    answerJa: "ズボン",
    hintZh: "穿在下半身的衣服",
    hintJa: "下半身に履く衣類",
    categoryZh: "衣物",
    categoryJa: "衣類"
  },
  {
    id: 48,
    questionZh: "樹圓身，鐵肚子，日日夜夜喊艱苦。",
    questionJa: "木の体、鉄の腹。昼夜叫ぶ。",
    answerZh: "時鐘",
    answerJa: "時計（とけい）",
    hintZh: "滴答滴答走不停",
    hintJa: "チクタクと動き続けるもの",
    categoryZh: "用具",
    categoryJa: "用具"
  },
  {
    id: 49,
    questionZh: "十指尖尖肚裡空，有皮無骨愛過冬，唔驚寒冷唔驚風，十冬腊月逞英雄。",
    questionJa: "十本の指は空。冬を愛し寒さを恐れぬ。",
    answerZh: "手套",
    answerJa: "手袋（てぶくろ）",
    hintZh: "冬天保暖手部用的",
    hintJa: "冬に手を温めるためのもの",
    categoryZh: "衣物",
    categoryJa: "衣類"
  },
  {
    id: 50,
    questionZh: "綾羅綢緞身上著，頭插鮮花雄邦邦，企在牆頭喊一聲，滿天星斗全下班。",
    questionJa: "錦を纏い、花を挿す。叫べば星が消える。",
    answerZh: "公雞",
    answerJa: "雄鶏（おんどり）",
    hintZh: "黎明時分啼叫的家禽",
    hintJa: "夜明けに鳴く家禽",
    categoryZh: "家禽",
    categoryJa: "家禽"
  }
];
