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
export default function getConsistency(rawWpmHistory: number[]) {
  const wpmHistory = rawWpmHistory.filter((wpm) => wpm > 0);

  if (wpmHistory.length === 0) {
    return 0;
  }

  const mean =
    wpmHistory.reduce((sum, wpm) => sum + wpm, 0) / wpmHistory.length;

  if (mean === 0) {
    return 0;
  }

  const variance =
    wpmHistory.reduce((sum, wpm) => sum + Math.pow(wpm - mean, 2), 0) /
    wpmHistory.length;

  const standardDeviation = Math.sqrt(variance);

  const coefficientOfVariation = standardDeviation / mean;

  const consistency =
    100 *
    (1 -
      Math.tanh(
        coefficientOfVariation +
          Math.pow(coefficientOfVariation, 3) / 3 +
          Math.pow(coefficientOfVariation, 5) / 5,
      ));

  return Math.max(0, consistency);
}
