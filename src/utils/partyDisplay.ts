export const formatPartyMarkers = (text: string) =>
  text
    .replaceAll('🔵 Agent A', '🟢 Agent A')
    .replaceAll('🔴 Agent B', '🔵 Agent B')
    .replaceAll('🔵 A 方', '🟢 A 方')
    .replaceAll('🔴 B 方', '🔵 B 方')
    .replaceAll('🔵 A 勝', '🟢 A 勝')
    .replaceAll('🔴 B 勝', '🔵 B 勝');

export const partyLabelA = '🟢 Agent A';
export const partyLabelB = '🔵 Agent B';
