const doTask1 = async () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

const doTask2 = async () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

const doTask3 = async () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

console.time('Time to run the functions ');
async function runTasks() {
  const t1 = doTask1();
  const t2 = doTask2();
  const t3 = doTask3();

  await t1;
  await t2;
  await t3;
}

runTasks()
  .then(() => {
    console.log('All tasks are completed :');
    console.timeEnd('Time to run the functions ');
  })
  .catch((err) => {
    console.log(err);
  });
