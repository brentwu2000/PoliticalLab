import type { CaseDataBundle, EventDataPackage, ArgumentNode, RoundData, MirrorPattern } from '../../types/experiment';

export const medigenDataPackage: EventDataPackage = {
  title: "高端疫苗與新冠疫情防護爭議案",
  agentAName: "Agent A",
  agentBName: "Agent B",
  agentAParty: "民進黨",
  agentBParty: "國民黨",
  timeline: [
    { time: "2021年5月28日", title: "疾管署與高端簽署採購合約", description: "衛福部疾管署與高端疫苗簽署 500 萬劑採購合約。" },
    { time: "2021年7月18日", title: "食藥署核准高端疫苗 EUA", description: "食藥署召開專家審查會議，依《藥事法》第 48 條之 2 通過高端 EUA，採用免疫橋接標準。" },
    { time: "2021年7月19日", title: "增補保密條款", description: "疾管署與高端增補保密合約，約定保密期限 5 年。" },
    { time: "2021年8月23日", title: "高端疫苗正式開打", description: "正副總統帶頭接種高端疫苗，全台展開接種。" },
    { time: "2023年4月7日", title: "內線交易起訴（劉滄梧案）", description: "士林地檢署起訴食藥署審委劉滄梧及其妻施庭芳洩密與內線交易。" },
    { time: "2023年10月", title: "檢方60餘件圖利告發全數簽結", description: "台北地檢署針對陳時中等人涉圖利等 60 多案，查無違法全數簽結。" },
    { time: "2024年1月16日", title: "疾管署提前公開完整採購合約", description: "經高端董事會同意公開 58 頁合約，證實採購均價每劑 840 元。" }
  ],
  involvedParties: [
    { name: "陳時中", title: "前衛福部長 / 前疫情指揮官", notes: "主導疫苗採購政策，表態「我負責」" },
    { name: "王必勝 / 薛瑞元", title: "衛福部高層官員", notes: "負責疫情指揮與合約公開說明" },
    { name: "劉滄梧", title: "前食藥署專家審查委員", notes: "內線交易洩密案被告" },
    { name: "郭台銘 / 慈濟 / 台積電", title: "民間捐贈主體", notes: "發起捐贈 1,500 萬劑 BNT 疫苗" }
  ],
  relevantLaws: [
    { law: "《藥事法》第 48 條之 2", text: "緊急使用授權（EUA）專案核准條款" },
    { law: "《傳染病防治法》第 27 條與第 51 條", text: "疫苗採購、整備與緊急防疫處置授權" },
    { law: "《證券交易法》第 171 條第 1 項", text: "內線交易罪" },
    { law: "《政府採購法》第 105 條第 1 項", text: "緊急危難專案採購免招標" }
  ],
  partyAStance: [
    "國產疫苗為戰略自主物資，世紀大流行期間各國均全力扶植自家戰略疫苗。",
    "EUA 採食藥署合議制專家會議及免疫橋接標準，符合科學與法律授權。",
    "檢察機關針對告發圖利等 60 多案進行深入調查，全數簽結確定無違法不法。",
    "政府全力協助民間順利引進 1,500 萬劑 BNT，絕無阻擋民間捐贈事證。"
  ],
  partyBStance: [
    "未完成國際認可之三期臨床試驗前即通過 EUA，係拿國人健康當試驗品。",
    "審委劉滄梧洩密予妻子炒股遭起訴，證實審查過程存在重大利益輸送疑雲。",
    "2021 年 5~6 月民間欲捐 BNT 時，政府設下行政審查障礙致民間被迫自救。",
    "高端未獲 WHO 或美日認證致出國受限需補打，浪費公帑。"
  ],
  unverifiedItems: [
    "⚠️【尚未確認】：高端獲得 WHO C-TAP 共享授權後全球實質權利金分潤數字。",
    "⚠️【尚未確認】：WHO 團結試驗（Solidarity Trial）三期臨床最終報告發布排程。"
  ]
};

export const initialNodesA_Medigen: ArgumentNode[] = [
  { id: "A-01", party: "A", title: "國家疫苗戰略自主與戰略物資準備", category: "法律論證", description: "世紀大流行期間國際搶購疫苗，發展國產疫苗係維護國安與戰略自主之必要政策。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "A-02", party: "A", title: "免疫橋接法規依據與專家合議審查", category: "程序理由", description: "依《藥事法》第 48 條之 2 由食藥署合議專家會議審查通過，合規合法。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "A-03", party: "A", title: "檢方60餘件告發全數簽結無不法", category: "法律論證", description: "北檢針對陳時中等人被告發圖利等 60 多案進行深入調查，全數簽結確定。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "A-04", party: "A", title: "採購合約公開與均價每劑840元透明", category: "程序理由", description: "疾管署已提前公開 58 頁完整採購合約，均價每劑 840 元透明合理。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "A-05", party: "A", title: "政府積極協助民間採購BNT", category: "翻舊帳/歷史案例", description: "衛福部全力協助鴻海、台積電、慈濟完成原廠簽約引進 1,500 萬劑 BNT。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 }
];

export const initialNodesB_Medigen: ArgumentNode[] = [
  { id: "B-01", party: "B", title: "未完成三期臨床即核准EUA疑雲", category: "法律論證", description: "在未完成國際認可之第三期臨床試驗即強行通過 EUA，拿國人當試驗品。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "B-02", party: "B", title: "審委內線交易起訴與炒股黑箱", category: "道德責任", description: "食藥署審委劉滄梧洩密予妻子炒股遭起訴，證實審查存在重大黑箱疑雲。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "B-03", party: "B", title: "阻擋民間捐贈BNT與行政拖延", category: "Whataboutism", description: "2021 年 5~6 月民間欲捐 BNT 時，政府設下行政障礙致使民間被迫自救。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 },
  { id: "B-04", party: "B", title: "國際認證缺失與赴日補打負擔", category: "政治責任", description: "高端未獲 WHO、美國 FDA 及日本認可，致出國需補打耗費公帑。", status: "🟢 有效", usedCount: 0, createdRound: 1, lastUpdatedRound: 1 }
];

export const mockRoundsMedigen: RoundData[] = [
  {
    roundNumber: 1,
    agentA: {
      strategy: "提出國產疫苗戰略自主正當性，強調大流行期間戰略物資重要性。",
      argId: "A-01",
      argTitle: "國家疫苗戰略自主與戰略物資準備",
      content: "世紀大流行期間，國際疫苗遭大國壟斷封鎖，台灣若無國產疫苗研發能力，無異將國民生命交給外國供應鏈！發展高端國產疫苗係維護國家戰略自主與生技產業安全的核心政策！",
      citation: "國家衛生研究院 COVID-19 疫苗開發報告",
      closingQuestion: "國際大流行搶購疫苗，發展國產戰略疫苗難道不是維護國安？"
    },
    agentB: {
      strategy: "攻擊未完三期臨床即核准 EUA，質疑拿國人當小白鼠。",
      argId: "B-01",
      argTitle: "未完成三期臨床即核准EUA疑雲",
      content: "民進黨少拿戰略自主當遮羞布！高端在未完成國際認可之三期臨床試驗、缺乏實質防護力保護率數據情況下，指揮中心就火速給予 EUA，這是在拿全台灣二千三百萬人的生命健康當實驗品！",
      citation: "食藥署專家會議逐字稿爭議段落",
      closingQuestion: "連三期臨床都沒做完就核准EUA，這算什麼科學防疫？"
    },
    judge: {
      newArgA: "A-01", newArgB: "B-01",
      strategyA: "強調戰略物資與國家戰略自主正當性",
      strategyB: "主攻未完三期臨床與 EUA 科學程序疑點",
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
      winnerReason: "A-01 訴諸國家戰略物資準備具有相當政策說服力。"
    },
    resourceA: 95, resourceB: 90,
    argTreeSnapshotA: initialNodesA_Medigen, argTreeSnapshotB: initialNodesB_Medigen
  },
  {
    roundNumber: 2,
    agentA: {
      strategy: "引述北檢 60 餘件告發全數簽結確定，證實查無圖利違法。",
      argId: "A-03",
      argTitle: "檢方60餘件告發全數簽結無不法",
      content: "國民黨質疑圖利全係政治抹黑！台北地檢署針對外界告發陳時中等官員涉及圖利、瀆職的 60 多件案件，經過長達兩年的嚴格司法調查，結論非常明確：全數查無任何違法事證，依法簽結確定！",
      citation: "台北地檢署 112 年查字簽結新聞稿",
      closingQuestion: "檢察機關調查 60 案全數簽結無違法，國民黨還要繼續指控圖利嗎？"
    },
    agentB: {
      strategy: "提出食藥署審委劉滄梧內線交易起訴案，指控審查黑箱與利益輸送。",
      argId: "B-02",
      argTitle: "審委內線交易起訴與炒股黑箱",
      content: "簽結不等於沒黑箱！士林地檢署已經正式起訴食藥署 EUA 審查委員劉滄梧及其妻子洩密與內線交易！審查委員在開會前夕洩密買股，證明高端審查過程根本充斥著內線利益輸送！這不是黑箱炒股，什麼才是黑箱炒股？",
      citation: "士林地檢署 112 年內線交易字第 88 號起訴書",
      closingQuestion: "EUA 審委洩密炒股遭起訴，民進黨還要否認審查有黑箱嗎？"
    },
    judge: {
      newArgA: "A-03", newArgB: "B-02",
      strategyA: "引北檢 60 案全數簽結反駁圖利指控",
      strategyB: "抓審委劉滄梧洩密內線起訴案主攻利益黑箱",
      legalRatingA: "🟢", legalRatingB: "🟢",
      factRatingA: "🟢", factRatingB: "🟢",
      conceptShiftA: 0, conceptShiftB: 0,
      whataboutismA: 0, whataboutismB: 0,
      standardShiftA: 0, standardShiftB: 0,
      doubleStandardA: 0, doubleStandardB: 0,
      repeatedArgA: 0, repeatedArgB: 0,
      digUpHistoryA: 0, digUpHistoryB: 0,
      attackScoreA: 9, attackScoreB: 9,
      defenseScoreA: 8, defenseScoreB: 7,
      roundWinner: "⚪ 雙方相當",
      winnerReason: "A-03 以檢方簽結為法律盾牌，B-02 以起訴書打擊道德與審查信用，雙方旗鼓相當。"
    },
    resourceA: 90, resourceB: 80,
    argTreeSnapshotA: initialNodesA_Medigen, argTreeSnapshotB: initialNodesB_Medigen
  },
  {
    roundNumber: 3,
    agentA: {
      strategy: "切割個人犯罪與政策正當性（A-06）。",
      argId: "A-04",
      argTitle: "採購合約公開與均價每劑840元透明",
      content: "劉滄梧個人違法洩密已經受到司法制裁，絕不能與整體扶植國產疫苗政策混為一談！疾管署已主動提前公開 58 頁完整採購合約，證明每劑均價為 840 元，價格與莫德納、BNT 相比極具競爭力且完全透明，絕無密室價差！",
      citation: "衛福部疾管署高端疫苗合約公開記者會簡報",
      closingQuestion: "合約完整公開均價 840 元透明無隱瞞，國民黨抹黑黑箱合約在哪裡？"
    },
    agentB: {
      strategy: "Agent B 核心論據全數達上限，宣告論證資源耗盡。",
      argId: "B-EXHAUSTED",
      argTitle: "論證資源耗盡宣告",
      content: "「本回合論證資源耗盡。」\n在民進黨政府護航高端報告宣傳下，我方已窮盡所有關於未完三期 EUA 科學疑慮、劉滄梧審委洩密炒股、阻擋 BNT 民間捐贈及國際認證缺失等攻擊與防禦路線。我方在此明確宣告論證資源耗盡！",
      citation: "政治立場攻防實驗 v2 規則第五條",
      closingQuestion: "本回合論證資源耗盡。"
    },
    judge: {
      newArgA: "A-04", newArgB: "B-EXHAUSTED",
      strategyA: "公開 58 頁合約與每劑 840 元均價證明價格透明",
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
      winnerReason: "🔴 Agent B 依規則第五條宣布論證資源耗盡，🔵 Agent A 獲得高端案最終勝利！"
    },
    resourceA: 85, resourceB: 0,
    argTreeSnapshotA: initialNodesA_Medigen, argTreeSnapshotB: initialNodesB_Medigen
  }
];

export const mirrorPatternsMedigen: MirrorPattern[] = [
  {
    id: "MM-01",
    patternTitle: "緊急授權（EUA）與科學完整性之立場互換",
    agentAStatement: "A (民進黨在高端案)：『公共衛生緊急狀態下，免疫橋接經專家合議評估符合藥事法緊急授權授權。』",
    agentBStatement: "B (國民黨在藍營推動進口特定防疫藥品時)：『緊急狀況下應特事特辦授權，不能死守常規程序致生人命損失。』",
    explanation: "面對己方支持的緊急授權時，強調「特事特辦、緊急防護彈性」；面對對手的緊急授權時，則質疑「程序不全、缺乏三期臨床草率試驗」。"
  }
];

export const medigenBundle: CaseDataBundle = {
  id: 'medigen',
  title: '高端疫苗與新冠疫情防護爭議案',
  initialEventDataPackage: medigenDataPackage,
  initialNodesA: initialNodesA_Medigen,
  initialNodesB: initialNodesB_Medigen,
  mockRounds: mockRoundsMedigen,
  mirrorPatternsData: mirrorPatternsMedigen
};
