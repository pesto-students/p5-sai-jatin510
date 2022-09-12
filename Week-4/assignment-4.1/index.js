const getNumber = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);

    if (randomNumber % 5 === 0) reject(new Error('Number is divisible by 5'));

    resolve('Number is not divisible by 5');
  });
};

getNumber()
  .then((data) => {
    console.log('promise is resolved :', data);
  })
  .catch((err) => {
    console.log('error : ', err.message);
  });
