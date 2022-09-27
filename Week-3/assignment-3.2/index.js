function displayDetails(age, gender) {
  console.log(`${this.name} is of age ${age} and gender ${gender}\n`);
}

const nameObject = { name: 'chanda' };

console.log('call method');
displayDetails.call(nameObject, 20, 'female');

console.log('apply method');
displayDetails.apply(nameObject, [20, 'female']);

console.log('bind method');
const chandaDetails = displayDetails.bind(nameObject, 20, 'female');
chandaDetails();
