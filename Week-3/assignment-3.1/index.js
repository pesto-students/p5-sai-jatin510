function add(...args) {
  return args.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

function memoize(func) {
  const map = new Map();

  return (...args) => {
    const key = args.toString();

    if (map.has(key)) {
      return map.get(key);
    }

    const value = func(...args);
    map.set(key, value);
    return value;
  };
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100, 200));
console.log(memoizeAdd(100, 100));
