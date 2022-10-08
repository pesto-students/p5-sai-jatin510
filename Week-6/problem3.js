// sort array in ascending order of 0,1,2
const arr = [1, 2, 0, 1, 2, 2, 1, 0];

let countOfZero = 0;
let countOfOne = 0;
let countOfTwo = 0;

for (let elem of arr) {
  if (elem === 0) countOfZero++;
  else if (elem === 1) countOfOne++;
  else if (elem === 2) countOfTwo++;
}

let i = 0;
while (countOfZero-- > 0) {
  arr[i++] = 0;
}

while (countOfOne-- > 0) {
  arr[i++] = 1;
}

while (countOfTwo-- > 0) {
  arr[i++] = 2;
}

console.log(arr);
