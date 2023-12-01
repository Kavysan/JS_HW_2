//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let fav = person => {
    for (let food in person) {
        if (Array.isArray(person[food])) {
            if (typeof person[food][0] === 'object' ) {
                console.log(`${food}:`);
                person[food].forEach(obj => {
                    for (let key in obj) {
                        console.log(`  ${key}: ${obj[key]}`);
                    }
                });
            } 
            else {
                let items = person[food].join(", ");
                console.log(`${food}: [${items}]`);
            }
        }
        else {
            console.log(`${food}: ${person[food]}`);
        }
        
    }
    
};

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
fav(person3)
console.log('--------------------------------------')

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name,age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    this.addAge = inc => {
        this.age +=inc;
        console.log(`Age of ${this.name} incremented to ${this.age}`);
    };
}

let p1 = new Person('Kavya',24);
let p2 = new Person('Oviya',50);

p1.printInfo()
p1.addAge(1)
p1.addAge(1)
p1.addAge(1)

p2.printInfo()
p2.addAge(3)
p2.addAge(3)
p2.addAge(3)

console.log('--------------------------------------')


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let length_checker = str => {
    return new Promise((resolve,reject) => {
        if (str.length > 10){
            resolve('Big Word')
        }
        else{
            reject('Small Number')
        }
    });
}

length_checker("Hello how are you!")
    .then((message)=> {console.log(message)})
    .catch((message) => {console.log(message)});

length_checker("Hi!")
    .then((message)=> {console.log(message)})
    .catch((message) => {console.log(message)});

console.log('--------------------------------------')