function add(...args) {
  return args.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
}

function memoize(func) {
  const map = new Map();

  return (...args) => {
    const key = args.toString();

    if (map.has(key)) {
      return map.get(key);
    }

    const sum = func(...args);
    map.set(key, sum);
    return sum;
  };
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100, 200));
console.log(memoizeAdd(100, 100));
