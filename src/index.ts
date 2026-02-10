// console.log("My New House in West Germany");

// let age: number = 30;
// let firstName: string = "Mario";
// let isFictional: boolean;

// age = 99;
// firstName = "MySchool";
// isFictional = true;

// let planet = "Earth";
// let moons = 1;
// let isLarge = false;

// planet = "Saturn";
// moons = 145;
// isLarge = true;

// //null & undefined

// let something = null;
// let anotherThing = undefined;

// // arrays

// let names: string[] = ["Mario", "Luigi", "Peach"];
// let ages: number[] = [25, 28, 24];

// names.push("Toad");
// ages.push(34);

// //type inference with arrays

// let fruits = ["apples", "pears", "bananas", "mangoes"];

// fruits.push("grapes");

// const f = fruits[3];

// let things = [42, true, "hello"];

// const t = things[0];

// // object literals

// let user: { firstName: string; age: number; id: number } = {
//   firstName: "Mario",
//   age: 35,
//   id: 1,
// };

// user.firstName = "peach";
// user.id = 8;

// //type inferenece with object literals

// let person = {
//   name: "luigi",
//   score: 35,
// };

// person.name = "shem";
// person.score = 67;

// const score = person.score;

// //functions
// function addTwoNumbers(a: number, b: number): number {
//   return a + b;
// }

// const subtractTwoNumbers = (a: number, b: number): number => {
//   return a - b;
// };

// //type inference with functions
// addTwoNumbers(3, 9);
// subtractTwoNumbers(10, 7);

// function addAllNumbers(items: number[]): void {
//   const total = items.reduce((a, c) => a + c, 0);
//   console.log(total);
// }

// addAllNumbers([5, 7, 9, 11]);

// //return type inference

// function formatGreeting(name: string, greeting: string): string {
//   return `${greeting}, ${name}`;
// }

// const result = formatGreeting("mario", "hello");

// // any
// let age1: any;
// age = 25;

// age1 = false;

// //any type in arrays
// let things1: any[] = ["hello", true, 30, null];

// things1.push({ id: 123 });

// function addTogether(value: any): any {
//   return value + value;
// }

// const resultOne = addTogether("hello");
// const resultTwo = addTogether(3);

// // Any is useful when migrating from javaScript to Typescript
// //Beacuse using any wont cause errors initially

// // tuples
// let person1: [string, number, boolean] = ["mario", 66, true];

// //tuples Examples

// let hsla: [number, string, string, number];
// hsla = [200, "100%", "50%", 0.5];

// let xy: [number, number];

// xy = [94.7, 20.1];

// function useCoords(): [number, number] {
//   // get coords

//   const lat = 100;
//   const long = 77;

//   return [lat, long];
// }

// const [lat, long] = useCoords();

// //---------
// //named tuples
// //----------

// let user2: [name: string, age: number];

// user2 = ["peach", 25];

// console.log(user2[0]);

// //interfaces

// interface Author {
//   name: string;
//   avatar: string;
// }

// const authorOne: Author = { name: "mario", avatar: "/img/mario.png" };

// interface Post {
//   title: string;
//   body: string;
//   tags: string[];
//   create_at: Date;
//   author: Author;
// }

// const newPost: Post = {
//   title: "My first post",
//   body: "This is the content of my first post",
//   tags: ["welcome", "firstpost"],
//   create_at: new Date(),
//   author: authorOne,
// };

// // as function argument types

// function createPost(post: Post): void {
//   console.log(`Created post ${post.title} by ${post.author.name}`);
// }

// createPost(newPost);

// //with arrays

// let posts: Post[] = [];

// posts.push(newPost);

//types aliases

//example 1 - tuple

type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);

//Example 2 - object literal
type User = {
  name: string;
  score: number;
};

const userOne: User = { name: "mario", score: 35 };

function formatUser(user: User): void {
  console.log(` ${user.name} logged in with score ${user.score}`);
}

formatUser(userOne);
formatUser({ name: "luigi", score: 42 });

//union types

let someId: number | string;

someId = 1;
someId = "abc123";

let email: string | null = null;

email = "shem4soul@gmail.com";
email = null;

type Id = number | string;

let anotherId: Id;

anotherId = 123;
anotherId = "abc123";
