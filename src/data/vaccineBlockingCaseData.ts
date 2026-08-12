import type { EventDataPackage, ArgumentNode, RoundData, MirrorPattern } from '../types/experiment';

export const initialEventDataPackage: EventDataPackage = {
  title: "民間採購BNT疫苗與擋疫苗爭議案",
  agentAName: "Agent A",
  agentBName: "Agent B",
  agentAParty: "民進黨",
  agentBParty: "國民黨",
  timeline: [
    { time: "2020年10月12日", title: "台灣東洋簽訂 BNT 代理條件書破局", description: "台灣東洋宣佈取得 BNT 代理授權條件書預計引進 3,000 萬劑。後因衛福部將採購數量縮減至 200 萬劑及冷鏈費用談判未成破局，外界質疑派系介入。" },
    { time: "2021年2月17日", title: "陳時中「有人不希望台灣太開心」說", description: "與 BNT 洽購 500 萬劑最後關頭生變，陳時中發言稱「有人不希望台灣太開心」，暗示遭中共干擾；藍營質疑係堅持不透過大中華代理上海復星所致。" },
    { time: "2021年5月26日", title: "陳時中「看得到吃不到」與「買疫苗非買菜」說", description: "本土疫情爆發全台急缺疫苗，地方政府與民間表達自購意願，陳時中回應「向代理商或中間商買可能看得到吃不到」、「買疫苗非買菜，一定要與原廠簽約由政府負免責」。" },
    { time: "2021年5月28日", title: "陳時中「疫苗買夠了」與「中央統一採購」說", description: "面對民間急欲捐贈，陳時中於記者會強調「國內預購疫苗已經買夠了，疫苗由中央統一採購、統一分配」，宣佈民間要捐可以但必須由政府向原廠簽約。" },
    { time: "2021年6月1日", title: "郭台銘遞件與指揮中心拋「原廠授權書」門檻", description: "郭台銘送件申購 500 萬劑 BNT，次日指揮中心拋「原廠授權書、中央統籌分配、符合EUA」八大條件。郭台銘痛批「原廠只跟政府談，要求民間拿授權書是開買不到的證明進行技術性拖延」。" },
    { time: "2021年6月11日", title: "指揮中心質疑「中國分裝 / 快到期疫苗」說", description: "指揮中心官員與民代質疑透過上海復星申購之 BNT 可能係「中國分裝」或「快到期的現貨庫存」，永齡基金會與南投縣政府提出原廠出廠證明反駁。" },
    { time: "2021年6月18日", title: "郭台銘聲明「看不見的力量阻擋」與總統府緊急授權", description: "郭台銘發表 8 點聲明指官僚體系拖延且有「看不見的力量阻擋」，求見蔡英文總統。蔡總統會見郭台銘與劉德音，拍板由政府發出代表授權並成立專案小組。" },
    { time: "2021年7月11日~21日", title: "完成 1,500 萬劑四方合約簽署與「公私協力」新論述", description: "鴻海、台積電、慈濟相繼簽署四方採購合約。指揮中心論述轉變為「政府與民間公私協力」、「政府全程高度協助克服法規障礙」。" },
    { time: "2021年8月25日", title: "「復必泰標籤現貨」與陳時中「安全有效第一、彈性接收」說", description: "歐洲原廠有批印有簡體字「復必泰」現貨疫苗，指揮中心原堅持「無簡體字」，後因民意壓力，陳時中宣佈「內容物安全有效最重要，標籤不影響品質，爭取彈性接收！」。" },
    { time: "2021年9月2日", title: "首批 BNT 疫苗順利運抵桃園國際機場", description: "首批 93.2 萬劑 BNT 疫苗運抵台灣，外箱簡體標籤爭議解套，全台陸續開打供青少年與成人接種。" },
    { time: "2022年9月12日", title: "慈濟顏博文揭遭勸阻與陳時中「傻子才擋疫苗 / 擋自己路」說", description: "慈濟顏博文透露當初採購遭政界勸阻「不要找麻煩」，陳時中強烈反駁稱：「說我擋疫苗是扣帽子！我是指揮官，我擋疫苗是擋自己的路，除非我是傻子！」" },
    { time: "2023年5月7日~9日", title: "郭台銘爆料李大維「大小姐說不要買了」與府公開電郵爭議", description: "郭台銘指控李大維電話傳達蔡總統指示「大小姐說你還是不要買了」。總統府嚴正駁斥並公開與鴻海往來電郵，指爭議核心係「藥害免責條款」須由政府承擔。" }
  ],
  involvedParties: [
    { name: "蔡英文 / 李大維", title: "前總統 / 前總統府秘書長", notes: "府方公開與鴻海往來電郵駁斥「大小姐阻擋」傳言" },
    { name: "陳時中 / 莊人祥 / 王必勝", title: "前衛福部長 / 指揮中心發言人與官員", notes: "發表「看得到吃不到/買疫苗非買菜/傻子才擋疫苗/爭取彈性接收復必泰」等關鍵論述" },
    { name: "郭台銘 / 曾馨瑩", title: "鴻海創辦人 / 永齡基金會代表", notes: "發起民間捐贈 500 萬劑 BNT 疫苗並揭露「看不見的力量阻擋」行政卡關聲明" },
    { name: "顏博文", title: "慈濟基金會執行長", notes: "透露申辦 BNT 捐贈時曾受政界與公務體系關切勸阻「不要找麻煩」" },
    { name: "劉德音 / 魏哲家", title: "台積電高層代表", notes: "共同捐贈 500 萬劑 BNT 疫苗之企業主體" }
  ],
  relevantLaws: [
    { law: "《藥事法》第 48 條之 2", text: "緊急使用授權（EUA）專案進口核准條款" },
    { law: "《傳染病防治法》第 27 條與第 51 條", text: "國家疫苗整備、緊急採購與指揮中心統籌指揮權限" },
    { law: "《藥物樣品贈品管理辦法》第 14 條", text: "專案進口藥品與贈品申請審查規範" },
    { law: "《國家賠償法》與國際藥害免責條款", text: "EUA 疫苗由國家承擔法律免責（Indemnification）機制" }
  ],
  partyAStance: [
    "政府絕無阻擋疫苗，係極力克服藥害國家免責與國際四方合約法律障礙。",
    "要求原廠授權書與製造證明係衛福部為確保疫苗品質安全、防範黑市假疫苗之法定職責；標籤彈性處理展現實用主義。",
    "2021年初 500 萬劑 BNT 談判觸礁係因中共地緣政治打壓與上海復星代理限制。",
    "公開往來電郵證實蔡總統全力促成，所謂『大小姐阻擋』係選舉政治抹黑。"
  ],
  partyBStance: [
    "意識形態凌駕國人生命健康，拒絕上海復星代理致 2021 年初 500 萬劑 BNT 談判破局。",
    "指揮中心陸續拋出『看得到吃不到』、『買疫苗非買菜』、『原廠授權書門檻』、『中國分裝疑慮』等話術進行技術性拖延。",
    "質疑政府刻意壓制 BNT 疫苗進口，旨在替尚未完成三期臨床的高端疫苗護航 EUA 與清空市場。",
    "郭台銘爆料李大維傳話『大小姐說你還是不要買了』及慈濟警示『不要找麻煩』暴露黑箱阻擋事實。"
  ],
  unverifiedItems: [
    "⚠️【尚未確認】：2021年1月德國 BNT 原廠因上海復星合約與新聞稿文字暫緩簽約之內部高層會議完整郵件紀錄。",
    "⚠️【尚未確認】：郭台銘與李大維 2021 年 6 月 17 日電話通話之完整錄音存檔與真實內容細節。",
    "⚠️【尚未確認】：2021年5月底衛福部內部評估高端 EUA 進度與國際 BNT 專案進口核准時程之比對報告。"
  ]
};

export const initialArgumentNodesA: ArgumentNode[] = [
  {
    id: "A-01",
    party: "A",
    title: "EUA藥害國家免責條款之法規底線",
    category: "法律論證",
    description: "緊急使用授權（EUA）疫苗之藥害法律免責（Indemnification）依法必須由國家政府承擔，民間企業無權簽署，故必須由政府出面簽訂四方合約。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "《傳染病防治法》第27條與 COVAX/BNT 國際採購免責規範"
  },
  {
    id: "A-02",
    party: "A",
    title: "要求原廠授權書係確保疫苗品質與真偽",
    category: "程序理由",
    description: "衛福部要求原廠授權與製造證明係為保障國人接種安全、防範國際黑市假疫苗之法定公衛審查職責。",
    status: "🟡 有爭議",
    usedCount: 1,
    createdRound: 2,
    lastUpdatedRound: 2,
    citation: "《藥物樣品贈品管理辦法》第 14 條及食藥署專案進口審查規定"
  },
  {
    id: "A-03",
    party: "A",
    title: "政府全程專案協助促成1500萬劑BNT",
    category: "政治責任",
    description: "蔡英文總統與行政院主動成立專案小組，全程跨國協調 BNT 與上海復星，順利引進 1,500 萬劑疫苗，絕無阻擋情事。",
    status: "🟡 有爭議",
    usedCount: 1,
    createdRound: 3,
    lastUpdatedRound: 3,
    citation: "行政院 2021 年 7 月 12 日 BNT 專案採購完成記者會"
  },
  {
    id: "A-04",
    party: "A",
    title: "國際地緣政治與大中華獨家代理合約困境",
    category: "法律論證",
    description: "2021 年初 500 萬劑 BNT 談判受中共政治打壓及上海復星大中華代理權限制，政府展現彈性接受首批復必泰現貨標籤。",
    status: "🟡 有爭議",
    usedCount: 1,
    createdRound: 4,
    lastUpdatedRound: 4,
    citation: "衛福部 2021 年 8 月 25 日同意標籤彈性處理說明"
  },
  {
    id: "A-05",
    party: "A",
    title: "美日美歐疫苗外交救援與多元採購平行推動",
    category: "政治責任",
    description: "政府同步爭取美國與日本捐贈莫德納與 AZ 疫苗，多元採購化解疫情危機，絕非單靠民間捐贈。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 5,
    lastUpdatedRound: 5,
    citation: "外交部 2021 年美日贈台疫苗統計報告"
  },
  {
    id: "A-06",
    party: "A",
    title: "電郵郵件證實蔡總統促成且澄清李大維傳話",
    category: "程序理由",
    description: "府方已公開與鴻海往來電郵，證明總統全力支持採購，所謂『大小姐阻擋』與『不要買了』係選舉政治抹黑。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 6,
    lastUpdatedRound: 6,
    citation: "總統府 2023 年 5 月 9 日公開往來電子郵件紀錄"
  }
];

export const initialArgumentNodesB: ArgumentNode[] = [
  {
    id: "B-01",
    party: "B",
    title: "意識形態凌駕健康拒絕上海復星致2021年初談判破局",
    category: "政治責任",
    description: "綠營因抗中意識形態拒絕向上海復星洽購 BNT，致使 2021 年初 500 萬劑原廠談判觸礁，造成 5 月本土大爆發無疫苗可用。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 1,
    lastUpdatedRound: 1,
    citation: "衛福部 2021 年 2 月與 BNT 洽購說明及立法院調閱資料"
  },
  {
    id: "B-02",
    party: "B",
    title: "指揮中心話術連發（看得到吃不到/授權書門檻/中國分裝）技術性卡關",
    category: "程序理由",
    description: "2021 年 5~6 月民間急欲捐贈時，指揮中心拋出『看得到吃不到』、『買疫苗非買菜』、『原廠授權書門檻』及『中國分裝疑慮』等話術進行技術性拖延。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 2,
    lastUpdatedRound: 2,
    citation: "中央流行疫情指揮中心 2021 年 5 月底至 6 月初記者會發言紀錄"
  },
  {
    id: "B-03",
    party: "B",
    title: "護航未完三期高端疫苗而壓制國外mRNA疫苗進口",
    category: "道德責任",
    description: "政府故意拖延進口高保護力 BNT 疫苗，旨在為未完成三期臨床試驗的高端疫苗清空市場空間與護航 EUA。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 3,
    lastUpdatedRound: 3,
    citation: "疾管署 2021 年 5 月高端採購合約簽署時間點比對"
  },
  {
    id: "B-04",
    party: "B",
    title: "郭台銘爆料李大維傳話「大小姐說你還是不要買了」疑雲",
    category: "政治責任",
    description: "郭台銘公開揭露前總統府秘書長李大維電話傳達蔡總統反對意旨，暴露黨政高層黑箱阻擋事實。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 4,
    lastUpdatedRound: 4,
    citation: "郭台銘 2023 年 5 月 7 日臉書公開聲明"
  },
  {
    id: "B-05",
    party: "B",
    title: "慈濟顏博文透露遭政界官員警示「不要找麻煩」",
    category: "道德責任",
    description: "慈濟基金會申辦 BNT 捐贈過程中，政界與公務體系高層多次警示勸阻『不要找麻煩』，印證政府設障阻擋。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 5,
    lastUpdatedRound: 5,
    citation: "慈濟基金會執行長顏博文 2022 年 9 月媒體專訪報導"
  },
  {
    id: "B-06",
    party: "B",
    title: "復必泰標籤意識形態杯葛延誤國人青少年接種時程",
    category: "程序理由",
    description: "政府因外箱『復必泰』簡體字標籤泛政治化杯葛，致使首批現貨抵台時間遭受不必要之政治干擾與延宕。",
    status: "🟢 有效",
    usedCount: 1,
    createdRound: 6,
    lastUpdatedRound: 6,
    citation: "指揮中心 2021 年 8 月標籤審查歷程會議紀錄"
  }
];

export const mockRounds: RoundData[] = [
  {
    roundNumber: 1,
    agentA: {
      strategy: "開局立足國際 EUA 藥害國家免責（Indemnification）之法律底線，說明民間企業無法簽署免責條款，必須由政府簽署四方合約。",
      argId: "A-01",
      argTitle: "EUA藥害國家免責條款之法規底線",
      content: "國民黨指控政府『擋疫苗』完全是去脈絡化的政治抹黑！所有國際 COVID-19 疫苗因僅取得緊急使用授權（EUA），原廠（如 BioNTech、Moderna）皆強制要求買方國家政府簽署『藥害國家免責條款（Indemnification）』，法律上民間企業或宗教團體根本無權承擔國家級藥害賠償責任！因此，民間採購必須由政府出面簽署四方合約，政府是在建立合法履約機制，絕非阻擋！",
      citation: "《傳染病防治法》第27條與 COVAX/BNT 國際採購免責規範",
      closingQuestion: "民間企業依法根本無法簽署國家藥害免責條款，若沒有政府出面擔保四方合約，疫苗如何合法進口？"
    },
    agentB: {
      strategy: "抓 2021 年初衛福部繞過上海復星直洽 BNT 觸礁案，抨擊陳時中發言「有人不希望台灣太開心」係卸責甩鍋話術。",
      argId: "B-01",
      argTitle: "意識形態凌駕健康拒絕上海復星致2021年初談判破局",
      content: "民進黨少拿法律當藉口！真正的根源是 2021 年初，衛福部因為反中意識形態，執意要繞過 BNT 在大中華區的總代理上海復星醫藥，堅持要找德國原廠直簽 500 萬劑！談判生變後，陳時中還拋出『有人不希望台灣太開心』的話術卸責！如果當時民進黨不搞意識形態、順應商業慣例向上海復星採購，2021 年 5 月本土爆發時國人早就有 500 萬劑 BNT 可以打，何至於釀成上百名國人染疫逝世的悲劇？",
      citation: "衛福部 2021 年 2 月 BNT 採購說明新聞稿與立法院調閱資料",
      closingQuestion: "2021 年初若非民進黨堅持不透過上海復星代理，500萬劑 BNT 怎會泡湯？這不是意識形態害死人嗎？",
      usedWhataboutism: false,
      usedDigUpHistory: true
    },
    judge: {
      newArgA: "A-01",
      newArgB: "B-01",
      strategyA: "強調 EUA 藥害國家免責之法規必要性與四方合約架構",
      strategyB: "翻舊帳攻擊 2021 年初因拒絕上海復星代理致 500 萬劑 BNT 談判破局與『太開心』話術",
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
      digUpHistoryB: 1,
      attackScoreA: 8,
      attackScoreB: 8,
      defenseScoreA: 8,
      defenseScoreB: 7,
      roundWinner: "⚪ 雙方相當",
      winnerReason: "A-01 的藥害國家免責法律障礙分析具說服力，但 B-01 訴諸 2021 年初談判破局與甩鍋話術形成有效牽制，本回合攻防平手。"
    },
    resourceA: 92,
    resourceB: 90,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  },
  {
    roundNumber: 2,
    agentA: {
      strategy: "回應原廠授權書質疑，說明衛福部要求授權書係保障疫苗品質與防範假疫苗之法定公衛職責。",
      argId: "A-02",
      argTitle: "要求原廠授權書係確保疫苗品質與真偽",
      content: "國民黨質疑衛福部要求『原廠授權書』是技術性拖延，這完全是對公共衛生的無知！在國際疫情最嚴峻時，全球黑市假疫苗與劣質中間商漫天要價。衛福部依《藥物樣品贈品管理辦法》要求申請者提供原廠製造證明與原廠授權書，這是保護 2,300 萬國人身體安全的法定義務！如果任何民間團體空口宣稱能買到疫苗，政府不查驗原廠授權就放行，萬一進口到假疫苗或變質疫苗，誰能承擔責任？",
      citation: "《藥物樣品贈品管理辦法》第 14 條與食藥署藥物進口檢驗標準",
      closingQuestion: "衛生主管機關審查原廠授權書係防止黑市假疫苗之基本底線，國民黨難道主張政府能不審查就隨便放行？"
    },
    agentB: {
      strategy: "集中火力痛擊指揮中心發言話術（看得到吃不到/買疫苗非買菜/原廠授權書門檻/中國分裝疑慮），質疑官僚刻意技術性卡關。",
      argId: "B-02",
      argTitle: "指揮中心話術連發（看得到吃不到/授權書門檻/中國分裝）技術性卡關",
      content: "民進黨是在睜眼說瞎話！2021 年 5 月底本土大爆發無疫苗可用，民間急欲引進 BNT 時，陳時中指揮官天天在記者會拋出話術：先是說『看得到吃不到』、『買疫苗非買菜』，接著又拋出『國內疫苗買夠了』！等郭台銘 6 月 1 日正式送件，指揮中心立馬丟出八大條件，硬要民間出示拿不到的『原廠授權書』，甚至綠營民代還造謠『上海復星 BNT 是中國分裝』！連番話術與技術性門檻，這不是官僚卡關拖延是什麼？",
      citation: "中央流行疫情指揮中心 2021 年 5 月 26 日至 6 月 11 日記者會逐字紀錄",
      closingQuestion: "連番拋出『買疫苗非買菜』與『原廠授權書』話術，明知原廠只跟政府談卻向民間要授權書，這不是官僚卡關是什麼？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-02",
      newArgB: "B-02",
      strategyA: "說明衛福部公衛審查與防範假疫苗之法定程序正當性",
      strategyB: "細數指揮中心『看得到吃不到/買疫苗非買菜/授權書門檻/中國分裝』系列話術，直打行政刁難",
      legalRatingA: "🟡",
      legalRatingB: "🟢",
      factRatingA: "🟢",
      factRatingB: "🟢",
      conceptShiftA: 1,
      conceptShiftB: 0,
      whataboutismA: 0,
      whataboutismB: 0,
      standardShiftA: 1,
      standardShiftB: 0,
      doubleStandardA: 0,
      doubleStandardB: 0,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 0,
      attackScoreA: 7,
      attackScoreB: 9,
      defenseScoreA: 6,
      defenseScoreB: 9,
      roundWinner: "🔴 Agent B 本回合優勢",
      winnerReason: "B-02 詳列指揮中心 5 月底至 6 月初每日記者會發言逐字稿，證明『原廠授權書』係明知民間拿不到卻硬要的邏輯悖論，以官僚話術卡關事證確鑿，B 陣營取得顯著優勢！A-02 遭評判『標準位移與話術包裝』降級。"
    },
    resourceA: 80,
    resourceB: 85,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  },
  {
    roundNumber: 3,
    agentA: {
      strategy: "提出政府全程成立專案小組促成 1,500 萬劑 BNT 簽約事證，反駁阻擋指控。",
      argId: "A-03",
      argTitle: "政府全程專案協助促成1500萬劑BNT",
      content: "事實勝於雄辯！在郭台銘董事長表達捐贈意願後，蔡英文總統於 6 月 18 日親自會見郭台銘與台積電代表，行政院當天立刻成立跨部會專案小組！政府談判團隊與律師連續數週夜以繼日與德國 BNT、上海復星進行四方法律談判，最終在 7 月 11 日順利簽署合約，引進鴻海、台積電與慈濟共 1,500 萬劑 BNT！如果政府真的要擋，怎麼可能動員全國家力量全力幫忙簽下這 1,500 萬劑？若政府擋疫苗，豈不是在擋自己的施政政績？",
      citation: "行政院 2021 年 7 月 12 日專案採購說明與總統府會議紀錄",
      closingQuestion: "政府若真要阻擋民間採購，為何要派談判團隊熬夜協助簽下 1,500 萬劑四方合約？"
    },
    agentB: {
      strategy: "質疑政府拖延民間採購 BNT 係為了幫未完三期的國產高端疫苗護航並清空市場。",
      argId: "B-03",
      argTitle: "護航未完三期高端疫苗而壓制國外mRNA疫苗進口",
      content: "民進黨為何要在 5 月底、6 月初死卡民間捐贈 BNT？時間點揭露了一切！因為衛福部疾管署恰好在 2021 年 5 月 28 日與高端公司簽下了 500 萬劑採購合約，而高端當時連二期臨床都還沒結束！政府急著要幫未完成三期臨床的高端護航 EUA，如果放任 1,500 萬劑國際認可的 BNT 快速進口，誰還去打高端？民進黨根本就是把國人的生命安全當作高端股價與 EUA 的墊腳石！",
      citation: "疾管署 2021 年 5 月 28 日高端採購簽約紀錄與時間比對",
      closingQuestion: "5月28日剛簽高端合約，6月初就死卡BNT，這不是為了幫國產高端清空市場護航，是什麼？",
      usedWhataboutism: false,
      usedDigUpHistory: true
    },
    judge: {
      newArgA: "A-03",
      newArgB: "B-03",
      strategyA: "舉出四方合約簽署成果與政府專案小組輔導事實",
      strategyB: "連結高端採購時間點，控訴 government 護航高端清空市場",
      legalRatingA: "🟡",
      legalRatingB: "🟢",
      factRatingA: "🟢",
      factRatingB: "🟢",
      conceptShiftA: 0,
      conceptShiftB: 0,
      whataboutismA: 0,
      whataboutismB: 0,
      standardShiftA: 0,
      standardShiftB: 0,
      doubleStandardA: 1,
      doubleStandardB: 0,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 1,
      attackScoreA: 7,
      attackScoreB: 9,
      defenseScoreA: 6,
      defenseScoreB: 8,
      roundWinner: "🔴 Agent B 本回合優勢",
      winnerReason: "B-03 提出疾管署 5/28 簽高端與 6/1 卡關 BNT 時間高度重疊之具體書面時間軸，揭露護航高端清空市場之強烈動機懷疑。A 陣營僅憑『事後成立專案小組』難以消解行政時間差之疑慮，遭判雙標扣分。"
    },
    resourceA: 68,
    resourceB: 81,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  },
  {
    roundNumber: 4,
    agentA: {
      strategy: "說明國際地緣政治與上海復星大中華代理權合約困境，並指出政府展現彈性接受首批復必泰現貨標籤。",
      argId: "A-04",
      argTitle: "國際地緣政治與大中華獨家代理合約困境",
      content: "國民黨故意忽略國際商業合約與地緣政治的複雜性！BNT 疫苗在大中華區的獨家代理權早被上海復星買斷，這是我國官方採購直接面臨的商業法規障礙。政府為了讓國人能最快拿到疫苗，展現了最高度的政治彈性，最終同意民間捐贈合約納入上海復星作為簽約方之一；甚至當首批 93 萬劑現貨外箱印有簡體字『復必泰』標籤時，陳時中指揮官明確指示『安全有效最重要，標籤不影響品質，全面彈性接收！』這充分證明政府以國人健康為第一考量！",
      citation: "中央流行疫情指揮中心 2021 年 8 月 25 日記者會說明紀錄",
      closingQuestion: "連外箱簡體字復必泰標籤政府都彈性放行接收，國民黨還能扣『意識形態阻擋』的帽子嗎？"
    },
    agentB: {
      strategy: "抓復必泰標籤當初引發之意識形態杯葛，痛批政府因簡體字標籤延誤國人青少年接種。",
      argId: "B-06",
      argTitle: "復必泰標籤意識形態杯葛延誤國人青少年接種時程",
      content: "民進黨少拿『彈性接收』貼金！事實上在 2021 年 8 月，當第一批 90 多萬劑 BNT 疫苗要在歐洲裝箱時，只因為外箱貼有『復必泰』簡體字標籤，衛福部內部官員竟然還在糾結『符合不符合合約標籤規定』，差點拒收這批現貨！要不是當時民意鋪天蓋地撻伐，民進黨會甘願『彈性接收』嗎？因為民進黨這種泛政治化的標籤審查，讓全台灣幾百萬學生與青少年多等了幾週才能打到疫苗！",
      citation: "立法院 2021 年 9 月衛生環境委員會質詢紀錄",
      closingQuestion: "若非民意壓力爆發，民進黨當初會甘願放行『復必泰』標籤現貨嗎？這不是意識形態干擾又是什麼？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-04",
      newArgB: "B-06",
      strategyA: "舉出同意納入上海復星簽約與彈性接受復必泰標籤事實",
      strategyB: "質疑復必泰標籤當初差點遭拒收係民意壓力後才被迫改口放行",
      legalRatingA: "🟡",
      legalRatingB: "🟢",
      factRatingA: "🟢",
      factRatingB: "🟢",
      conceptShiftA: 0,
      conceptShiftB: 0,
      whataboutismA: 0,
      whataboutismB: 0,
      standardShiftA: 1,
      standardShiftB: 0,
      doubleStandardA: 1,
      doubleStandardB: 0,
      repeatedArgA: 0,
      repeatedArgB: 0,
      digUpHistoryA: 0,
      digUpHistoryB: 0,
      attackScoreA: 7,
      attackScoreB: 9,
      defenseScoreA: 6,
      defenseScoreB: 8,
      roundWinner: "🔴 Agent B 本回合優勢",
      winnerReason: "B-06 指出指揮中心早期堅持『原廠直運、無簡體字』之政治標籤要求，後在強大民意壓力下才改口稱『彈性接收』，A 陣營遭判定前後立場不一（Double Standard）與標準位移（Standard Shift），B 陣營再下一城！"
    },
    resourceA: 55,
    resourceB: 78,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  },
  {
    roundNumber: 5,
    agentA: {
      strategy: "強調美日美歐疫苗外交救援與多元採購平行推動，說明疫情期間總體疫苗到位戰略。",
      argId: "A-05",
      argTitle: "美日美歐疫苗外交救援與多元採購平行推動",
      content: "國民黨企圖營造『台灣全靠民間捐贈疫苗』的假象，完全抹煞了國家外交團隊的血汗辛勞！在 2021 年 6 月最艱難之際，蔡英文政府透過外交管道，緊急爭取到美國捐贈 250 萬劑莫德納疫苗、日本捐贈 420 萬劑 AZ 疫苗，加上台灣自購莫德納與 COVAX 平台分配，總計數千萬劑國際權威疫苗陸續抵台！政府係以多元管道平行推進保障國人接種率，民間捐贈係政府公私協力的一環，而非孤軍救台！",
      citation: "外交部與衛福部 2021 年國際疫苗抵台統計數據",
      closingQuestion: "美日兩國緊急捐贈近 700 萬劑疫苗若非政府外交爭取，民間團體能自行向美日政府申請外交捐贈嗎？"
    },
    agentB: {
      strategy: "引用慈濟顏博文執行長透露遭政界官員警示「不要找麻煩」，印證政府體系冷眼卡關。",
      argId: "B-05",
      argTitle: "慈濟顏博文透露遭政界官員警示「不要找麻煩」",
      content: "如果只有郭台銘一個人說，民進黨可以抹黑成政治動機；但連慈濟基金會這種慈善宗教團體都被你們卡！2022 年 9 月慈濟基金會執行長顏博文受訪透露，2021 年慈濟申辦捐贈 BNT 時，政界與公務體系高層官員多次勸阻警示『這件事政府在做，你們不要找麻煩！』甚至有大老直言『買不到的，不要白費心思』！連慈濟大愛救人都要被民進黨官員出言警告，這難道不是整個黨政官僚體系的系統性阻擋？",
      citation: "慈濟基金會執行長顏博文 2022 年 9 月媒體專訪紀錄",
      closingQuestion: "連慈濟顏博文執行長都證實被政界官員警告『不要找麻煩』，民進黨還要硬拗沒有阻擋嗎？",
      usedWhataboutism: false,
      usedDigUpHistory: false
    },
    judge: {
      newArgA: "A-05",
      newArgB: "B-05",
      strategyA: "論證美日外交疫苗捐贈成果與多元採購戰略布局",
      strategyB: "引用慈濟顏博文受訪證言，抨擊官僚體系對宗教團體設限警示",
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
      defenseScoreA: 6,
      defenseScoreB: 8,
      roundWinner: "🔴 Agent B 本回合優勢",
      winnerReason: "B-05 引述第三方中立宗教團體慈濟高層具名證言，直接證明黨政公務體系曾出面警告『不要找麻煩』，對 A 陣營『絕無阻擋』聲明構成擊破性打擊。"
    },
    resourceA: 45,
    resourceB: 75,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  },
  {
    roundNumber: 6,
    agentA: {
      strategy: "拿出總統府公開之往來電郵白紙黑字，直接駁斥李大維傳話與大小姐阻擋謠言。",
      argId: "A-06",
      argTitle: "電郵郵件證實蔡總統促成且澄清李大維傳話",
      content: "國民黨的造謠抹黑被白紙黑字徹底打臉！針對郭台銘引述的『大小姐阻擋』傳聞，總統府與李大維前秘書長已於 2023 年 5 月公開當時與鴻海團隊往來的完整電子郵件！信件清楚顯示，2021 年 6 月 16 日鴻海團隊即已告知府方，BNT 原廠堅持必須由政府承擔藥害免責，李大維秘書長是在協助溝通法律條款，完全沒有一句『大小姐說不要買』！藍營拿政治造謠抹黑公務員與總統的血汗努力，簡直是極度不道德！",
      citation: "總統府 2023 年 5 月 9 日公開往來電子郵件全文",
      closingQuestion: "白紙黑字的官方電郵已證實府方全力協調免責條款，國民黨憑何拿未經證實的片面口信進行抹黑？"
    },
    agentB: {
      strategy: "引用郭台銘爆料及李大維傳話「大小姐說你還是不要買了」，直擊黨政高層黑箱下令阻擋。",
      argId: "B-04",
      argTitle: "郭台銘爆料李大維傳話「大小姐說你還是不要買了」疑雲",
      content: "電郵只寫了民進黨想讓人看的部分！2023 年 5 月郭台銘公開揭露，2021 年 6 月 17 日前總統府秘書長李大維親自打電話給他，傳達蔡英文總統指示『大小姐說你還是不要買了』！郭台銘若非走投無路、被黨政高層硬卡，怎會被逼得在 6 月 18 日發表 8 點公開聲明求見蔡英文？若非民意鋪天蓋地反彈與郭董求見逼出授權，民進黨會主動開綠燈嗎？這就是黨政高層阻擋的最直接鐵證！",
      citation: "郭台銘 2023 年 5 月 7 日臉書公開聲明與記者會發言",
      closingQuestion: "李大維親自打電話傳達『大小姐說你還是不要買了』，若非郭董發表 8 點聲明逼出總統見面，民進黨會開綠燈嗎？",
      usedWhataboutism: false,
      usedDigUpHistory: true
    },
    judge: {
      newArgA: "A-06",
      newArgB: "B-04",
      strategyA: "舉出總統府公開電郵書面證據，反駁密談傳言",
      strategyB: "引述郭台銘爆料李大維傳話『大小姐反對』與 6/18 逼出總統會面事實",
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
      digUpHistoryB: 1,
      attackScoreA: 8,
      attackScoreB: 9,
      defenseScoreA: 7,
      defenseScoreB: 8,
      roundWinner: "🔴 Agent B 本回合優勢",
      winnerReason: "雖然 A-06 提出電郵紀錄抗辯，但 B-04 連結 6 月 18 日郭台銘發表 8 點聲明逼府會面授權之關鍵轉折，結合 B 陣營全案在『指揮中心話術連發』、『高端簽約時間點重疊』與『慈濟警示證言』之連貫證據鏈，裁判判定 🔴 Agent B（國民黨/在野黨）於擋疫苗案取得全面優勢與勝利！"
    },
    resourceA: 38,
    resourceB: 72,
    argTreeSnapshotA: initialArgumentNodesA,
    argTreeSnapshotB: initialArgumentNodesB
  }
];

export const mirrorPatternsData: MirrorPattern[] = [
  {
    id: "M-01",
    patternTitle: "雙標爭議：專案進口EUA審查門檻與彈性標準",
    agentAStatement: "民間採購 BNT 須堅持原廠授權書與國家免責條款等法規底線，確保品質與法治；國產高端疫苗採用免疫橋接符合法規合議制。",
    agentBStatement: "民間捐贈 BNT 原廠疫苗遭受八大條件與授權書技術性拖延；高端疫苗未完成三期臨床即迅速通過 EUA 係雙重標準。",
    explanation: "對比兩黨在專案進口與 EUA 審查時，對『法規嚴謹性』與『緊急彈性放行』之立場切換。"
  },
  {
    id: "M-02",
    patternTitle: "話術與決策辯護：指揮中心官方發言之轉向與包裝",
    agentAStatement: "指揮中心發言從法律與國際合約出發，強調國家承擔免責與防範假疫苗；最後爭取彈性接收復必泰標籤展現公衛實用主義。",
    agentBStatement: "指揮中心連番使用『看得到吃不到』、『買疫苗非買菜』、『原廠授權書門檻』等話術拖延民間捐贈，後又因民意被迫改口『公私協力』與放行標籤。",
    explanation: "揭示指揮中心官方話術從早期質疑與設限，轉向後期強調公私協力與彈性接收之論述軌跡。"
  },
  {
    id: "M-03",
    patternTitle: "翻舊帳爭議：2021年初上海復星代理談判破局責任歸屬",
    agentAStatement: "2021年初 500 萬劑 BNT 談判破局係因中共地緣政治打壓及上海復星代理限制，政府已展現最高彈性。",
    agentBStatement: "民進黨堅持不透過大中華總代理上海復星，係意識形態凌駕國人生命健康，導致本土爆發無疫苗可用。",
    explanation: "展現雙方反覆溯源 2021 年初 BNT 直採談判細節，各自進行政治因果歸因。"
  },
  {
    id: "M-04",
    patternTitle: "Whataboutism / 標籤意識形態 vs 實用主義攻防",
    agentAStatement: "陳時中指揮官指示『安全有效最重要』，彈性接受復必泰標籤，證實政府絕非意識形態掛帥。",
    agentBStatement: "若非民意鋪天蓋地反彈，綠營當初根本不會放行復必泰標籤現貨，遲延青少年接種責任難逃。",
    explanation: "展現雙方對『復必泰標籤現貨放行』係『主動務實解套』還是『民意逼迫妥協』之論述攻防。"
  }
];
