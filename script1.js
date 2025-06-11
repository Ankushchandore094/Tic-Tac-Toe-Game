//Airthmethic  Operator
// let a = 5;
// let b = 2;
// let c = a + b;

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);


//unary Operater
// let a = 5;
// let b = 2;

// console.log("a = ",a, "& b = ", b);

// console.log("a-- = ", a--);
// console.log("a = ", a)


//Asigment OPerator
// let a = 5;
// let b = 2;

// a **= 4; // a = a + 4
// console.log("a = ", a);

//Comparison Operater
// let a = 5;
// let b = 2;

// console.log("a <= b", a <= b);

//Logical Operator
// let a = 6;
// let b = 5;

// let cond1 = a > b; //true
// let cond2 = a === 6; //true
// console.log("!(6<5) = ", !(a<b));

//conditional statments

//  let age = 28;

//  if(age >= 18) {
//     console.log("vote")
//  }
//  else {
//     console.log("not vote");
//  }
//  if(age >= 18 ) {
//       console.log(" you can vote")
//  }

//  if(age < 18 ) {
//     console.log(" you can not vote")
//  }

//odd or even

// let num = 10;

// if (num % 2 === 0) {
//     console.log(num, "is even")
// } else {
//     console.log(num,"is odd");
// }

// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black"
// } else if ( mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }


// console.log(color);

// let mode = "dark";
//  let color;

//  if(mode === "dark") {
//     color = "black";

//  }

//  if(mode === "light") {
//     color = "white";
//  }

//  console.log(color);

//  for (let i = 1; i <= 5; i++) {
//      console.log("i =", i);
//  }


// //calculate sum of 1 to 5
// let sum = 0;
// let  n = 7;
// for(let  i = 1; i<= 7; i++) {
//     sum = sum + i;
// }

// console.log("Sum =", sum);
// console.log("loop has ended ");

// let i = 1;
// do {
//     console.log ("apna coollege");
//     i++;
// } while (i <= 10 );

// //for loop
// let str = "javaScript";

// let size = 0;
// for(let i of str) {
//     console.log("i=", i)

//     size++;
// }

// console.log("string size = ", size);

// let  student = {
//     name: "Rahul kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for(let key in student) {
//     console.log("key = ", key, "value=", student[key]);
// }

// for(let num=0; num<= 100; num++) {
//     if(num%2 === 0) {
//     console.log("num =" , num);
// } 
// }

// let gameNUm = "25";

//  let userNum = prompt("Guess the game number : ");
//  console.log(userNum);

//  while(userNum != gameNUm) {
//  userNum = prompt(" you enter wrong nummber.Guess again : ");
//  }

//  console.log("congratulation ,  you enter the right number");

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);


// //Template Literals
// let specialString = "This is a template literal";
// console.log( typeof specialString);

let str = " apna   college  js    ";
console.log(str.trim());


let fullName = prompt("enter your fullName without spaces");

let userNum = "@" + fullName + fullName.length;

console.log(userNum);