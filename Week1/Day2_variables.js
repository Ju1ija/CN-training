// Activity 1

let name = "Julija";
let age = 28;
let favColour = "blue";

console.log(`Hi! My name is ${name}. I'm ${age} and my favourite colour is ${favColour}.`);

name = "Arthur";
age = 27;
favColour = "green";

console.log(`Hi! My name is ${name}. I'm ${age} and my favourite colour is ${favColour}.`);



// Activity 2

let breakfast = "oatmeal with flax seeds and pineapple";
let lunch = "chicken with roasted vegetables";
let dinner = "nothing as I'm currently fasting between 2pm and 10am";

console.log(`Today for breakfast I had ${breakfast}, for lunch - ${lunch}, and for dinner - ${dinner}.`);

breakfast = "oatmeal with blueberries and raspberries";
lunch = "salmon with roasted potatoes and broccoli";

console.log(`Tomorrow for breakfast I plan to have ${breakfast}, for lunch - ${lunch}, and for dinner - ${dinner}.`);



// Activity 3

let today = new Date();
let birthday = new Date("2022, 9, 17");
let diffInMilliseconds = birthday - today;
let days = Math.ceil(diffInMilliseconds / (1000 * 3600 * 24));
console.log(days);



// Activity 4

let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");