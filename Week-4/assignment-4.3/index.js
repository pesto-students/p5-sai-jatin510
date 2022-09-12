const Fib = (n) => ({
  [Symbol.iterator]() {
    let i = 1;
    let first = 0;
    let second = 0;
    return {
      next: () => {
        if (i++ <= n) {
          [first, second] = [second, first + second || 1];
          return { value: first, done: false };
        }
        return { done: true };
      },
    };
  },
});

// with spread operator
console.log([...Fib(10)]);

// iterator
for (let elem of Fib(10)) {
  console.log(elem);
}
