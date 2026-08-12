import type { EventDataPackage, ArgumentNode, RoundData, MirrorPattern } from '../types/experiment';

export const initialEventDataPackage: EventDataPackage = {
  title: "柯文哲京華城與政治獻金爭議案",
  agentAName: "Agent A",
  agentBName: "Agent B",
  agentAParty: "民進黨",
  agentBParty: "國民黨",
  timeline: [
    { time: "2020年3月10日", title: "柯文哲召開京華城案便當會", description: "柯文哲市長召開便當會接見應曉薇，裁示將京華城陳情案交辦都發局研議處理。" },
    { time: "2020年3月24-26日", title: "威京人頭政治獻金 210 萬元入帳", description: "威京集團 7 名幹部以個人名義各捐款 30 萬（共 210 萬）至民眾黨專戶，一審認定屬違背職務收賄對價金流。" },
    { time: "2020年11月16日", title: "都委會第 775 次會議討論專案小組", description: "都發局將京華城自創 20% 獎勵方案提報都委會，前局長林洲民等官員與專家警示缺乏都市計畫法源。" },
    { time: "2021年9月9日", title: "都委會第 783 次會議通過 20% 獎勵", description: "彭振聲主持都委會審議通過京華城容積獎勵案，容積率由 560% 飆升至 840%（含 20% 自創獎勵與 30% 容積移轉）。" },
    { time: "2021年11月1日", title: "柯文哲蓋章核定公告實施", description: "柯文哲親自簽核都發局細部計畫公文公告實施。後於爭議爆發時表示「蓋章不代表知情」、「今年三四月才知道 840%」。" },
    { time: "2024年5月2日", title: "北檢正式分案將柯列被告", description: "台北地檢署針對京華城案正式分他字案，將前市長柯文哲列為《貪污治罪條例》被告。" },
    { time: "2024年8月29日", title: "柯文哲開記者會說明政治獻金假帳", description: "柯文哲開記者會承認競選政治獻金「報錯帳」，宣佈請假自請調查；木可公司與眾望基金會金流引爆公益侵占爭議。" },
    { time: "2024年8月30日", title: "檢廉拂曉搜索柯住處與民眾黨部", description: "檢廉廉政署發動大規模搜索柯住處、辦公室及黨部。藍白抨擊押人取證與洩密給特定媒體。" },
    { time: "2024年9月5日", title: "北院更裁羈押禁見", description: "台北地院更裁認定柯文哲涉犯圖利、收賄罪嫌重大，裁定羈押禁見送台北看守所。" },
    { time: "2024年12月26日", title: "北檢偵查終結起訴求刑 28.5 年", description: "依違背職務收賄、圖利、公益侵占及背信罪起訴柯文哲等 11 人，柯文哲遭求刑 28 年 6 個月。" },
    { time: "2025年9月8日", title: "7,000 萬元交保結束羈押", description: "柯文哲獲裁定交保 7,000 萬元停止羈押，實施電子腳鐐科技監控，結束近 1 年看守所羈押。" },
    { time: "2026年3月26日", title: "台北地院一審宣判 17 年", description: "一審認定柯文哲 4 罪成立，合併判處有期徒刑 17 年、褫奪公權 6 年（認定收受威京 210 萬賄款及公益侵占政治獻金與基金會款項；彭振聲獲判 2 年緩刑 3 年）。" }
  ],
  involvedParties: [
    { name: "柯文哲", title: "前台北市長 / 前民眾黨主席", notes: "一審判處有期徒刑 17 年，褫奪公權 6 年" },
    { name: "彭振聲", title: "前台北市副市長兼都委會主委", notes: "一審認罪獲判刑 2 年，緩刑 3 年" },
    { name: "沈慶京", title: "威京集團主席", notes: "一審行賄罪判刑 10 年" },
    { name: "應曉薇", title: "國民黨籍台北市議員", notes: "一審收賄與洗錢判刑 15 年 6 月" },
    { name: "鍾小平 / 游淑慧", title: "國民黨籍台北市議員", notes: "京華城容積率案最初檢舉與告發人" },
    { name: "李文宗", title: "前柯文哲競總財務長 / 木可負責人", notes: "一審公益侵占罪判刑 5 年" }
  ],
  relevantLaws: [
    { law: "《貪污治罪條例》第 4 條第 1 項第 5 款", text: "違背職務收受賄賂罪（處無期徒刑或 10 年以上有期徒刑）" },
    { law: "《貪污治罪條例》第 6 條第 1 項第 4 款", text: "主管或監督事務圖利罪（處 5 年以上有期徒刑）" },
    { law: "《刑法》第 336 條第 1 項", text: "公益侵占罪（處 1 年以上 7 年以下有期徒刑）" },
    { law: "《刑法》第 342 條", text: "背信罪（處 5 年以下有期徒刑）" },
    { law: "《憲法》第 8 條與無罪推定原則", text: "未經審判證明有罪確定前推定無罪，正當法律程序保障" }
  ],
  partyAStance: [
    "一審宣判 17 年證實柯文哲收賄、侵占犯行明確，彰顯司法獨立與法治正當性。",
    "告發者係國民黨議員鍾小平、游淑慧，非綠營起訴；且鄭文燦同樣遭聲押起訴，證明檢調一視同仁。",
    "柯文哲「蓋章不知道」係卸責話術，都發局簽呈與便當會逐字稿證實市長親自指派交辦。",
    "競選政治獻金轉入木可與眾望私用侵占，背棄公信並破壞廉能政治紅線。"
  ],
  partyBStance: [
    "抨擊檢調押人取證、偵查不公開潰敗洩密給特定媒體毀滅人格，嚴重違反無罪推定與人權。",
    "一審對 1500 萬隨身碟未認定收賄，證實當初媒體爆料全係檢方洩密與誇大造謠。",
    "採取「司法雙標」戰術：質疑綠營超思雞蛋、台南光電、高端內線等案檢調牛步縱放，專打在野黨主席係「辦藍白不辦綠」。",
    "京華城容積獎勵經都委會專家合議審議通過，屬都市計畫地方專業裁量，市長依法蓋章分層負責無圖利不法。"
  ],
  unverifiedItems: [
    "⚠️【尚未確認】：台灣高等法院二審上訴開庭排程與檢方聲請上訴意向。",
    "⚠️【尚未確認】：木可公司扣押帳戶資金返還民眾黨專戶之民事訴訟進度。"
  ]
};

export const initialArgumentNodesA: ArgumentNode[] = [
  {
    id: "A-01",
    party: "A",
    title: "一審判決17年收賄與侵占犯行明確",
    category: "法律論證",
    description: "台北地方法院一審認定違背職務收賄罪（210萬對價對應便當會）、木可與眾望公益侵占及背信罪成立，合併判刑 17 年，物證扎實。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "台北地方法院 113 年矚重訴字第 1 號判決"
  },
  {
    id: "A-02",
    party: "A",
    title: "都發局公文簽呈與便當會證實市長交辦知情",
    category: "程序理由",
    description: "前都發局長林洲民等官員於簽呈中明確警示缺乏法源，柯親自批示蓋章並召開便當會交辦，「蓋章不知道」係卸責話術。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 2,
    lastUpdatedRound: 2,
    citation: "台北市都發局內部簽呈與便當會會議紀錄"
  },
  {
    id: "A-03",
    party: "A",
    title: "告發者係國民黨議員且檢調辦案一視同仁",
    category: "程序理由",
    description: "本案告發者係國民黨市議員鍾小平、游淑慧；民進黨籍鄭文燦同樣遭聲押起訴，證實檢調尊重司法獨立、絕無政治追殺。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 3,
    lastUpdatedRound: 3,
    citation: "桃園地檢署 113 年矚重訴字第 5 號起訴書與市議會紀錄"
  },
  {
    id: "A-04",
    party: "A",
    title: "政治獻金轉入木可與眾望實質侵占背信",
    category: "道德責任",
    description: "競選政治獻金專戶資金轉入私設木可公司與眾望基金會，背棄支持者信任並私用侵占，違背廉能公信。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 4,
    lastUpdatedRound: 4,
    citation: "北檢 113 年查字起訴書金流清冊"
  },
  {
    id: "A-05",
    party: "A",
    title: "自創20%容積獎勵超越都市計畫法授權底線",
    category: "法律論證",
    description: "都委會創設法規無授權之「20% 容積獎勵」，使容積率由 560% 飆至 840%，實質圖利威京集團上百億商業利益。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 5,
    lastUpdatedRound: 5,
    citation: "監察院 113 糾字第 008 號糾正案文"
  },
  {
    id: "A-06",
    party: "A",
    title: "個人貪腐行為不能以黨威與政治動員綁架司法",
    category: "政治責任",
    description: "柯文哲個人貪腐收賄遭司法判刑，民眾黨企圖以政治集會與煽動支持者攻擊司法，係破壞法治國家分權體制。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 6,
    lastUpdatedRound: 6,
    citation: "司法院聲明與法治國家分權原則"
  }
];

export const initialArgumentNodesB: ArgumentNode[] = [
  {
    id: "B-01",
    party: "B",
    title: "檢調押人取證與偵查不公開潰敗洩密造謠",
    category: "程序理由",
    description: "檢方於證據不足前發動搜索羈押近一年係「押人取證」，洩密給特定媒體造謠「1500萬隨身碟」，一審未採納證明媒體試審誣陷。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "《偵查不公開作業辦法》第 9 條與一審判決書對1500萬未認定說明"
  },
  {
    id: "B-02",
    party: "B",
    title: "司法雙重標準辦藍白不辦綠（光電雞蛋案縱放）",
    category: "Whataboutism",
    description: "檢調對超思雞蛋案、台南光電案、高端內線等綠營重案牛步縱放，對在野黨主席最高規格追殺求刑 28 年半，凸顯司法雙標。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 2,
    lastUpdatedRound: 2,
    citation: "監察院超思雞蛋調查報告與台南光電案地檢署進度"
  },
  {
    id: "B-03",
    party: "B",
    title: "都市計畫獎勵屬地方政府專業合議裁量權",
    category: "法律論證",
    description: "京華城容積獎勵經都委會專家學者合議審議通過，屬都市計畫地方裁量權；市長依程序核定公文，分層負責無圖利不法。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 3,
    lastUpdatedRound: 3,
    citation: "《都市計畫法》第 24 條與台北市都委會審議紀錄"
  },
  {
    id: "B-04",
    party: "B",
    title: "210萬政治獻金係合規捐贈非對價賄款",
    category: "法律論證",
    description: "威京高層幹部捐款 210 萬元皆具名申報於政治獻金專戶，屬合法政治捐贈，檢方強行扣上「違背職務收賄」係欲加之罪。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 4,
    lastUpdatedRound: 4,
    citation: "監察院政治獻金申報公開平台紀錄"
  },
  {
    id: "B-05",
    party: "B",
    title: "木可公關與競務支出授權合約缺乏侵占犯意",
    category: "道德責任",
    description: "木可公司處理競選周邊商品授權金與代收款項屬商業合約範疇，柯文哲並無公益侵占之犯罪意圖與實質得利。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 5,
    lastUpdatedRound: 5,
    citation: "柯文哲競選總部與木可公司授權合約書"
  },
  {
    id: "B-06",
    party: "B",
    title: "政治性長年羈押侵害無罪推定與人身自由比例原則",
    category: "法律論證",
    description: "長達 365 天之羈押禁見與 7,000 萬元天價保釋金，嚴重違反《憲法》無罪推定原則與人身自由比例原則，係政治迫害。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 6,
    lastUpdatedRound: 6,
    citation: "《憲法》第 8 條與刑事訴訟法羈押比例原則"
  }
];

export const mockRounds: RoundData[] = [
  {
    roundNumber: 1,
    agentA: {
      strategy: "開局立足地院一審判決 17 年物證確鑿，強調收賄與公益侵占業經合議庭依法認定。",
      argId: "A-01",
      argTitle: "一審判決17年收賄與侵占犯行明確",
      content: "經過台北地院數十次合議庭開庭與公開言詞辯論，柯文哲因違背職務收賄（210萬元對價）、木可與眾望公益侵占等 4 罪，一審合併判處有期徒刑 17 年、褫奪公權 6 年！本案司法機關依法搜查、起訴與嚴審，威京集團人頭匯款 210 萬至民眾黨帳戶的時間點與柯文哲便當會交辦時間完全重疊！證據鏈極度扎實，白藍陣營不要再用『政治追殺』掩蓋收賄貪腐事實！",
      citation: "台北地方法院 113 年矚重訴字第 1 號判決",
      closingQuestion: "面對法院依法認定收賄與侵占判刑 17 年的重罪物證，民眾黨還要繼續硬拗是政治追殺嗎？"
    },
    agentB: {
      strategy: "發動程序正義攻擊，質疑檢調押人取證、洩密媒體造謠，且一審未認定 1500 萬隨身碟證實媒體試審誣陷。",
      argId: "B-01",
      argTitle: "檢調押人取證與偵查不公開潰敗洩密造謠",
      content: "民進黨少拿一審結果來洗白程序不正義！在案件偵查階段，檢調單位天天向特定偏綠媒體洩密爆料『1500小沈』、『冷錢包』等未經證實的謠言，發動鋪天蓋地的媒體公審！結果呢？一審法院判決書明確指出，所謂 1500 萬隨身碟因『缺乏補強證據』完全未予採納！這證實檢方當初全係押人取證、洩密造謠！當程序正義被撕毀，一審裁判早已遭受國家機器嚴重的政治污染！",
      citation: "《偵查不公開作業辦法》第 9 條與一審判決書說明",
      closingQuestion: "一審法院明確否認 1500 萬隨身碟收賄指控，證明當初檢方與媒體聯手洩密造謠，這不是政治誣陷是什麼？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-01",
      newArgB: "B-01",
      strategyA: "引述一審判決 17 年與 210 萬收賄對價時間差立足司法權威",
      strategyB: "質疑偵查洩密、押人取證與媒體試審，拿一審否認 1500 萬隨身碟作擊破點",
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
      attackScoreB: 8,
      defenseScoreA: 8,
      defenseScoreB: 7,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "A-01 引述地院一審實質判決 17 年與 210 萬人頭對價流向之法律基礎極為扎實，B-01 攻擊程序瑕疵雖具說服力但未能推翻收賄成立之主文。"
    },
    resourceA: 95,
    resourceB: 90,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  },
  {
    roundNumber: 2,
    agentA: {
      strategy: "提出林洲民都發局簽呈與便當會逐字稿，駁斥柯文哲「蓋章不知道」卸責話術。",
      argId: "A-02",
      argTitle: "都發局公文簽呈與便當會證實市長交辦知情",
      content: "柯文哲事後喊『蓋章不代表知情』、『今年三四月才知道 840%』，這完全是無恥的卸責話術！台北市都發局前局長林洲民、黃景茂多次在內部公文簽呈中白紙黑字警示『創設 20% 容積獎勵缺乏都市計畫法源，有違法圖利疑慮』！柯文哲不僅親自開便當會指示交辦應曉薇訴求，還在公文上簽名蓋章核定！市長親自交代、親自簽核，怎麼可能不知道？",
      citation: "台北市都發局內部簽呈與便當會會議紀錄 (2020-2021)",
      closingQuestion: "前局長簽呈白紙黑字警示無法源，柯文哲親自簽核蓋章，難道蓋章能當作不知情圖利的免死金牌？"
    },
    agentB: {
      strategy: "主張都市計畫容積獎勵屬地方都委會專家合議裁量權，市長依法簽核屬分層負責。",
      argId: "B-03",
      argTitle: "都市計畫獎勵屬地方政府專業合議裁量權",
      content: "民進黨少拿行政公文來羅織罪名！京華城容積獎勵案歷經都委會幾十位都市計畫、建築、法律專家學者組成的合議制小組公開審議，最終係由專家合議通過！依據《都市計畫法》第 24 條，地方政府對都市發展與老舊建物更新本就享有專業裁量權！柯文哲作為市長，尊重專家合議結論並依公務程序簽核，這是正常的『分層負責』與依法行政，哪裡來的圖利犯意？",
      citation: "《都市計畫法》第 24 條與台北市都委會審議紀錄",
      closingQuestion: "都委會數十位專家學者合議審查通過的政策，市長依程序蓋章簽核，這不是依法行政分層負責是什麼？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-02",
      newArgB: "B-03",
      strategyA: "用林洲民局長警示簽呈與便當會逐字稿打擊『蓋章不知道』話術",
      strategyB: "主張都市計畫獎勵屬都委會專家合議專業裁量與分層負責",
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
      attackScoreA: 9,
      attackScoreB: 8,
      defenseScoreA: 8,
      defenseScoreB: 7,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "A-02 舉出前都發局長林洲民白紙黑字警示簽呈物證，對 B-03『分層負責不知情』抗辯構成極強的法理擊破。"
    },
    resourceA: 90,
    resourceB: 82,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  },
  {
    roundNumber: 3,
    agentA: {
      strategy: "切割起訴發動者，強調告發源頭為國民黨市議員，並舉鄭文燦案證實檢調一視同仁。",
      argId: "A-03",
      argTitle: "告發者係國民黨議員且檢調辦案一視同仁",
      content: "藍白陣營天天嚷嚷『綠色恐怖政治追殺』，這完全是政治抹黑！本案最早向檢廉舉發並在市議會成立專案小組調查的，正是國民黨籍市議員鍾小平與游淑慧！民進黨前桃園市長鄭文燦涉案，檢調同樣發動搜索、聲押並起訴求刑 12 年！這充分證明司法機關跨黨派一視同仁，任何違法貪腐皆依法嚴辦，絕無政治選擇性！",
      citation: "桃園地院 113 年矚重訴字第 5 號起訴書與市議會紀錄",
      closingQuestion: "連國民黨議員都具名檢舉告發的貪腐案，民進黨鄭文燦同樣遭起訴，藍白憑什麼硬抹檢調是政治追殺？"
    },
    agentB: {
      strategy: "發動 Whataboutism 與雙標攻擊，點名超思雞蛋、台南光電等綠營重案牛步縱放。",
      argId: "B-02",
      argTitle: "司法雙重標準辦藍白不辦綠（光電雞蛋案縱放）",
      content: "拿國民黨地方議員與鄭文燦個案做擋箭牌，掩蓋不了民進黨政府司法選擇性辦案的實質雙標！我們問民進黨：為什麼牽涉幾億元的超思進口蛋案、台南光電槍擊與圖利案、高端疫苗內線交易案，檢調辦案速度比蝸牛還慢，拖延幾年都沒下文；而遇到在野黨主席，就傾國家之力發動拂曉搜索、押人取證並求刑 28 年半？這不是『辦藍白不辦綠』的司法雙標，什麼才是雙標？",
      citation: "監察院超思雞蛋調查報告與台南光電案地檢署進度",
      closingQuestion: "為什麼綠營涉及的諸多百億案可以辦辦停停輕縱，遇到在野黨主席就最高規格押人追殺？",
      usedWhataboutism: true,
      usedDigUpHistory: true
    },
    judge: {
      newArgA: "A-03",
      newArgB: "B-02",
      strategyA: "用藍營議員告發與鄭文燦案實證說明檢調一視同仁",
      strategyB: "翻超思與光電案舊帳執行 Whataboutism 質疑司法雙標",
      legalRatingA: "🟢",
      legalRatingB: "🟡",
      factRatingA: "🟢",
      factRatingB: "🟢",
      conceptShiftA: 0,
      conceptShiftB: 1,
      whataboutismA: 0,
      whataboutismB: 1,
      standardShiftA: 0,
      standardShiftB: 1,
      doubleStandardA: 0,
      doubleStandardB: 1,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 1,
      attackScoreA: 9,
      attackScoreB: 8,
      defenseScoreA: 8,
      defenseScoreB: 6,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "A-03 指出本案起訴源頭係藍營民代告發及鄭文燦同遭聲押之客觀物證，精準反制 B-02 的政治迫害論述。"
    },
    resourceA: 85,
    resourceB: 74,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  },
  {
    roundNumber: 4,
    agentA: {
      strategy: "提出木可公關與眾望基金會千萬元公益侵占，控訴背棄支持者政治獻金信任。",
      argId: "A-04",
      argTitle: "政治獻金轉入木可與眾望實質侵占背信",
      content: "柯文哲不只在京華城案圖利收賄，更在政治獻金上背棄全台灣小額捐款支持者的信任！競選團隊將數千萬元政治獻金轉入柯私設的『木可公關』與『眾望基金會』，甚至以授權金名義洗入個人口袋！台北地院一審判決明確認定柯文哲與李文宗共同構成《刑法》公益侵占罪與背信罪，判刑 3 年 6 個月！把支持者的救命捐款當作個人金庫，這是最嚴重的道德與法律背叛！",
      citation: "台北地方法院 113 年矚重訴字第 1 號判決書與金流帳冊",
      closingQuestion: "把支持者的小額政治獻金洗入私設公司侵占私用，柯文哲還有何廉能公信可言？"
    },
    agentB: {
      strategy: "說明木可公司與競務授權屬商業範疇，柯文哲無公益侵占犯意與實質利益。",
      argId: "B-05",
      argTitle: "木可公關與競務支出授權合約缺乏侵占犯意",
      content: "民進黨少拿政治獻金抹黑！木可公司係依法成立之商業公司，負責承辦競選周邊商品開發、肖像權授權與活動造勢。競選團隊與木可公司簽有合法授權與代收款項合約，所有資金往來皆由競總財務長李文宗依商業慣例處理，柯文哲主席並未參與微觀帳務細節，更無侵占公款入己之犯罪意圖！檢方將商業授權款項硬扣上『公益侵占』，完全是擴大解釋法條！",
      citation: "柯文哲競選總部與木可公司授權合約書",
      closingQuestion: "合法商業授權與代收代付款項，何來公益侵占犯意？這不是政治入人於罪是什麼？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-04",
      newArgB: "B-05",
      strategyA: "引地院判決公益侵占成立，抨擊政治獻金轉入私設公司侵占背信",
      strategyB: "主張木可公司係合法商業授權合約，柯無侵占犯意",
      legalRatingA: "🟢",
      legalRatingB: "🟡",
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
      attackScoreA: 9,
      attackScoreB: 7,
      defenseScoreA: 8,
      defenseScoreB: 7,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "A-04 拿出一審法院認定木可與眾望金流公益侵占成立之判決結果，B-05 訴諸商業授權合約無犯意抗辯力道不足。"
    },
    resourceA: 80,
    resourceB: 66,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  },
  {
    roundNumber: 5,
    agentA: {
      strategy: "強調自創 20% 容積獎勵超越都市計畫法授權底線，實質圖利財團百億利益。",
      argId: "A-05",
      argTitle: "自創20%容積獎勵超越都市計畫法授權底線",
      content: "京華城案的核心就是為特定財團量身打造的違法圖利！都市計畫法與台北市容積獎勵辦法明文規定獎勵項目，京華城既非都市更新，亦非老舊危樓，都委會竟自創『韌性城市』、『智慧建築』等名稱額外給予 20% 容積獎勵，使容積率由 560% 飆到 840%！監察院調查報告已明確糾正都發局『創設獎勵項目違反法律保留原則』！這不是圖利威京集團上百億商業利益，什麼才是圖利？",
      citation: "監察院 113 糾字第 008 號糾正案文",
      closingQuestion: "監察院調查明確指出自創 20% 容積獎勵違反法律保留原則，藍白陣營還要替威京百億圖利背書嗎？"
    },
    agentB: {
      strategy: "主張威京人頭 210 萬係合規具名申報政治獻金，非對價賄款。",
      argId: "B-04",
      argTitle: "210萬政治獻金係合規捐贈非對價賄款",
      content: "檢方硬把合法政治獻金抹黑成賄款！威京集團幹部個人捐款 210 萬元，完全依法具名申報於監察院政治獻金專戶，金額符合法定捐贈上限，所有金流完全公開透明！如果這叫『收賄』，那民進黨建黨至今收受幾十億企業幹部的政治獻金，難道每一筆都是收賄對價嗎？檢方把合法的政治捐贈與都市計畫劃上等號，完全是欲加之罪、何患無辭！",
      citation: "監察院政治獻金申報公開平台紀錄",
      closingQuestion: "依法具名申報的合法政治獻金被抹黑成收賄，民進黨自己收受企業政治獻金是不是也是收賄？",
      usedWhataboutism: true,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-05",
      newArgB: "B-04",
      strategyA: "引用監察院糾正文指出自創 20% 容積獎勵違反法律保留原則圖利百億",
      strategyB: "強調 210 萬係合規申報政治獻金，質疑檢方連結對價關係係欲加之罪",
      legalRatingA: "🟢",
      legalRatingB: "🟡",
      factRatingA: "🟢",
      factRatingB: "🟢",
      conceptShiftA: 0,
      conceptShiftB: 0,
      whataboutismA: 0,
      whataboutismB: 1,
      standardShiftA: 0,
      standardShiftB: 0,
      doubleStandardA: 0,
      doubleStandardB: 0,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 0,
      attackScoreA: 8,
      attackScoreB: 8,
      defenseScoreA: 8,
      defenseScoreB: 7,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "A-05 以監察院糾正案文證明自創 20% 容積獎勵違反法律保留原則，法律論述說服力顯著高於 B-04 的政治獻金辯解。"
    },
    resourceA: 75,
    resourceB: 58,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  },
  {
    roundNumber: 6,
    agentA: {
      strategy: "控訴個人貪腐不能以黨威與政治動員綁架司法，維護法治國家分權底線。",
      argId: "A-06",
      argTitle: "個人貪腐行為不能以黨威與政治動員綁架司法",
      content: "柯文哲個人收賄、圖利與侵占遭司法一審判刑 17 年，民眾黨卻動員全黨力量、號召支持者包圍法院與檢察署，甚至在立法院預算案上進行政治報復！這是在用政治動員綁架司法獨立、破壞法治國家的民主根基！民主法治國家沒有任何政治明星可以超越法律，面對一審判決，請柯文哲與民眾黨停止撕裂社會，回歸二審司法程序正當審理！",
      citation: "司法院聲明與法治國家分權原則",
      closingQuestion: "用政黨動員與街頭抗爭攻擊一審司法判決，民眾黨難道主張黨主席貪腐可以享有司法豁免權？"
    },
    agentB: {
      strategy: "痛批長達 365 天押人取證與天價交保侵害無罪推定與人身自由比例原則。",
      argId: "B-06",
      argTitle: "政治性長年羈押侵害無罪推定與人身自由比例原則",
      content: "民進黨少把國家迫害包裝成法治國家！將一個在野黨主席羈押禁見近 1 年、限制人身自由長達 365 天，最後還要天價 7,000 萬元交保並戴上電子腳鐐，這在憲法比例原則上完全是不對等的政治懲罰！《憲法》第 8 條保障人身自由與無罪推定原則，檢方在未定讞前就把被告押到身心俱疲、破壞防禦權，這就是徹頭徹尾的綠色權力迫害！",
      citation: "《憲法》第 8 條與刑事訴訟法羈押比例原則",
      closingQuestion: "羈押近一年押人取證、開出 7,000 萬天價保釋金，民進黨難道敢否認這不是政治過度懲罰嗎？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-06",
      newArgB: "B-06",
      strategyA: "呼籲尊重分權體制，抨擊政治動員包圍法院綁架司法",
      strategyB: "舉 365 天羈押與天價 7,000 萬保釋金，控訴違反憲法比例原則與無罪推定",
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
      attackScoreA: 9,
      attackScoreB: 8,
      defenseScoreA: 8,
      defenseScoreB: 7,
      roundWinner: "🔵 Agent A 本回合優勢",
      winnerReason: "雖然 B-06 在長年羈押與憲法比例原則上形成強烈抗辯，但全案 Agent A 憑藉地院一審判決 17 年判決主文、林洲民都發局簽呈警示物證、210 萬人頭金流對價與木可/眾望公益侵占等連貫法理物證，裁判判定 🔵 Agent A（民進黨／執政陣營）於柯文哲案取得最終本案優勢與勝利！"
    },
    resourceA: 70,
    resourceB: 50,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  }
];

export const mirrorPatternsData: MirrorPattern[] = [
  {
    id: "M-01",
    patternTitle: "雙標爭議：司法獨立與政治迫害之立場對換",
    agentAStatement: "一審宣判 17 年證實犯行明確，司法機關依法審判，各界應尊重司法獨立與法治分權。",
    agentBStatement: "檢調押人取證、洩密媒體未審先判，且對超思雞蛋與光電重案牛步縱放，係選擇性政治追殺。",
    explanation: "對比兩黨在己方或敵對陣營面對司法調查時，對『尊重司法』與『政治迫害』立場之立場切換。"
  },
  {
    id: "M-02",
    patternTitle: "話術與決策辯護：市長簽核蓋章知情與分層負責授權",
    agentAStatement: "前局長林洲民簽呈白紙黑字警示無法源，柯親自批示蓋章並召開便當會交辦，『蓋章不知道』係卸責話術。",
    agentBStatement: "京華城容積率獎勵經都委會專家合議審議通過，屬都市計畫專業裁量，市長依法蓋章屬分層負責無圖利不法。",
    explanation: "反映行政首長在面臨圖利或違法核定爭議時，對『首長實質交辦主導』與『官僚分層負責授權』之論述攻防。"
  },
  {
    id: "M-03",
    patternTitle: "翻舊帳爭議：鄭文燦案實證 vs 綠營弊案縱放（超思／光電／高端）",
    agentAStatement: "民進黨前桃園市長鄭文燦同樣遭聲押起訴求刑 12 年，證明檢調跨黨派一視同仁、絕無雙標。",
    agentBStatement: "鄭文燦個案係派系鬥爭結果，超思雞蛋、台南光電槍擊與高端內線交易案拖延數年不起訴，凸顯辦藍白不辦綠。",
    explanation: "展現雙方引用過往同類司法案件，各自進行『司法一視同仁』與『選擇性雙標辦案』之對立歸因。"
  },
  {
    id: "M-04",
    patternTitle: "Whataboutism / 政治獻金合法申報 vs 侵占私用洗錢",
    agentAStatement: "政治獻金轉入私設木可公司與眾望基金會，一審認定構成公益侵占與背信，背棄支持者信任。",
    agentBStatement: "威京幹部 210 萬個人捐款依法申報於政治獻金專戶，屬合法捐贈，若這叫收賄，民進黨收企業獻金亦屬收賄。",
    explanation: "展現雙方對『政治獻金專戶流向』係『公益侵占背信』還是『合法申報與商業授權』之立場攻防。"
  }
];
