console.log("My New House in West Germany");

let age: number = 30;
let firstName: string = "Mario";
let isFictional: boolean;

age = 99;
firstName = "MySchool";
isFictional = true;

let planet = "Earth";
let moons = 1;
let isLarge = false;

planet = "Saturn";
moons = 145;
isLarge = true;

//null & undefined

let something = null;
let anotherThing = undefined;

// arrays

let names: string[] = ["Mario", "Luigi", "Peach"];
let ages: number[] = [25, 28, 24];

names.push("Toad");
ages.push(34);

//type inference with arrays

let fruits = ["apples", "pears", "bananas", "mangoes"];

fruits.push("grapes");

const f = fruits[3];

let things = [42, true, "hello"];

const t = things[0];

// object literals

let user: { firstName: string; age: number; id: number } = {
  firstName: "Mario",
  age: 35,
  id: 1,
};

user.firstName = "peach";
user.id = 8;

//type inferenece with object literals

let person = {
  name: "luigi",
  score: 35,
};

person.name = "shem";
person.score = 67;

const score = person.score;

//functions
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};

//type inference with functions
addTwoNumbers(3, 9);
subtractTwoNumbers(10, 7);

function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

addAllNumbers([5, 7, 9, 11]);

//return type inference

function formatGreeting(name: string, greeting: string): string {
  return `${greeting}, ${name}`;
}

const result = formatGreeting("mario", "hello");
