//
// find the town judge

var findJudge = function (N, trust) {
  const counts = new Array(N + 1).fill(0);

  for (let [i, j] of trust) {
    counts[i] -= 1;
    counts[j] += 1;
  }

  for (let i = 1; i < counts.length; i++) {
    if (N - 1 === counts[i]) {
      return i;
    }
  }

  return -1;
};

let n = 2;
let trust = [[1, 2]];
console.log(findJudge(n, trust));

n = 3;
trust = [
  [1, 3],
  [2, 3],
  [3, 1],
];
console.log(findJudge(n, trust));
