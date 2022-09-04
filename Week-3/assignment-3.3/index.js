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
