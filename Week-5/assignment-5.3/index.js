function hasDuplicate(array) {
  const set = new Set(array);

  return !(set.size === array.length);
}

const arr1 = [1, 2, 3, 4, 5, 1];
console.log(hasDuplicate(arr1));

const arr2 = [1, 2, 3, 4, 5];
console.log(hasDuplicate(arr2));
