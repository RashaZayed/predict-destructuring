//#1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars; //randomCar = 'Tesla'
const [, otherRandomCar] = cars; //otherRanodmCar = 'Mercedes'
console.log(randomCar); //o/p 'Tesla'
console.log(otherRandomCar); //o/p 'Mercedes'

//#2
const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
console.log(name); //refrance error as it's not defined
console.log(otherName); //'Elon'

//#3
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password); //o/p '12345' as the const variable
console.log(hashedPassword); //o/p undefined as there is no preoperty called password

//#4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; //2
const [, , , second] = numbers; //5
const [, , , , , , , , third] = numbers; //2
//Predict the output
console.log(first == second); // o/p false
console.log(first == third); // o/p true

//#5
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest; // 'value
const { secondKey } = lastTest; // [1, 5, 1, 8, 3, 3]
const [, willThisWork] = secondKey; //5
//Predict the output
console.log(key); //o/p 'value'
console.log(secondKey); //o/p [1,5,1,8,3,3]
console.log(secondKey[0]); //o/p 1
console.log(willThisWork); //o/p 5
