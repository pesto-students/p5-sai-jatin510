// find the sum of maximum sum of contiguous subarray;
const arr = [-1, 2, 3, -53, 32, 22, 11, -12];

function bruteForce(arr) {
  let max = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let temp = 0;

    for (let j = i; j < n; j++) {
      temp += arr[j];
      max = Math.max(max, temp);
    }
  }

  return max;
}

function optimized(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let curr = 0;

  for (let elem of arr) {
    curr += elem;

    max = Math.max(max, curr);
    curr = Math.max(curr, 0);
  }

  return max;
}

console.log('BruteForce approach :  ', bruteForce(arr));
console.log('Optimized approach :  ', optimized(arr));
