// Activity 1

let age = 20;
let country = "UK";

if (age > 17 && country == "UK") {
  console.log("Yes, I can serve you");
} else {
  console.log("You aren’t old enough");
}



// Activity 2

let pizzaTopping = "banana";

switch (pizzaTopping) {
  case "pepperoni":
  case "mozzarella":
    console.log(`${pizzaTopping} - important ingredient for my pizza`);
    break;
  case "pineapple":
  case "mushrooms":
  case "red chillies":
  case "chicken":
    console.log(`I don’t mind having ${pizzaTopping} on my pizza`);
    break;
  default:
    console.log(`${pizzaTopping} should not be on a pizza`);
}



// Activity 3

let password = "Julija123";

if (password.length < 8) {
  console.log("The password is too short!");
} else {
  console.log(`The password is ${password}.`);
}



// Activity 3 - Stretch

let num = 30;

if (num % 3 == 0 && num % 5 == 0) {
  console.log(`Number ${num} is divisible by 3 and 5.`);
} else if (num % 3 == 0) {
  console.log(`Number ${num} is divisible by 3.`);
} else if (num % 5 == 0) {
  console.log(`Number ${num} is divisible by 5.`);
} else {
  console.log(`Number ${num} is NOT divisible by 3 or 5.`);
}



// Activity 4

let num = 21;

switch (true) {
  case num % 3 == 0 && num % 5 == 0:
    console.log("fizz buzz");
    break;
  case num % 3 == 0:
    console.log("fizz");
    break;
  case num % 5 == 0:
    console.log("buzz");
    break;
  default:
    console.log(num);
}



// Activity 5

// Example 1

let num = 20202;
let stringOfNum = num.toString();
let numLength = stringOfNum.length;
let palindrome = true;

for (let i = 0; i < numLength / 2; i++) {
  if (stringOfNum[i] !== stringOfNum[numLength - 1 - i]) {
    palindrome = false;
    break;
  }
}

if (palindrome) {
  console.log("It's a palindrome, woohoo!");
} else {
  console.log("Unfortunately, it's not a palindrome...");
}

// Example 2

let num = 1015;
let stringOfNum = num.toString();
let reversedNum = stringOfNum.split("").reverse().join("");

if (num == reversedNum) {
  console.log("It's a palindrome, woohoo!");
} else {
  console.log("Unfortunately, it's not a palindrome...");
}



// Activity 6

let time = 19;
let placeOfWork = "my office";
let townOfHome = "Nottingham";

if (time < 6 || time >= 22 && time <= 24) {
  console.log(`I'm in my bed in ${townOfHome}.`);
} else if (time >= 6 && time < 8) {
  console.log(`I'm wandering around my house in ${townOfHome}.`);
} else if (time >= 8 && time < 18) {
  console.log(`I'm learning to code in ${placeOfWork}.`);
} else if (time >= 18 && time < 22) {
  console.log("I'm probably playing PS5 or editing travel photos.");
} else {
  console.log("I don't think this time exist.");
}



// Activity 7

// Example 1

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowels = "aeiou";

for (let i = str.length - 1; i >= 0; i--) {
  if (vowels.includes(str[i])) {
    console.log(i);
    break;
  }
}

// Example 2

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowels = ["a", "e", "i", "o", "u"];
let lastIndex = 0;

for (let i = 0; i < vowels.length; i++) {
  let currentIndex = str.lastIndexOf(vowels[i]);

  if (currentIndex > lastIndex) {
    lastIndex = currentIndex;
  }
}

console.log(lastIndex);



// Activity 8

let word = "Tuesday";
let result = true;

if (word[0] != word[word.length - 1]) {
  result = false;
}

console.log(result);



// Activity 9

// Example 1

let num1 = 5;
let num2 = 3;
let sumOfNumbers = num1 + num2;

if (sumOfNumbers % 2 == 0) {
  console.log(sumOfNumbers);
} else {
  console.log(num1 * num2);
}

// Example 2

let num1 = 3;
let num2 = 4;
let sumOfNumbers = num1 + num2;

if (sumOfNumbers % 2 == 0) {
  console.log(sumOfNumbers);
} else {
  console.log(num1 * num2);
}