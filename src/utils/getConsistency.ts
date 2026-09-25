// export default function getConsistency(wpmHistory: number[]) {
//   if (wpmHistory.length === 0) {
//     return 0;
//   }

//   const average =
//     wpmHistory.reduce((sum, wpm) => sum + wpm, 0) / wpmHistory.length;

//   if (average === 0) {
//     return 0;
//   }

//   const variance =
//     wpmHistory.reduce((sum, wpm) => sum + Math.pow(wpm - average, 2), 0) /
//     wpmHistory.length;

//   const standardDeviation = Math.sqrt(variance);

//   const consistency = (1 - standardDeviation / average) * 100;

//   return Math.max(0, consistency);
// }
