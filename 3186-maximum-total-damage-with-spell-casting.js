/**
 * @param {number[]} powers
 * @return {number}
 */
var maximumTotalDamage = function(powers) {
  powers.sort((a, b) => a - b);
  const memo = [];
  let preMax = 0, memoIdx = 0, result = 0;

  for(let i = 0; i < powers.length;) {
    while (memoIdx < memo.length && memo[memoIdx][0] < powers[i] - 2) {
      preMax = Math.max(preMax, memo[memoIdx][1]);
      memoIdx++;
    }

    let curr = 0;
    let j = i;
    while (j < powers.length && powers[i] === powers[j]) {
      curr += powers[j++];
    }

    result = Math.max(result, curr + preMax);
    memo.push([powers[i], curr + preMax]);
    i = j;
  }

  return result;

};

var maximumTotalDamage2 = function(powers) {
  const damagesPerSpell = powers.reduce((acc, p) => {
    acc[p] = (acc[p] ?? 0) + p;
    return acc;
  }, {});

  const memo = {};
  const combinePowers = (powers) => {
    const key = powers.join('-');
    if (memo[key]) {
      return memo[key]
    }

    let maxPower = 0;
    if (powers.length <= 2) {
      const first = powers[0], second = powers[1], third = powers[2]
            firstPower = damagesPerSpell[first], secondPower = damagesPerSpell[second], thirdPower = damagesPerSpell[third];
      maxPower = combine(first, second, firstPower, secondPower);
      // maxPower = combine(first, third, maxPower, thirdPower);
      // maxPower = combine(second, third, maxPower, thirdPower);
    } else {
      for(let i =0; i < powers.length; i++) {
        const subproblem = [...powers.slice(0, i),...powers.slice(i+1)];
        maxPower = Math.max(combinePowers(subproblem), maxPower);
      }
    }

    memo[key] = maxPower;
    return maxPower;
  }

  const sortedPowers = Object.keys(damagesPerSpell).sort((a,b) => a-b);

  return combinePowers(sortedPowers);
    
};

const combine = (first, second, firstPower, secondPower) => {
return canCombine(first, second) ? firstPower + secondPower : Math.max(firstPower, secondPower);
};

const canCombine = (power1, power2) => {
  return power2 < +power1 - 2 || power2 > +power1 + 2;
}

// console.log(maximumTotalDamage([1,1,3,4]));
// console.log(maximumTotalDamage([7,1,6,6]));
console.log(maximumTotalDamage([5,9,2,10,2,7,10,9,3,8]))

// [2, 2, 3, 5, 7, 8, 9, 9, 10, 10]
// [  4 , 3, 5, 7, 8,  18 , 20]
// [             ,     20     ]
