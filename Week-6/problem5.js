// find the pair, with the given difference

const arr = [5, 10, 3, 2, 50, 80];
const diff = 78;

function bruteForce(arr, diff) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let firstElem = arr[i];

    for (let j = i + 1; j < n; j++) {
      let secondElem = arr[j];

      const tempDiff = secondElem - firstElem;
      if (tempDiff === diff) {
        return 1;
      }
    }
  }

  return 0;
}

function optimized(arr, diff) {
  const set = new Set();

  for (let elem of arr) {
    const firstElem = elem;
    const secondElem = diff - firstElem;

    if (set.has(secondElem)) {
      return 1;
    }

    set.add(firstElem);
  }

  return 0;
}

console.log('brute force : ', bruteForce(arr, diff));
console.log('optimized : ', optimized(arr, diff));
