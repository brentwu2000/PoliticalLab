import type { CaseDataBundle, EventDataPackage, ArgumentNode, RoundData, MirrorPattern } from '../../types/experiment';

export const jinghuaDataPackage: EventDataPackage = {
  title: "柯文哲京華城與政治獻金爭議案",
  agentAName: "Agent A",
  agentBName: "Agent B",
  agentAParty: "民進黨",
  agentBParty: "國民黨",
  timeline: [
    { time: "2021年9月", title: "京華城容積率變更案通過", description: "台北市都委會審議通過京華城容積獎勵方案，容積率由 560% 提升至 840%（額外增加 20% 容積獎勵與 30% 容積移轉），引發圖利爭議。" },
    { time: "2024年5月", title: "檢方正式分案偵查", description: "台北地檢署將柯文哲列為《貪污治罪條例》被告，展開調查。" },
    { time: "2024年8月30日", title: "檢廉發動大規模搜索", description: "搜索柯文哲住處、辦公室及民眾黨黨部，帶回柯文哲、彭振聲等人訊問。" },
    { time: "2024年9月5日", title: "北院裁定羈押禁見", description: "台北地方法院更裁，認定柯文哲涉犯圖利、收賄罪嫌重大，裁定羈押禁見。" },
    { time: "2024年12月26日", title: "北檢偵查終結起訴", description: "依《貪污治罪條例》違背職務收受賄賂罪、圖利罪、公益侵占罪及背信罪等起訴柯文哲，求刑 28 年 6 個月。" },
    { time: "2025年9月8日", title: "具保停止羈押", description: "柯文哲交保 7,000 萬元，結束近 1 年羈押，實施電子腳鐐科技監控。" },
    { time: "2026年3月26日", title: "台北地方法院一審宣判", description: "一審認定柯文哲 4 罪成立，合併判處有期徒刑 17 年，褫奪公權 6 年（收賄罪 13 年、政治獻金公益侵占罪 2 年、眾望木可侵占罪 3 年 6 月、背信罪 2 年 6 月）。" }
  ],
  involvedParties: [
    { name: "柯文哲", title: "前台北市長 / 台灣民眾黨黨主席", notes: "一審宣判有期徒刑 17 年，褫奪公權 6 年" },
    { name: "彭振聲", title: "前台北市副市長兼都委會主委", notes: "一審獲判有期徒刑 2 年，緩刑 3 年" },
    { name: "沈慶京", title: "威京集團主席", notes: "一審因行賄罪判刑 10 年" },
    { name: "應曉薇", title: "國民黨籍台北市議員", notes: "涉違背職務收賄一審判刑 15 年 6 月" },
    { name: "鍾小平 / 游淑慧", title: "國民黨籍台北市議員", notes: "本案最初向檢廉告發與質詢舉發者" }
  ],
  relevantLaws: [
    { law: "《貪污治罪條例》第 4 條第 1 項第 5 款", text: "違背職務收受賄賂罪" },
    { law: "《貪污治罪條例》第 6 條第 1 項第 4 款", text: "主管或監督事務圖利罪" },
    { law: "《刑法》第 336 條第 1 項", text: "公益侵占罪" },
    { law: "《刑法》第 342 條", text: "背信罪" },
    { law: "《憲法》第 8 條與無罪推定原則", text: "被告未經審判證明有罪確定前，推定其為無罪" }
  ],
  partyAStance: [
    "尊重司法獨立與法院判決，一審法院經公開審理認定 4 罪成立判刑 17 年，證據與事實明確。",
    "京華城案最初係由國民黨議員舉發告發，非民進黨羅織追殺。",
    "綠營自身若涉案（如鄭文燦案）檢調同樣偵辦起訴，證明司法一視同仁。",
    "柯陣營過去高舉公開透明清廉道德，面臨判決卻攻擊司法，屬明顯雙標。"
  ],
  partyBStance: [
    "偵查期間檢調頻向特定媒體洩密，造成媒體先判決、司法後補證之壓迫環境。",
    "超思進口蛋、高端疫苗、台南光電弊案辦案拖延，對在野黨卻火速發動搜索羈押，屬選擇性辦案。",
    "藍營議員告發乃地方民代監督職責，不能作為民進黨執政當局清白之背書。",
    "濫用長達近一年之羈押制度，實質侵害人權與無罪推定原則。"
  ],
  unverifiedItems: [
    "⚠️【尚未確認】：二審法院（台灣高等法院）之上訴排定與最新審理進度。",
    "⚠️【尚未確認】：沈慶京 1,500 萬元隨身碟金流之二審補強證據提出狀況。",
    "⚠️【尚未確認】：木可公司剩餘資金之最終民事返還與扣押程序。"
  ]
};

export const initialNodesA_Jinghua: ArgumentNode[] = [
  { id: "A-01", party: "A", title: "司法獨立與法院一審判決權威", category: "法律論證", description: "一審法院經公開審理判處 17 年，事實與法律依據明確，應尊重司法獨立。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "A-02", party: "A", title: "本案源於藍營議員舉發告發", category: "程序理由", description: "京華城案最早係由國民黨市議員鍾小平、游淑慧等人舉發，非民進黨追殺。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "A-03", party: "A", title: "綠營同等受司法偵辦（鄭文燦案）", category: "翻舊帳/歷史案例", description: "桃園前市長鄭文燦同樣遭檢調偵辦起訴羈押，證明檢調辦案一視同仁。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "A-04", party: "A", title: "清廉高標準與雙重標準反殺", category: "道德責任", description: "柯陣營過去高舉公開透明清廉道德，如今面臨法院判決卻轉向攻擊司法，顯屬雙標。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "A-05", party: "A", title: "行政裁量不得踰越法律紅線", category: "法律論證", description: "都委會給予單一財團 840% 超額容積率已違背法令義務，屬實質圖利與收賄。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "A-06", party: "A", title: "政治獻金與黨營私庫混淆", category: "政治責任", description: "競選總部資金流向木可公司與眾望基金會，判決侵占罪成立，屬實質政治腐敗。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 }
];

export const initialNodesB_Jinghua: ArgumentNode[] = [
  { id: "B-01", party: "B", title: "偵查不公開名存實亡與媒體辦案", category: "程序理由", description: "檢調頻頻向特定媒體洩密，造成媒體先判決、司法後補證的壓迫性審判環境。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "B-02", party: "B", title: "司法雙標與選擇性辦案（超思/光電案）", category: "Whataboutism", description: "超思進口蛋、高端疫苗、台南光電弊案辦案拖延，對在野黨卻火速搜索羈押。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "B-03", party: "B", title: "綠色新黨國與國家機器司法工具化", category: "政治責任", description: "執政黨透過控制檢察系統與媒體輿論，削弱在野監督力量，破壞民主制衡體制。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "B-04", party: "B", title: "地方議員監督切割與中央政黨責任", category: "程序理由", description: "藍營議員告發乃地方民代履行監督職責，不能作為民進黨中央政府清白背書。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "B-05", party: "B", title: "押人取證與人權正當程序侵害", category: "法律論證", description: "延長羈押近一年始交保，過度濫用羈押制度作為心理施壓之手段。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "B-06", party: "B", title: "圖利罪構成要件邊界爭議", category: "法律論證", description: "都市計畫研議係合議制都委會專業決議，將首長政策鼓勵打壓為刑事犯罪將致文官寒蟬。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 }
];

export const mockRoundsJinghua: RoundData[] = [
  {
    roundNumber: 1,
    agentA: {
      strategy: "引用台北地院一審判決 17 年權威，強調司法獨立與事實裁判。",
      argId: "A-01",
      argTitle: "司法獨立與法院一審判決權威",
      content: "台北地方法院經過長達近兩年的公開審理與證人對質，一審正式判處柯文哲有期徒刑 17 年、褫奪公權 6 年！判決書載明收賄、侵占政治獻金與背信等明確事事。任何政黨都應尊重憲法授權之司法獨立，而不是判決不利就抹黑司法！",
      citation: "台北地方法院 113 年矚重訴字第 1 號判決書",
      closingQuestion: "法院公開審理判處 17 年，國民黨難道要凌駕憲法司法獨立之上？"
    },
    agentB: {
      strategy: "攻擊偵查不公開名存實亡與綠營特定媒體洩密辦案。",
      argId: "B-01",
      argTitle: "偵查不公開名存實亡與媒體辦案",
      content: "民進黨少拿司法獨立當護身符！本案從搜索第一天起，北檢將偵查密件與隨身碟內容天天『獨家』洩漏給特定綠色媒體，製造『媒體先判判、司法後補證』的輿論絞殺！這種摧毀無罪推定與人權保障的政治偵辦，算什麼司法獨立？",
      citation: "立法院司法法制委員會檢調洩密專案報告",
      closingQuestion: "天天洩密給媒體帶風向，民進黨這不是政治辦案是什麼？"
    },
    judge: {
      newArgA: "A-01",
      newArgB: "B-01",
      strategyA: "引用一審判決 17 年強調司法獨立",
      strategyB: "主攻偵查洩密與媒體辦案程序暇疵",
      legalRatingA: "🟢", legalRatingB: "🟢",
      factRatingA: "🟢", factRatingB: "🟢",
      conceptShiftA: 0, conceptShiftB: 0,
      whataboutismA: 0, whataboutismB: 0,
      standardShiftA: 0, standardShiftB: 0,
      doubleStandardA: 0, doubleStandardB: 0,
      repeatedArgA: 0, repeatedArgB: 0,
      digUpHistoryA: 0, digUpHistoryB: 0,
      attackScoreA: 8, attackScoreB: 8,
      defenseScoreA: 8, defenseScoreB: 7,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "A-01 一審法院實質判決 17 年具有強大法律形式效力。"
    },
    resourceA: 95, resourceB: 90,
    argTreeSnapshotA: initialNodesA_Jinghua, argTreeSnapshotB: initialNodesB_Jinghua
  },
  {
    roundNumber: 2,
    agentA: {
      strategy: "指出本案發端係國民黨議員告發，瓦解『綠營政治追殺』敘事。",
      argId: "A-02",
      argTitle: "本案源於藍營議員舉發告發",
      content: "國民黨少在哪裡含血噴人！京華城案最早在台北市議會成立專案小組告發、向檢廉舉發的，就是國民黨自家的鍾小平與游淑慧議員！檢調係接獲告發依法偵辦，結果國民黨中央現在為了政治利益，反過來痛罵自己議員舉發的案件是『綠色迫害』，這是何等離譜的雙重標準！",
      citation: "台北市議會京華城調查專案小組會議紀錄",
      closingQuestion: "案子係國民黨議員舉發告發的，國民黨怎麼有臉抹黑成民進黨追殺？"
    },
    agentB: {
      strategy: "切割地方議員監督與中央國家機器辦案動機（Whataboutism 拋超思光電案）。",
      argId: "B-02",
      argTitle: "司法雙標與選擇性辦案（超思/光電案）",
      content: "地方議員履行監督責任舉發陳情，與民進黨中央掌握檢調國家機器選擇性辦案完全是兩回事！大家看得非常清楚：超思進口蛋幾億公帑疑雲、台南光電槍擊弊案、高端內線交易，檢調辦了幾年全在裝睡；遇到在野黨就晨攻搜索、押人一年！這就是最徹底的『辦白不辦綠』雙標！",
      citation: "立法院公報第 113 卷第 45 期",
      closingQuestion: "超思光電案裝睡辦不動，對在野黨押人取證，民進黨司法雙標不感到恥辱嗎？"
    },
    judge: {
      newArgA: "A-02",
      newArgB: "B-02",
      strategyA: "引述藍營議員告發事實打破綠營追殺論",
      strategyB: "用超思光電案進行 Whataboutism 與司法雙標反殺",
      legalRatingA: "🟢", legalRatingB: "🟡",
      factRatingA: "🟢", factRatingB: "🟢",
      conceptShiftA: 0, conceptShiftB: 0,
      whataboutismA: 0, whataboutismB: 1,
      standardShiftA: 0, standardShiftB: 1,
      doubleStandardA: 0, doubleStandardB: 1,
      repeatedArgA: 0, repeatedArgB: 0,
      digUpHistoryA: 0, digUpHistoryB: 1,
      attackScoreA: 9, attackScoreB: 7,
      defenseScoreA: 8, defenseScoreB: 6,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "A-02 引述藍營議員最初舉發告發之硬事實，B-02 訴諸 Whataboutism 轉移焦點。"
    },
    resourceA: 90, resourceB: 80,
    argTreeSnapshotA: initialNodesA_Jinghua, argTreeSnapshotB: initialNodesB_Jinghua
  },
  {
    roundNumber: 3,
    agentA: {
      strategy: "舉鄭文燦案證實司法一視同仁、絕無選擇性辦案。",
      argId: "A-03",
      argTitle: "綠營同等受司法偵辦（鄭文燦案）",
      content: "國民黨打選擇性辦案完全是睜眼說瞎話！前桃園市長鄭文燦同樣遭檢調發動搜索、聲押獲准並依法起訴求刑 12 年！不論是民進黨還是民眾黨，只要涉及貪污弊案，台灣司法一律依法嚴辦！國民黨為了袒護貪腐，硬要把司法正義打成黨同伐異！",
      citation: "桃園地檢署 113 年偵字第 23412 號起訴書",
      closingQuestion: "鄭文燦同樣遭搜索起訴求刑，國民黨還要繼續指控選擇性辦案嗎？"
    },
    agentB: {
      strategy: "提出『綠色新黨國』與司法工具化打壓在野黨。",
      argId: "B-03",
      argTitle: "綠色新黨國與國家機器司法工具化",
      content: "拿一個鄭文燦出來交差辦給外界看，根本掩蓋不了綠色黨國一體的事實！檢察官人事權、廉政署、媒體網軍全掌握在民進黨手中，選擇性選擇辦案的時間點與力道。當檢調成為執政黨打擊在野主要對手的武器時，台灣的民主制衡體制已經面臨最嚴重的危機！",
      citation: "台灣民間司法改革基金會聲明",
      closingQuestion: "國家機器全掌握在手，民進黨要把台灣帶回新黨國威權時代嗎？"
    },
    judge: {
      newArgA: "A-03",
      newArgB: "B-03",
      strategyA: "引鄭文燦案反駁選擇性辦案指控",
      strategyB: "主張綠色黨國與國家機器威脅民主",
      legalRatingA: "🟢", legalRatingB: "🟡",
      factRatingA: "🟢", factRatingB: "🟡",
      conceptShiftA: 0, conceptShiftB: 1,
      whataboutismA: 0, whataboutismB: 0,
      standardShiftA: 0, standardShiftB: 1,
      doubleStandardA: 0, doubleStandardB: 0,
      repeatedArgA: 0, repeatedArgB: 0,
      digUpHistoryA: 0, digUpHistoryB: 0,
      attackScoreA: 8, attackScoreB: 7,
      defenseScoreA: 8, defenseScoreB: 6,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "A-03 以具體綠營大咖獲罪事實打破選擇性辦案陳述。"
    },
    resourceA: 85, resourceB: 70,
    argTreeSnapshotA: initialNodesA_Jinghua, argTreeSnapshotB: initialNodesB_Jinghua
  },
  {
    roundNumber: 4,
    agentA: {
      strategy: "二次使用 A-01，強化一審 17 年判決與收賄金額之鐵證。",
      argId: "A-01",
      argTitle: "司法獨立與法院一審判決權威（二次使用）",
      content: "講再多政治陰謀論，也改變不了法院認定收取沈慶京巨額款項、侵占政治獻金的事實！法院經過交互詰問，一審判決 17 年重刑。國民黨若真有法治精神，就該尊重司法判決，而不是與違法貪腐站在一起！",
      citation: "台北地院一審判決主文",
      closingQuestion: "法院判決收賄與侵占罪成立，國民黨還要繼續為貪腐護航嗎？"
    },
    agentB: {
      strategy: "二次使用 B-01，再次主攻偵查洩密與媒體先判後補證程序黑箱。",
      argId: "B-01",
      argTitle: "偵查不公開名存實亡與媒體辦案（二次使用）",
      content: "一審判決就是在審判程序受到嚴重輿論污染下的產物！從案發至今，北檢洩密給特定媒體幾百篇報導，先在社會上人格毀滅，再靠押人取證拼湊供詞。這種程序不正義產生的判決，何來權威可言？",
      citation: "檢視偵查不公開專案委員會報告",
      closingQuestion: "程序嚴重瑕疵與洩密帶風向，民進黨敢說這是公正審判嗎？"
    },
    judge: {
      newArgA: "A-01", newArgB: "B-01",
      strategyA: "二次使用 A-01 訴諸一審收賄與侵占事實判決",
      strategyB: "二次使用 B-01 強調程序不正義與媒體污染",
      legalRatingA: "🟢", legalRatingB: "🟡",
      factRatingA: "🟢", factRatingB: "🟢",
      conceptShiftA: 0, conceptShiftB: 0,
      whataboutismA: 0, whataboutismB: 0,
      standardShiftA: 0, standardShiftB: 0,
      doubleStandardA: 0, doubleStandardB: 0,
      repeatedArgA: 1, repeatedArgB: 1,
      digUpHistoryA: 0, digUpHistoryB: 0,
      attackScoreA: 7, attackScoreB: 6,
      defenseScoreA: 7, defenseScoreB: 6,
      roundWinner: "⚪ 雙方相當",
      winnerReason: "雙方皆二次使用核心論據，攻防效力遞減持平。"
    },
    resourceA: 75, resourceB: 60,
    argTreeSnapshotA: initialNodesA_Jinghua, argTreeSnapshotB: initialNodesB_Jinghua
  },
  {
    roundNumber: 5,
    agentA: {
      strategy: "Agent A 提出 A-05 行政裁量不得踰越法律紅線主攻圖利與收賄。",
      argId: "A-05",
      argTitle: "行政裁量不得踰越法律紅線",
      content: "都市計畫法規明定容積率上限，都委會竟創設所謂『20% 容積獎勵』給予單一財團 840% 超額容積，圖利數百億利益！市長手握行政大權，絕不能把違法圖利包裝成『政策鼓勵』。法律紅線不容踰越！",
      citation: "都市計畫圖利罪最高法院判例彙編",
      closingQuestion: "違法給予財團數百億容積利益，這難道不是極致的違法圖利？"
    },
    agentB: {
      strategy: "Agent B 核心論據全數達上限，宣告論證資源耗盡。",
      argId: "B-EXHAUSTED",
      argTitle: "論證資源耗盡宣告",
      content: "「本回合論證資源耗盡。」\n在民進黨掌控檢調與媒體資源下，我方已窮盡所有關於偵查洩密黑箱、超思光電司法雙標、押人取證人權侵害及綠色新黨國工具化等攻擊與防禦路線。我方在此明確宣告論證資源耗盡！",
      citation: "政治立場攻防實驗 v2 規則第五條",
      closingQuestion: "本回合論證資源耗盡。"
    },
    judge: {
      newArgA: "A-05", newArgB: "B-EXHAUSTED",
      strategyA: "主攻違法給予財團超額容積之圖利法理",
      strategyB: "依實驗規則第五條宣告論證資源耗盡",
      legalRatingA: "🟢", legalRatingB: "🔴",
      factRatingA: "🟢", factRatingB: "🔴",
      conceptShiftA: 0, conceptShiftB: 0,
      whataboutismA: 0, whataboutismB: 0,
      standardShiftA: 0, standardShiftB: 0,
      doubleStandardA: 0, doubleStandardB: 0,
      repeatedArgA: 0, repeatedArgB: 0,
      digUpHistoryA: 0, digUpHistoryB: 0,
      attackScoreA: 9, attackScoreB: 0,
      defenseScoreA: 9, defenseScoreB: 0,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "🔴 Agent B 依規則第五條宣布論證資源耗盡，🔵 Agent A 獲得京華城案最終勝利！"
    },
    resourceA: 70, resourceB: 0,
    argTreeSnapshotA: initialNodesA_Jinghua, argTreeSnapshotB: initialNodesB_Jinghua
  }
];

export const mirrorPatternsJinghua: MirrorPattern[] = [
  {
    id: "MJ-01",
    patternTitle: "司法判決與政治迫害之選擇性解讀",
    agentAStatement: "A (民進黨在京華城案)：『法院經公開審理判處 17 年，應尊重司法獨立與判決權威。』",
    agentBStatement: "B (國民黨在藍營政客遭起訴判刑時)：『法院判決係基於鐵證事實，任何人不得凌駕司法之上。』",
    explanation: "當判決對敵方不利時，主張「尊重司法獨立與法院權威」；當判決對己方不利時，則質疑「司法淪為執政黨打壓工具」。"
  },
  {
    id: "MJ-02",
    patternTitle: "偵查不公開與媒體洩密之標準漂移",
    agentAStatement: "A (民進黨面對洩密質疑時)：『檢調已澄清未洩密，媒體報導係記者自行採訪搜集，尊重報導自由。』",
    agentBStatement: "B (國民黨面對洩密質疑時)：『檢調頻頻向特定媒體洩密，造成媒體先判決、摧毀無罪推定！』",
    explanation: "當媒體報導對對手不利時，將其視為「新聞自由與採訪成果」；當報導對己方不利時，則怒批「檢調違法洩密帶風向」。"
  }
];

export const jinghuaBundle: CaseDataBundle = {
  id: 'jinghua',
  title: '柯文哲京華城與政治獻金爭議案',
  initialEventDataPackage: jinghuaDataPackage,
  initialNodesA: initialNodesA_Jinghua,
  initialNodesB: initialNodesB_Jinghua,
  mockRounds: mockRoundsJinghua,
  mirrorPatternsData: mirrorPatternsJinghua
};
