/*
 1. Console.log & Comments
- Write a program that logs "Hello, World!" in the console. Add a single-line and multi-line comment
explaining the code.
*/
// console.log("Hello World!");
// console log is used to print output 
/*  console.log() is a built-in 
JavaScript function. 
*/

//------------------------------------------------

/* 2.Variables & Data Types
- Declare variables of all primitive data types in JavaScript and
 log their types using `typeof`.
 */

 let num = 22;
 console.log(typeof num)
 let fname = "Sia"
 console.log(typeof fname)
 let isStudent = true
 console.log(typeof isStudent)
 let age = 20
 console.log(typeof age)
 let person = {name: "Sia", age: 25}
 console.log(typeof person)
 let students = ["Student1", "Student2", "Student3", "Student"]
 console.log(typeof students) 
 let box = null
 console.log(typeof box)
 let age2
 console.log(typeof age2)
 let newStudent = {
    name: "Joe",
    age: 28,
    phoneNo: 88
}
 console.log(typeof newStudent)

//------------------------------------------------

/* 
3. Type Conversions
- Convert the string `"123"` 
into a number and add 10 to it. Log the result and its type.
*/

// let str = "123";

// let num = Number(str);
// // console.log(num);

// let result = num + 10;

// console.log(result, typeof result);

//------------------------------------------------

// 4. Conditional Statements
// - Write a program that checks if a number is positive, negative, or zero.
// let num = 5; 
// if (num > 0) {
//   console.log("The number is positive.");
// } else if (num < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }

//------------------------------------------------

// 5. Loops
// - Print all numbers from 1 to 10 using a `for` loop.

// for (let i=0; i<=10; i++) {
//     console.log(i);
// }

//------------------------------------------------

// 6. Template Literals
// - Use a template literal to log a greeting message: 
// "Hello [YourName], Welcome to JavaScript!".

// let yourName = "Michi";
// console.log(`Hello ${yourName}, Welcome to JavaScript!`);

//-------------------------------------------------

//7. Functions
// - Write a function that takes a name as input
//  and logs a welcome message.

function welcomeUser(name) {
    console.log("Welcome, " + name);
}
welcomeUser("Alice");

//-------------------------------------------------

/* 8. Objects
- Create an object representing a book
 with properties: title, author, and year.
Log each property. */

let book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018
  };
  
  console.log("Title:", book.title);   
  console.log("Author:", book.author); 
  console.log("Year:", book.year);

//--------------------------------------------------

/* 9. Arrays
- Create an array 
of five numbers and log the third number. */


let numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]);



//---------------------------------------------------

/* 
10. Date & Time
- Write a program 
to display the current date and time.
*/

let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

//----------------------------------------------------