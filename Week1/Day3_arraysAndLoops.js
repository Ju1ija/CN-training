// Exercise 1 

let favSongs = ["song1", "song2", "song3"];
console.log(favSongs);

favSongs.push("song4", "song5");
console.log(favSongs);

favSongs.pop();
console.log(favSongs);



// Exercise 2

let groceryList = ["apple", "banana", "carrot", "onion", "garlic"];
console.log(groceryList);

let updatedList = groceryList.map(x => x + ' x 2');
console.log(updatedList);



// Exercise 3

let zoo = ["monkey", "elephant", "tiger", "lion"];
console.log(zoo);

let animalMoved = zoo.shift();
console.log(animalMoved);

console.log(zoo);



// Exercise 4

let favDrinks = ["coffee", "wine", "gin", "beer"];

for (let i = 0; i < favDrinks.length; i++) {
  console.log(favDrinks[i]);
}



// Exercise 5

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade") {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log(currentCard);



// Activity 1

let favFilms = ["film1", "film2", "film3", "film4", "film5"];
favFilms.push("film6", "film7");

for (let i = 0; i < favFilms.length; i++) {
  console.log(favFilms[i]);
}



// Activity 2

for (let i = 0; i < 6; i++) {
  console.log(Math.ceil(Math.random() * 50));
}



// Activity 3

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 9; i >= 0; i--) {
  console.log(i);
}



// Activity 4

let films = ["film1", "film2", "film3", "film4"];

for (let i = 0; i < films.length; i++) {
  console.log(films[i]);

  if (i == 2) {
    if (films[i] == "Ghostbusters") {
      console.log("Yay it’s Ghostbusters!");
    } else {
      console.log("Boo! We want Ghostbusters!");
    }
  }
}



// Activity 5

let currentNumber = 0;

for (let i = 0; i < 6; i++) {
  currentNumber = Math.ceil(Math.random() * 30);

  if (currentNumber % 7 == 0) {
    console.log(`Number ${currentNumber} is devisible by 7.`);
  } else {
    console.log(`Number ${currentNumber} is NOT devisible by 7.`)
  }
}



// Activity 6

let bobsFollowers = ["Tom", "Dan", "Chris", "Steph"];
let hannahsFollowers = ["Steph", "Richard", "Rob", "Dan"];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < hannahsFollowers.length; j++) {
    if (bobsFollowers[i] == hannahsFollowers[j]) {
      console.log(bobsFollowers[i]);
    }
  }
}



// Activity 7

// for loop

let films = ["film1", "film2", "film3", "film4"];

for (let i = 0; i < films.length; i++) {
  console.log(films[i]);
}

// while loop 

let i = 3;

while (i >= 0) {
  console.log(`Number of items in stock: ${i}`);
  i--;
}

// do...while loop

let arr = [];
let i = 1;

do {
  arr.push(i);
  i++;
} while (i < 7);

console.log(arr);