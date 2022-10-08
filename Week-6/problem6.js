// find triplet sum in array closest to the target

const arr = [-1, 2, 1, -4];
const target = 1;

let closest = Number.MAX_SAFE_INTEGER;
const n = arr.length;

for (let i = 0; i < n; i++) {
  const firstElem = arr[i];

  for (let j = i + 1; j < n; j++) {
    const secondElem = arr[j];

    for (let k = j + 1; k < n; k++) {
      const thirdElem = arr[k];
      const sum = firstElem + secondElem + thirdElem;
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
    }
  }
}

console.log(closest);
