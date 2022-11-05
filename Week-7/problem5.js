// Next Greater Element

function nextGreaterElement(arr) {
  const n = arr.length;

  let result = [];
  for (let i = 0; i < n; i++) {
    let max = -1;

    for (let j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        max = arr[j];
        break;
      }
    }

    result.push(max);
  }
  return result;
}

console.log(nextGreaterElement([11, 23, 1, 13, 4, 5]));
