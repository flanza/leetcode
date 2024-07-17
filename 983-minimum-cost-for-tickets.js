var mincostTickets = function (days, costs) {
  const duration = [1, 7, 30];
  const dp = [];

  for (let i = days.length - 1; i >= 0; i--) {
    dp[i] = Infinity;
    for (let costIdx = 0; costIdx < costs.length; costIdx++) {
      const d = duration[costIdx], c = costs[costIdx];
      let j = i;
      while (j < days.length && days[j] < days[i] + d) {
        j++;
      }

      dp[i] = Math.min(dp[i], c + (dp[j] ?? 0));

    }
  }

  return dp[0];
};

// Top Bottom
// var mincostTickets = function (days, costs) {
//   const duration = [1, 7, 30];
//   const dp = [0];

//   const minCost = (i) => {
//     if (i == days.length) {
//       return 0;
//     } else if (dp[i]) {
//       return dp[i];
//     }

//     dp[i] = Infinity;
//     for (let costIdx = 0; costIdx < costs.length; costIdx++) {
//       const d = duration[costIdx], c = costs[costIdx], expiricy = days[i] + d;
//       let j = i;
//       while (j  < days.length && days[j] < expiricy){
//         j++;
//       }

//       dp[i] = Math.min(dp[i], c + minCost(j));

//     }

//     return dp[i];
//   }

//   const result = minCost(0);
//   return result;
// };


const data = [
  { days: [1, 4, 6, 7, 8, 20], costs: [2, 7, 15], output: 11 },
];


for (let d of data) {

  console.log(JSON.stringify(d));
  const result = mincostTickets(d.days, d.costs);
  console.log('result = ', result);
  console.log('ok = ', result === d.output);
  console.log('----------');
}