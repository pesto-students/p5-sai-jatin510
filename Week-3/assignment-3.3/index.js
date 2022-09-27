function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }
  let message = `Count is${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
// What is logged?

// The output of the program will be "Count is 0".
// When we call the the log function, the string will get the value of the count variable are 0.
// THe message string is will get the memory with value of count as 0.

//
// this will return correct output
{
  function createIncrement() {
    let count = 0;

    function increment() {
      count++;
    }
    function log() {
      let message = `Count is${count}`;
      console.log(message);
    }
    return [increment, log];
  }
  const [increment, log] = createIncrement();
  increment();
  increment();
  increment();
  log();
}
