const doTask1 = async () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve('Task 1 is completed');
    }, 3000);
  });
};

const doTask2 = async () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve('Task 2 is completed');
    }, 1000);
  });
};

const doTask3 = async () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve('Task 3 is completed');
    }, 2000);
  });
};

console.time('Time to run the functions ');
async function runTasks() {
  const t1 = await doTask1();
  console.log(t1);
  const t2 = await doTask2();
  console.log(t2);
  const t3 = await doTask3();
  console.log(t3);
}

runTasks()
  .then(() => {
    console.log('All tasks are completed :');
    console.timeEnd('Time to run the functions ');
  })
  .catch((err) => {
    console.log(err);
  });
