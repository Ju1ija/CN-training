// Exercise 1 

let age = 7;

if (age < 18) {
  console.log("Ticket price: £8");
} else if (age >= 18 && age < 60) {
  console.log("Ticket price: £10.95");
} else {
  console.log("Ticket price: £7.50");
}



// Exercise 2

const favColor = () => {
  console.log("My favourite colour is Blue!");
}

favColor();



// Exercise 3

const favColor = (color) => {
  console.log(`My favourite colour is ${color}.`);
}

favColor("red");
favColor("blue");
favColor("green");



// Activity 1

const factorial = (n) => {
  if ((n === 0) || (n === 1)) {
    return 1;
  } else {
    return (n * factorial(n - 1));
  }
}

console.log(factorial(33));



// Activity 2

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
  console.log(`Pizza with ${topping1} and ${topping2}`);
  orderCount++;
  console.log(`Order count: ${orderCount}`);
}

takeOrder("pineapple", "pepperoni");
takeOrder("ham", "mushrooms");
takeOrder("cheese", "caramelised onions");



// Activity 3

let pin = 1357;
let balance = 350;

let cashMachine = (enterPin, enterBalance) => {
  if (enterPin == pin && enterBalance <= balance) {
    console.log("Please collect your cash!");
  } else if (enterPin != pin) {
    console.log("Incorrect pin code.");
  } else if (enterBalance > balance) {
    console.log("Insufficient funds.");
  } else {
    console.log("ERROR");
  }
}

cashMachine(1357, 50);
cashMachine(3333, 50);
cashMachine(1357, 500);