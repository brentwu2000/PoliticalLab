import type { EventDataPackage, ArgumentNode, RoundData, MirrorPattern, ExperimentSetupV3 } from '../types/experiment';

export const initialEventDataPackage: EventDataPackage = {
  title: "中聯毒油事件與食安責任歸屬爭議案",
  agentAName: "Agent A",
  agentBName: "Agent B",
  agentAParty: "民進黨",
  agentBParty: "國民黨",
  timeline: [
    { time: "2026年5月初", title: "台糖自主檢驗退貨中聯粗油", description: "國營事業台糖採購中聯脫膠原油（粗油），自主檢驗發現第一級致癌物苯駢芘（BaP）超標，隨即拒收退貨，惟未通報主管機關。" },
    { time: "2026年6月25日", title: "地方衛生局檢出成品毒油超標", description: "衛生局例行抽驗市售中聯大豆沙拉油，檢出苯駢芘高達 8.1 μg/kg（國家標準限量為 2.0 μg/kg），超標逾 4 倍。" },
    { time: "2026年6月27日", title: "食藥署專家會議擬訂「20%門檻」下架決議", description: "食藥署召開專家諮詢會議，會中一度研擬「問題油品混添比例達 20% 以上者始預防性下架」決議，訊息傳出後引發基層衛生局、專家與輿論強烈質疑。" },
    { time: "2026年6月28日", title: "衛福部緊急撤回門檻並宣告全面停工下架", description: "衛福部緊急開會修正決議，廢除 20% 混油下架門檻，命令中聯問題生產線勒令停工，全台逾 250 家下游食品廠、餐廳與團膳預防性下架。" },
    { time: "2026年7月初", title: "中檢搜索聲押董總與行政開罰 1.65 億", description: "台中地檢署搜索中聯油脂，對董事長、總經理聲押交保；主管機關依《食安法》重罰創紀錄之 1 億 6,520 萬元，中聯並銷毀全部 19 批合格庫存。" },
    { time: "2026年7月12日", title: "朝野爆發「台糖蓋牌與護航」政治爭議", description: "媒體揭露台糖 5 月即驗出超標卻私下退貨未通報。在野黨質疑國營事業蓋牌致毒油流竄，中央部會澄清粗油半成品依法無通報義務。" },
    { time: "2026年7月15日", title: "行政院食安辦召開跨部會會議釐清權責", description: "行政院食安辦召開專案會議，確認現行法規漏洞，決議推動《食安法》專案修法將高風險原料與半成品檢驗異常納入強制通報。" },
    { time: "2026年7月25日", title: "行政院會通過《食安法》修正草案", description: "行政院會正式通過《食品安全衛生管理法》修正草案，函送立法院審議，強制擴大原料與半成品通報義務並提高隱匿罰則。" }
  ],
  involvedParties: [
    { name: "中聯油脂經營團隊", title: "問題沙拉油製造商", notes: "更改黃豆焙烤溫控致致癌物超標，遭地檢署偵辦與重罰" },
    { name: "衛福部長 / 食藥署長", title: "中央食品安全主管機關", notes: "拍板預防性下架、停工裁罰與專案修法提案" },
    { name: "經濟部長 / 台糖董事長", title: "國營事業主管機關與負責人", notes: "澄清 5 月驗收退貨依法無通報義務，面對在野黨酬庸與蓋牌質疑" },
    { name: "國民黨 / 民眾黨黨團", title: "立法院在野陣營", notes: "主攻台糖蓋牌隱匿、衛福部護航及政務官政治責任" },
    { name: "民進黨立法院黨團", title: "立法院執政陣營", notes: "強調業者私利違法本質、台糖善盡買方品管與積極專案修法" }
  ],
  relevantLaws: [
    { law: "《食品安全衛生管理法》第 15 條第 1 項", text: "食品含有毒性或有害人體健康物質不得製造販賣" },
    { law: "《食品安全衛生管理法》第 7 條第 5 項", text: "食品業者發現產品有危害衛生安全之虞應停止販賣並通報" },
    { law: "《食品中污染物質及毒素衛生標準》", text: "食用油脂中苯駢芘（Benzo[a]pyrene）限量標準 2.0 μg/kg" },
    { law: "《食品安全衛生管理法》第 44 條與第 49 條", text: "行政罰鍰最高額度與販賣有害健康食品之刑事責任" }
  ],
  partyAStance: [
    "本案核心在於黑心私營業者違規變更黃豆烘焙製程製造毒油，中央主管機關已祭出史上最高 1.65 億重罰與停工。",
    "國營事業台糖在驗收階段自主檢測發現瑕疵即予以拒收退貨，切斷毒油進入台糖產品，展現自主品管效能。",
    "粗油屬於未精煉之原料半成品，現行《食安法》通報標的為上市產品，台糖依法無通報義務，非刻意蓋牌隱匿。",
    "行政院正面回應法規灰色地帶，迅速啟動《食安法》專案修法將原料納入通報，展現負責任的治理態度。"
  ],
  partyBStance: [
    "台糖早在 5 月即驗出第一級致癌物超標，卻私下退貨蓋牌一個月，導致毒油持續流向全台 250 家民營業者與學校團膳。",
    "衛福部與經濟部事後以「粗油非產品」為台糖辯護，硬套法律漏洞，係典型的行政黑箱與官官相護。",
    "食藥署初審下架標準混亂慢半拍，且中央邊境查驗與源頭工廠稽查失能，讓致癌毒油流竄市面。",
    "國營事業高層人事充斥政治酬庸缺乏食安專業，衛福部長與經濟部長應向全民道歉並負起政治責任。"
  ],
  unverifiedItems: [
    "⚠️【尚未確認】：中聯油脂更改巴西黃豆焙烤溫控之內部決策會議紀錄與是否明知故犯。",
    "⚠️【尚未確認】：台糖 5 月退貨時內部會議是否曾討論向衛福部通報之簽呈記錄。",
    "⚠️【尚未確認】：立法院修正《食安法》針對原料強制通報罰則之朝野協商最終條文。"
  ]
};

export const setupV3: ExperimentSetupV3 = {
  coreProposition: "中聯毒油事件爆發後，行政機關與國營事業台糖是否已善盡監管與通報責任？相關首長是否應負政治責任？",
  agentAGoal: "證明責任在黑心業者私利違法，台糖依法退貨善盡品管，主管機關迅速重罰並專案修法彌補漏洞。",
  agentBGoal: "證明台糖蓋牌隱匿致毒油擴散，中央部會護航黑箱甩鍋，邊境與源頭監管失靈，政務官應負政治責任下台。",
  issueBoundaries: [
    { id: "IB-01", title: "業者刑事違法 vs 行政監管責任邊界", description: "黑心業者違規製造與政府源頭抽查、邊境邊檢失能之權責劃分。" },
    { id: "IB-02", title: "國營事業買方退貨 vs 公共預警通報義務", description: "企業自主驗收退貨是否具備向衛生主管機關通報之法定或道德義務。" },
    { id: "IB-03", title: "現行食安法第7條「產品」法律解釋範圍", description: "粗油半成品是否適用《食安法》第7條強制通報規定。" },
    { id: "IB-04", title: "政務官政治責任 vs 制度漏洞修法法制化", description: "食安事件中政務首長下台道歉與事後修法補強之政治責任取捨。" }
  ],
  burdenQuestions: [
    "台糖 5 月退貨未通報，究竟是依法履行買方退貨，還是損及公共利益之蓋牌隱匿？",
    "中央主管機關在邊境查驗與源頭稽查上是否存在嚴重疏失？",
    "「原料非產品無通報義務」是合理解釋現行法規，還是事後護航甩鍋？"
  ]
};

export const initialArgumentNodesA: ArgumentNode[] = [
  {
    id: "A-01",
    party: "A",
    title: "黑心業者私利改換烘烤製程係污染違法唯一源頭",
    category: "事實型" as any,
    description: "苯駢芘超標源於中聯油脂擅改原料焙烤溫控失當，屬私營企業違法，行政機關第一時間勒令停工並重罰1.65億元。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "食藥署與台中地檢署中聯毒油專案調查新聞稿"
  },
  {
    id: "A-02",
    party: "A",
    title: "國營事業台糖依法退貨拒收已善盡買方自主驗收責任",
    category: "程序理由",
    description: "台糖採購粗油檢測不合格即執行商業退貨拒收，切斷危害進入台糖供應鏈與製品，發揮品管把關效能。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "台糖公司 2026 年 7 月原料驗收說明聲明"
  },
  {
    id: "A-03",
    party: "A",
    title: "粗油半成品依法非成品通報標的，無法理隱匿蓋牌問題",
    category: "法律論證",
    description: "現行《食安法》第7條強制通報標的為「上市食用產品」，原料半成品檢驗瑕疵執行退貨符合現行法規。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "衛福部與經濟部《食安法》第7條法令適用解釋"
  },
  {
    id: "A-04",
    party: "A",
    title: "主管機關全面動員預防性下架並銷毀庫存控管風險",
    category: "法律論證",
    description: "食藥署第一時間要求250家下游預防性下架，中聯並銷毀全部19批合格油品以求最高標準安全。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "中央流行疫情與食安應變小組處置報告"
  },
  {
    id: "A-05",
    party: "A",
    title: "執政團隊迅速啟動食安法專案修法彌補原料通報漏洞",
    category: "程序理由",
    description: "行政院正面面對法令灰色地帶，提案修法擴大原料與半成品異常通報義務，展現制度改革責任。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "行政院院會《食品安全衛生管理法》修正草案"
  },
  {
    id: "A-06",
    party: "A",
    title: "在野黨將業者刑事違法政治化轉嫁國營事業抹黑",
    category: "翻舊帳/歷史案例",
    description: "在野黨無視業者違法本質，刻意將商業買賣退貨政治化無限上綱為政黨政治責任與官官相護。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "民進黨立法院黨團記者會說明"
  }
];

export const initialArgumentNodesB: ArgumentNode[] = [
  {
    id: "B-01",
    party: "B",
    title: "台糖5月抓包超標卻蓋牌一個月致毒油流向全台250家業者",
    category: "政治責任",
    description: "國營事業早於5月發現一級致癌物卻私下退貨未警示衛福部，導致毒油持續販售至下游廠商與學校團膳。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "立法院國民黨團中聯毒油檢討記者會"
  },
  {
    id: "B-02",
    party: "B",
    title: "中央部會事後發明「原料免通報」法律漏洞黑箱甩鍋",
    category: "法律論證",
    description: "衛福部與經濟部事後以「粗油非產品」為台糖狡辯護航，破壞政府食安預警信任，係典型官官相護。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "立法院衛環委員會質詢紀錄"
  },
  {
    id: "B-03",
    party: "B",
    title: "食藥署初審下架標準混亂應變慢半拍引發全民恐慌",
    category: "程序理由",
    description: "食藥署一度研擬20%混油下架門檻引發基層混亂，事後預防性下架慢半拍，顯示中央食安監管失靈。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "台灣食品技師協會與各界評論"
  },
  {
    id: "B-04",
    party: "B",
    title: "國營事業高層充斥政治酬庸缺乏食安與風險管理專業",
    category: "道德責任",
    description: "台糖高層人事任用優先政治背景而非專業資歷，導致重大致癌風險事件缺乏公共安全意識與通報警覺。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "立法院經濟委員會審查紀錄"
  },
  {
    id: "B-05",
    party: "B",
    title: "中央邊境查驗與國內食用油源頭定期抽稽查形同虛設",
    category: "程序理由",
    description: "苯駢芘超標高達4倍卻由國營買方與民間業者先行發現，中央源頭邊境與工廠定期抽驗失能。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "監察院自動調查申請案"
  },
  {
    id: "B-06",
    party: "B",
    title: "衛福部長與經濟部長應向國人正式道歉並負起政治責任",
    category: "政治責任",
    description: "致癌毒油波及全台廣泛食品鏈，執政黨政務官迴避政治責任，口頭維護官位對受害消費者缺乏交代。",
    status: "🟢 有效",
    usedCount: 0,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "在野黨聯合聲明與民意調查數據"
  }
];

export const mockRounds: RoundData[] = [
  {
    roundNumber: 1,
    agentA: {
      strategy: "主攻私營黑心業者違規源頭，強調行政機關第一時間重罰 1.65 億與勒令停工",
      argId: "A-01",
      argTitle: "黑心業者私利改換烘烤製程係污染違法唯一源頭",
      content: "本案致癌物質苯駢芘超標高達 8.1 μg/kg，其源頭完全是中聯油脂私自變更巴西黃豆之焙烤溫控製程失當所致。主管機關衛福部與台中地檢署在接獲抽驗異常後，第一時間即勒令該生產線停工、聲押相關高層，並依《食安法》重罰創紀錄之 1 億 6,520 萬元。執政團隊展現零容忍執法態度，在野黨不應模糊焦點、掩護黑心業者！",
      citation: "食藥署與台中地檢署專案調查新聞稿",
      closingQuestion: "黑心業者擅自變更製程造成有害物質污染，主管機關即刻停工重罰，何來縱容護航？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    agentB: {
      strategy: "反扣國營事業台糖早在 5 月即驗出超標卻蓋牌私下退貨，致毒油擴散全台 250 家業者",
      argId: "B-01",
      argTitle: "台糖5月抓包超標卻蓋牌一個月致毒油流向全台250家業者",
      content: "民進黨政府切勿甩鍋給業者！真相是國營事業台糖早在 5 月初的自主檢驗中，就已經抓包這批粗油苯駢芘嚴重超標，但台糖竟然「隻字未報」，私下退貨了事！如果台糖第一時間通報衛福部，毒油怎會持續在市面上狂銷一個多月、流向全台超過 250 家食品廠、連鎖餐廳與學校團膳？國營事業蓋牌隱匿，正是釀成全台食安危機的最大破口！",
      citation: "立法院國民黨團中聯毒油檢討記者會",
      closingQuestion: "台糖 5 月就知道是致癌毒油卻蓋牌退貨，導致全台民眾吃了一個月毒油，這難道不是國營事業的重大行政破口？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-01",
      newArgB: "B-01",
      strategyA: "奠定業者違法源頭論述，突顯主管機關重罰正當性",
      strategyB: "直擊國營事業台糖 5 月退貨未通報時間點，建立「蓋牌致毒油擴散」論述",
      legalRatingA: "🟢",
      legalRatingB: "🟢",
      factRatingA: "🟢",
      factRatingB: "🟢",
      conceptShiftA: 0,
      conceptShiftB: 0,
      whataboutismA: 0,
      whataboutismB: 0,
      standardShiftA: 0,
      standardShiftB: 0,
      doubleStandardA: 0,
      doubleStandardB: 0,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 0,
      attackScoreA: 8,
      attackScoreB: 9,
      defenseScoreA: 7,
      defenseScoreB: 8,
      roundWinner: "🔴 Agent B 本回合優勢",
      winnerReason: "Agent B 精準鎖定台糖 5 月即發現超標卻未通報的時間差，有效轉移焦點至政府國營事業管理責任，在論證打擊力上佔得先機。"
    },
    resourceA: 95,
    resourceB: 95,
    argTreeSnapshotA: initialArgumentNodesA.map(node => node.id === 'A-01' ? { ...node, usedCount: 1, lastUpdatedRound: 1 } : node),
    argTreeSnapshotB: initialArgumentNodesB.map(node => node.id === 'B-01' ? { ...node, usedCount: 1, lastUpdatedRound: 1 } : node)
  },
  {
    roundNumber: 2,
    agentA: {
      strategy: "以《食安法》第 7 條「產品 vs 原料半成品」法理說明台糖依法退貨無隱匿",
      argId: "A-03",
      argTitle: "粗油半成品依法非成品通報標的，無法理隱匿蓋牌問題",
      content: "在野黨對台糖的指控完全是法理無知與政治抹黑！依據現行《食安法》第 7 條第 5 項規定，業者強制通報義務係指「發現上市產品有危害衛生安全之虞」。台糖採購的是「脫膠原油」（粗油半成品），必須經過精精煉加工才能成為食用油。台糖在驗收階段發現粗油不合格，依法執行商業退貨拒換，完全符合現行法規與商業品管常規！粗油非上市產品，何來法律上的隱匿蓋牌？",
      citation: "衛福部與經濟部《食安法》第7條法令適用解釋",
      closingQuestion: "台糖在原料驗收門口就將不合格粗油擋下退貨，依法無通報義務，硬咬蓋牌豈非扭曲法條？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    agentB: {
      strategy: "批判中央部會拿「原料免通報」硬套法律漏洞，發揮官官相護與黑箱甩鍋戰術",
      argId: "B-02",
      argTitle: "中央部會事後發明「原料免通報」法律漏洞黑箱甩鍋",
      content: "衛福部與經濟部居然好意思拿「粗油是原料不是產品」來幫台糖洗白？這正是最可恥的硬套法律漏洞與黑箱甩鍋！台糖是百分之百的國營事業，享有國家資源與全民信任。台糖檢驗人員明明知道中聯粗油煉出來的油就是要給全民吃的，驗出致癌物卻只顧自己退貨保命，置全台 250 家民營業者與廣大消費者的健康於不顧！拿文字遊戲推卸國營事業公共責任，根本就是官官相護！",
      citation: "立法院衛環委員會質詢紀錄",
      closingQuestion: "國營事業驗出第一級致癌物卻以『粗油非產品』推諉責任，政府對食安風險的預警意識難道只剩玩法護航？",
      usedWhataboutism: false,
      usedDigUpHistory: true
    },
    judge: {
      newArgA: "A-03",
      newArgB: "B-02",
      strategyA: "運用嚴謹法律條文界定「產品 vs 半成品」通報要件",
      strategyB: "打擊「文字遊戲與官官相護」，將法律解釋上升為國營事業道德與公共信任危機",
      legalRatingA: "🟢",
      legalRatingB: "🟡",
      factRatingA: "🟢",
      factRatingB: "🟢",
      conceptShiftA: 0,
      conceptShiftB: 1,
      whataboutismA: 0,
      whataboutismB: 0,
      standardShiftA: 0,
      standardShiftB: 1,
      doubleStandardA: 0,
      doubleStandardB: 0,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 1,
      attackScoreA: 8,
      attackScoreB: 8,
      defenseScoreA: 8,
      defenseScoreB: 7,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "Agent A 依據《食安法》第 7 條之明確法文進行合法性防禦，邏輯嚴密；Agent B 雖成功喚起公眾情理共鳴，但在純法律要件攻防上略遜一籌。"
    },
    resourceA: 90,
    resourceB: 88,
    argTreeSnapshotA: initialArgumentNodesA.map(node => {
      if (node.id === 'A-01') return { ...node, usedCount: 1 };
      if (node.id === 'A-03') return { ...node, usedCount: 1, lastUpdatedRound: 2 };
      return node;
    }),
    argTreeSnapshotB: initialArgumentNodesB.map(node => {
      if (node.id === 'B-01') return { ...node, usedCount: 1 };
      if (node.id === 'B-02') return { ...node, usedCount: 1, lastUpdatedRound: 2 };
      return node;
    })
  },
  {
    roundNumber: 3,
    agentA: {
      strategy: "強調台糖自主驗收退貨切斷風險，發揮買方品管把關之實質效果",
      argId: "A-02",
      argTitle: "國營事業台糖依法退貨拒收已善盡買方自主驗收責任",
      content: "請國民黨不要繼續顛倒黑白！台糖作為買方，建立嚴格的進貨抽驗機制，在粗油進廠前就驗出苯駢芘超標並立即拒收，這恰恰證明台糖的品管機制運作有效，成功保護了台糖的所有終端產品完全沒有沾染到任何問題毒油！台糖發揮了第一道門禁把關作用，何來損害大眾？在野黨把「自主把關成功退貨」歪曲成「蓋牌罪犯」，完全是在打擊企業落實自主品管的積極性！",
      citation: "台糖公司 2026 年 7 月原料驗收說明聲明",
      closingQuestion: "台糖嚴格驗收將毒油擋在門外，沒有任何一滴毒油流向台糖產品，這不是善盡自主品管責任是什麼？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    agentB: {
      strategy: "直指中央邊境查驗與國內工廠源頭定期抽稽查形同虛設，系統性監管失能",
      argId: "B-05",
      argTitle: "中央邊境查驗與國內食用油源頭定期抽稽查形同虛設",
      content: "台糖自誇把關，更凸顯了中央食藥署的全面失能！苯駢芘超標高達 4 倍、影響全台數百萬人的重大食安事件，竟然不是衛福部邊境查驗發現的，也不是食藥署對油廠例行稽查查到的，而是靠民間業者買方退貨和地方衛生局隨機抽驗才爆開！請問衛福部每年編列數十億食安稽查預算，邊境與工廠源頭監管卻形同虛設，讓致癌油品在全台流竄數月，中央主管機關難道不用道歉？",
      citation: "監察院自動調查申請案",
      closingQuestion: "致癌物質超標 4 倍卻靠民間退貨才揭發，衛福部源頭監管與邊境查驗不是形同虛設嗎？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-02",
      newArgB: "B-05",
      strategyA: "鞏固台糖「成功攔截毒油進入自身體系」之實質把關成果",
      strategyB: "升級戰線至「中央食安邊境與源頭稽查機制總崩潰」",
      legalRatingA: "🟢",
      legalRatingB: "🟢",
      factRatingA: "🟢",
      factRatingB: "🟢",
      conceptShiftA: 0,
      conceptShiftB: 0,
      whataboutismA: 0,
      whataboutismB: 0,
      standardShiftA: 0,
      standardShiftB: 0,
      doubleStandardA: 0,
      doubleStandardB: 0,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 0,
      attackScoreA: 7,
      attackScoreB: 9,
      defenseScoreA: 7,
      defenseScoreB: 8,
      roundWinner: "🔴 Agent B 本回合優勢",
      winnerReason: "Agent B 避開了台糖個別退貨的爭點，轉而攻擊中央食藥署邊境與源頭抽查失能，打中政府體制監管漏洞，攻勢十分凌厲。"
    },
    resourceA: 82,
    resourceB: 82,
    argTreeSnapshotA: initialArgumentNodesA.map(node => {
      if (node.id === 'A-01' || node.id === 'A-03') return { ...node, usedCount: 1 };
      if (node.id === 'A-02') return { ...node, usedCount: 1, lastUpdatedRound: 3 };
      return node;
    }),
    argTreeSnapshotB: initialArgumentNodesB.map(node => {
      if (node.id === 'B-01' || node.id === 'B-02') return { ...node, usedCount: 1 };
      if (node.id === 'B-05') return { ...node, usedCount: 1, lastUpdatedRound: 3 };
      return node;
    })
  },
  {
    roundNumber: 4,
    agentA: {
      strategy: "舉出行政院迅速啟動《食安法》專案修法，擴大原料通報，展現負責任態度",
      argId: "A-05",
      argTitle: "執政團隊迅速啟動食安法專案修法彌補原料通報漏洞",
      content: "面對食安議題，民進黨政府絕不迴避問題，而是正面解決問題！針對現行《食安法》第 7 條對「原料與半成品」通報要件的不夠明確，行政院會已在第一時間通過《食安法》修正草案，正式將高風險原料與半成品自主檢驗異常納入強制通報範圍，並提高隱匿不報之罰則。執政團隊用具體行動修法補強漏洞，相比於在野黨只會政治噴水、抹黑國營事業，誰才是真正守護國人食安的政黨？",
      citation: "行政院院會《食品安全衛生管理法》修正草案",
      closingQuestion: "執政團隊第一時間啟動專案修法填補原料通報灰色地帶，這正是負責任的法治治理，在野黨為何還要政治炒作？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    agentB: {
      strategy: "攻擊國營事業高層充斥政治酬庸、缺乏食安專業，導致風險意識麻木",
      argId: "B-04",
      argTitle: "國營事業高層充斥政治酬庸缺乏食安與風險管理專業",
      content: "修法只是民進黨事後遮羞的廢紙！為何國營事業會缺乏通報警覺？根本原因就是民進黨把國營事業當成派系酬庸的肥缺！台糖董事長與高層高官充斥著沒有食安背景、沒有產業管理經驗的政治派系人士，只會看政治風向、多一事不如少一事！如果台糖高層具備基本食安風險意識，怎會在發現第一級致癌物時視而不見？這種政治酬庸制度如果不拔除，修再多法也是放任派系害慘全民！",
      citation: "立法院經濟委員會審查紀錄",
      closingQuestion: "國營事業高層派系酬庸、缺乏食安專業，導致面對致癌毒油麻木不仁，民進黨不用檢討派系酬庸文化嗎？",
      usedWhataboutism: false,
      usedDigUpHistory: true
    },
    judge: {
      newArgA: "A-05",
      newArgB: "B-04",
      strategyA: "突顯行政院迅速專案修法具體績效，訴諸法治建設",
      strategyB: "切入「國營事業政治酬庸」軟肋，質疑執政黨派系任用損及專業治理",
      legalRatingA: "🟢",
      legalRatingB: "🟡",
      factRatingA: "🟢",
      factRatingB: "🟡",
      conceptShiftA: 0,
      conceptShiftB: 1,
      whataboutismA: 0,
      whataboutismB: 1,
      standardShiftA: 0,
      standardShiftB: 1,
      doubleStandardA: 0,
      doubleStandardB: 0,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 1,
      attackScoreA: 8,
      attackScoreB: 8,
      defenseScoreA: 7,
      defenseScoreB: 7,
      roundWinner: "⚪ 雙方相當",
      winnerReason: "Agent A 提出專案修法展現治理作為，制度面得分；Agent B 攻擊派系酬庸直擊政治焦點，雙方論點互有牽制，打成平手。"
    },
    resourceA: 75,
    resourceB: 74,
    argTreeSnapshotA: initialArgumentNodesA.map(node => {
      if (node.id === 'A-01' || node.id === 'A-02' || node.id === 'A-03') return { ...node, usedCount: 1 };
      if (node.id === 'A-05') return { ...node, usedCount: 1, lastUpdatedRound: 4 };
      return node;
    }),
    argTreeSnapshotB: initialArgumentNodesB.map(node => {
      if (node.id === 'B-01' || node.id === 'B-02' || node.id === 'B-05') return { ...node, usedCount: 1 };
      if (node.id === 'B-04') return { ...node, usedCount: 1, lastUpdatedRound: 4 };
      return node;
    })
  },
  {
    roundNumber: 5,
    agentA: {
      strategy: "強調主管機關全面預防性下架與中聯銷毀全部 19 批庫存，風險已完全控管",
      argId: "A-04",
      argTitle: "主管機關全面動員預防性下架並銷毀庫存控管風險",
      content: "民進黨政府在確定市售成品異常後，採取了歷來最嚴格的預防性控管措施！食藥署不僅要求所有使用了問題沙拉油的 250 家下游業者全面預防性下架，中聯油脂更將庫存及先前檢驗合格的 19 批油品全數主動銷毀，絕不讓任何一滴有疑慮的油品流向市場！從發現問題到風險阻斷，政府與專業衛生團隊展現了最高標準的應變效率，公眾食安風險早已獲得全面控制！",
      citation: "中央流行疫情與食安應變小組處置報告",
      closingQuestion: "主管機關全面動員預防性下架並銷毀全部庫存，徹底阻斷風險，在野黨為何無視行政團隊的辛勞防線？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    agentB: {
      strategy: "批食藥署初審預防下架門檻混亂（20%門檻爭議）引發恐慌，要求政務官負政治責任",
      argId: "B-03",
      argTitle: "食藥署初審下架標準混亂應變慢半拍引發全民恐慌",
      content: "請民進黨不要自誇應變效率！事件爆發最初三天，食藥署的下架標準一日三變，甚至傳出要以「問題油添加比例 20%」作為是否下架的門檻，讓全台基層衛生局、食品廠商與烘焙店家無所適從、怨聲載道！這種慢半拍且標準混亂的官僚應變，直接造成全台民眾搶油恐慌與基層商家的重大經濟損失！主管機關應變荒腔板板，根本是二次人為災害！",
      citation: "台灣食品技師協會與各界評論",
      closingQuestion: "食藥署初審標準混亂一日三變，造成廣大店家與民眾恐慌，這難道不是中央主管機關應變失能的鐵證？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-04",
      newArgB: "B-03",
      strategyA: "強調預防性下架與全數銷毀之風險控制成果",
      strategyB: "抓緊食藥署初期政策轉折與下架標準混亂瑕疵進行精準打擊",
      legalRatingA: "🟢",
      legalRatingB: "🟢",
      factRatingA: "🟢",
      factRatingB: "🟢",
      conceptShiftA: 0,
      conceptShiftB: 0,
      whataboutismA: 0,
      whataboutismB: 0,
      standardShiftA: 0,
      standardShiftB: 0,
      doubleStandardA: 0,
      doubleStandardB: 0,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 0,
      attackScoreA: 7,
      attackScoreB: 8,
      defenseScoreA: 7,
      defenseScoreB: 8,
      roundWinner: "🔴 Agent B 本回合優勢",
      winnerReason: "Agent B 點出食藥署處置初期的「20%下架門檻與標準混亂」事實瑕疵，有效削弱了 Agent A 宣稱應變完美的正面形象。"
    },
    resourceA: 67,
    resourceB: 68,
    argTreeSnapshotA: initialArgumentNodesA.map(node => {
      if (['A-01', 'A-02', 'A-03', 'A-05'].includes(node.id)) return { ...node, usedCount: 1 };
      if (node.id === 'A-04') return { ...node, usedCount: 1, lastUpdatedRound: 5 };
      return node;
    }),
    argTreeSnapshotB: initialArgumentNodesB.map(node => {
      if (['B-01', 'B-02', 'B-05', 'B-04'].includes(node.id)) return { ...node, usedCount: 1 };
      if (node.id === 'B-03') return { ...node, usedCount: 1, lastUpdatedRound: 5 };
      return node;
    })
  },
  {
    roundNumber: 6,
    agentA: {
      strategy: "指責國民黨無視黑心業者罪魁禍首，刻意將食安事件政治化、抹黑政府團隊",
      argId: "A-06",
      argTitle: "在野黨將業者刑事違法政治化轉嫁國營事業抹黑",
      content: "綜觀整起事件，罪魁禍首就是違法製造毒油的中聯油脂！民進黨政府司法檢調依法嚴辦、衛福部開出創紀錄重罰、行政院迅速專案修法補漏洞，全體公務員與食安團隊盡心盡力。反觀國民黨與在野陣營，不僅不敢大聲譴責違法的黑心業者，反而鋪天蓋地抹黑依法退貨的台糖、抹黑努力防毒的基層衛生官員，完全是為了政治利益將食安議題操弄為政黨鬥爭，這才是對台灣食安環境最大的傷害！",
      citation: "民進黨立法院黨團記者會說明",
      closingQuestion: "政府檢調嚴辦業者、專案修法補洞，在野黨不去譴責黑心業者卻政治抹黑第一線衛福與台糖人員，公道何在？",
      usedWhataboutism: true,
      usedDigUpHistory: false
    },
    agentB: {
      strategy: "要求衛福部長與經濟部長負起政治責任向國人道歉，完成責任歸屬論述閉環",
      argId: "B-06",
      argTitle: "衛福部長與經濟部長應向國人正式道歉並負起政治責任",
      content: "民進黨到了最後一回合還在牽拖在野黨監督！國人最不能接受的，就是民進黨政府爆發如此重大食安風暴後，永遠「沒有任何一個政務官需要負責」！台糖蓋牌一個月、衛福部邊境失能、食藥署應變混亂，造成全台 250 家業者與數百萬國人暴露於致癌風險之中。如果連衛福部長與經濟部長都不用向國人道歉、不用下台負政治責任，民進黨口中的『食安五環』與『政治責任』根本就是笑話！",
      citation: "在野黨聯合聲明與民意調查數據",
      closingQuestion: "致癌毒油流竄全台引發恐慌，衛福部長與經濟部長至今無人道歉撤職，民進黨的政務官政治責任在哪裡？",
      usedWhataboutism: false,
      usedDigUpHistory: true
    },
    judge: {
      newArgA: "A-06",
      newArgB: "B-06",
      strategyA: "將攻勢定調為「在野黨政治操弄與抹黑執政團隊」",
      strategyB: "訴諸民主政治常規，要求政務首長承擔政治責任與道歉",
      legalRatingA: "🟢",
      legalRatingB: "🟢",
      factRatingA: "🟢",
      factRatingB: "🟢",
      conceptShiftA: 1,
      conceptShiftB: 0,
      whataboutismA: 1,
      whataboutismB: 0,
      standardShiftA: 0,
      standardShiftB: 0,
      doubleStandardA: 0,
      doubleStandardB: 0,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 1,
      attackScoreA: 8,
      attackScoreB: 9,
      defenseScoreA: 7,
      defenseScoreB: 8,
      roundWinner: "🔴 Agent B 本回合優勢",
      winnerReason: "Agent B 圍繞核心議題「誰該負責」，強調政務官政治責任與社會公信力，形成強有力的政治訴求閉環；Agent A 使用了政治防禦性修辭，力道稍弱。"
    },
    resourceA: 58,
    resourceB: 60,
    argTreeSnapshotA: initialArgumentNodesA.map(node => ({ ...node, usedCount: node.id === 'A-06' ? 1 : node.usedCount })),
    argTreeSnapshotB: initialArgumentNodesB.map(node => ({ ...node, usedCount: node.id === 'B-06' ? 1 : node.usedCount }))
  }
];

export const mirrorPatternsData: MirrorPattern[] = [
  {
    id: "MP-01",
    patternTitle: "國營事業買方退貨 vs 蓋牌隱匿之雙重標準鏡像",
    agentAStatement: "國營事業台糖自主檢測發現瑕疵即執行商業退貨，切斷毒油進入台糖產品，屬品管把關有成，且粗油非上市產品依法無通報義務。",
    agentBStatement: "國營事業台糖早於 5 月驗出第一級致癌物卻私下退貨蓋牌一個月，置 250 家民營業者與全民健康於不顧，係重大行政蓋牌疏失。",
    explanation: "雙方對國營事業角色的期待完全雙標：執政黨將台糖定位為一般『商業買方』，僅需對自家產品負責；在野黨則將台糖定位為『公共安全守門人』，認為其發現重大危害即負有不可推卸的通報義務。"
  },
  {
    id: "MP-02",
    patternTitle: "現行食安法第 7 條「產品 vs 原料」法律解釋鏡像",
    agentAStatement: "《食安法》第 7 條強制通報標的為『上市產品』，粗油半成品依法非通報範疇，依法行政何來違規？",
    agentBStatement: "衛福部與經濟部拿『粗油是原料不是產品』為國營事業辯護，硬套法律漏洞黑箱甩鍋，係典型的官官相護與文字遊戲。",
    explanation: "對法條文義嚴格適用與立法意旨規範的鏡像扭曲：執政黨採取嚴格文義解釋以維護行政合法性，在野黨採取目的解釋抨擊政府利用法律灰色地帶躲避監督。"
  },
  {
    id: "MP-03",
    patternTitle: "業者刑事違法 vs 中央源頭監管失能之責任歸因鏡像",
    agentAStatement: "本案污染源頭完全是中聯油脂私自變更黃豆焙烤溫控所致，主管機關已第一時間勒令停工並開出史上最高 1.65 億重罰。",
    agentBStatement: "致癌物超標 4 倍卻由買方退貨才揭發，顯示衛福部邊境查驗與國內食用油源頭定期抽稽查形同虛設、監管失能。",
    explanation: "歸因謬誤的鏡像呈遞：執政黨將問題全數歸咎於業者個案違法與私利，在野黨則將問題放大為中央政府食品安全體系的系統性失能。"
  },
  {
    id: "MP-04",
    patternTitle: "政務官政治責任 vs 專案修法法制化之治理回應鏡像",
    agentAStatement: "行政院第一時間通過《食安法》專案修法草案，將高風險原料納入強制通報，以制度化改革展現負責任的治理態度。",
    agentBStatement: "致癌毒油波及全台廣泛食品鏈，衛福部長與經濟部長至今無人道歉撤職，口頭維護官位，政治責任完全缺失。",
    explanation: "治理回應標準的政治雙標：執政黨主張『制度修法補漏』才是實質解決問題，在野黨則主張『政務官下台道歉』才是承擔政治責任的唯一標準。"
  }
];
