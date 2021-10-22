// Example 1

console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");

// Example 2

let arr = ["   |   |   ", "-----------"];

for (let i = 1; i <= 11; i++) {
  if (i % 3 == 0) {
    console.log(arr[1]);
  } else {
    console.log(arr[0]);
  }
}

//Example 3

let i = 1;
let arr = ["   |   |   ", "-----------"];

while (i <= 11) {
  if (i % 3 == 0) {
    console.log(arr[1]);
  } else {
    console.log(arr[0]);
  }

  i++;
}

// Example 4

let arr = ["   |   |   ", "-----------"];

for (let i = 1; i <= 11; i++) {
  (i % 3 == 0) ? console.log(arr[1]) : console.log(arr[0]);
}



// Display the 8th character of this sentence in Upper Case - "All Around the World". 

// Example 1

let sentence = "All Around the World";

console.log(sentence[7].toUpperCase());

// Example 2

console.log("All Around the World".charAt(7).toUpperCase());



// Write a program that checks if the given sentence ends with the letter d - "Hello World". The console should return true. If not, it will return false. 

// Example 1

let sentence = "Hello World";

if (sentence[sentence.length - 1] == "d") {
  console.log("true");
} else {
  console.log("false");
}

// Example 2

console.log("Hello World".endsWith("d"));



// Write a program that removes the whitespace from the start and end of the given sentence - "   Hello World  ".

//Example 1

let sentence = "   Hello World  ";

console.log(sentence.trim());

//Example 2

console.log("   Hello World  ".trim());