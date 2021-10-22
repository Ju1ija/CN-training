// Exercise 1 

let person = {
  age: 28,
  name: "Julija",
  location: "Nottingham",
  occupation: "Software Development Engineer"
}



// Exercise 2

let day = "Friday";
let alarm = "";
let alarmMessages = {
  weekendAlarm: "No alarm needed.",
  weekdayAlarm: "Get up at 7am!"
}

if (day == "Saturday" || day == "Sunday") {
  alarm = alarmMessages.weekendAlarm;
} else {
  alarm = alarmMessages.weekdayAlarm;
}

console.log(alarm);



// Exercise 3 

let person = {
  age: 28,
  name: "Julija",
  location: "Nottingham",
  occupation: "Software Development Engineer",
  favSongs: ["song1", "song2", "song3", "song4"]
}

console.log(person.favSongs[2]);
console.log(person.favSongs);



// Exercise 4 

let person = {
  age: 28,
  name: "Julija",
  location: "Nottingham",
  occupation: "Software Development Engineer",
  favSongs: ["song1", "song2", "song3", "song4"],
  myName() {
    return this.name;
  }
}

console.log(person.myName());



// Activity 1 

let person = {
  age: 28,
  name: "Julija",
  location: "Nottingham",
  occupation: "Software Development Engineer",
  favSongs: ["song1", "song2", "song3", "song4"],
  sayHi() {
    return `Hello! My name is ${this.name}.`;
  }
}

console.log(person.sayHi());



// Activity 2 

let pet = {
  name: "Cooper",
  typeOfPet: "dog",
  age: 2,
  colour: "golden",
  eat() {
    return `${this.name} is eating.`
  },
  drink() {
    return `${this.name} is drinking.`
  }
}

console.log(pet.eat());
console.log(pet.drink());



// Activity 3 

// Example 1

let coffeeShop = {
  branch: "Nottingham",
  drinks: [["Latte", 2.75], ["Cappuccino", 2.45], ["Americano", 2.35], ["Espresso", 2.15], ["Green tea", 1.85]],
  food: [["Croissant", 1.75], ["Pain au chocolat", 1.95], ["Blueberry muffin", 2.35], ["Ham sandwich", 2.15], ["Cheese pastry", 2.25]],
  drinksOrdered() {
    let totalDrinksCost = 0;

    console.log("Your order is:");

    for (let i = 0; i < this.drinks.length; i++) {
      console.log(`${this.drinks[i][0]} - £${this.drinks[i][1]}`);
      totalDrinksCost += this.drinks[i][1];
    }

    return `Total cost for drinks: £${totalDrinksCost.toFixed(2)}`;
  },
  foodOrdered() {
    let totalFoodCost = 0;

    console.log("Your order is:");

    for (let j = 0; j < this.food.length; j++) {
      console.log(`${this.food[j][0]} - £${this.food[j][1]}`);
      totalFoodCost += this.food[j][1];
    }

    return `Total cost for food: £${totalFoodCost.toFixed(2)}`;
  }
}

console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());

// Example 2

let coffeeShop = {
  branch: "Nottingham",
  drinks: [["Latte", 2.75], ["Cappuccino", 2.45], ["Americano", 2.35], ["Espresso", 2.15], ["Green tea", 1.85]],
  food: [["Croissant", 1.75], ["Pain au chocolat", 1.95], ["Blueberry muffin", 2.35], ["Ham sandwich", 2.15], ["Cheese pastry", 2.25]],
  drinksOrdered(drink1, drink2) {
    let totalDrinksCost = 0;

    console.log("Your order is:");

    for (let i = 0; i < this.drinks.length; i++) {
      if (this.drinks[i][0] == drink1 || this.drinks[i][0] == drink2) {
        console.log(`${this.drinks[i][0]} - £${this.drinks[i][1]}`);
        totalDrinksCost += this.drinks[i][1];
      }
    }

    return `Total cost: £${totalDrinksCost.toFixed(2)}`;
  }
}

console.log(coffeeShop.drinksOrdered("Latte", "Americano"));