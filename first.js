// const  profile = {
//       username: "@ankushchandore",
//       isfollow: false,
//       follower: 123,
//       following:123,
// };

// console.log(typeof profile["following3"]);

// let marks = [97, 82,78,64 ,36];
// console.log(marks);

// console.log(marks.length);

// let name =["hello", "tia", "riya", "kiya", "antu"];
// for(let i = 0; i < antu.length; i++) {
//       console.log(antu[i]);
// }

// //for of
// for(let kiya of name ) {
//       console.log(kiya);
// }


// let cities = ["delhi", "pune", "mumbai", "hydrabad", "gurgaon"];

// for(let city of cities) {
//       console.log(city. toLowerCase());
// }

// let marks = [85,97,44,37,76,60];

// let sum = 0;

// for(let val of marks) {
//       sum += val;
// }


// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// let  item = [250,645,300,900, 50];

// let idx = 0;
// for(let val of item ) {
//       console.log(`value at index ${idx} = ${val}`);
//       let offer = val /10;
//       item[idx] =- offer;
//       console.log(`value after offer  = ${item[idx]}`);
//       idx++;
// }

// let marvel_heroes = ["thore", "spiderman ", "ironman"];
// let dc_heroes = ["superman ", "batman"];

//  let heroes = marvel_heroes.concat(dc_heroes);
//  console.log(heroes);

//  let cities = ["delhi", "pune", "mumbai", "hydrabad", "gurgaon"];
//  console.log(cities);

//  console.log(cities.splice(2,2));

 //let arr = [1,2,3,4,5,6,7];
 //arr.splice(2,2,101, 102);

 //Add Element 
 //arr.splice(2, 0 , 101);

 //Delete Element
 //arr.splice(3,1);

 //Replace Element
//  arr.splice(3,1,101);

// let companies = ["Bloomberg", "Microsoft", "uber", "Google","IBM","Netflix"];

// companies.splice(2,1,"ola");

// companies.push("Amazon")

// function sum(x,y) {
//       s = x + y;
//       return s;
      
// }

// let val = sum(3,4);
// console.log(val);

// function sum(a,b) {
//       return a + b;

// }

// const arrowSum = (a,b) => {
//       return a+b;
// };

// function countVowels(str) {
//       let count = 0;
//       for(const char of str) {
//       if(char == "a" ||
//        char == "e" ||
//        char == "i" ||
//        char == "o" ||
//        char == "u") {
//       count++;
//     }
//  }
//  console.log(count);
// }

// const countvow = (str) => {

//       let count = 0;
//       for(const char of str) {
//       if(char == "a" ||
//        char == "e" ||
//        char == "i" ||
//        char == "o" ||
//        char == "u") {
//       count++;
//     }
//  }
//  console.log(count);
// }
// let arr = [1,2,3,4,5,];

// arr.forEach(function private (val) {
//   console.log(val);
// });

//  let nums = [67,52,39];

//   let newArr = nums.map((val) => {
//   return val * 2;
//  });

//  console.log(newArr);

let n = prompt("enter a number : ");

let arr = [];
for(let i = 1; i<=n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

 let sum = arr.reduce((res, curr ) => {
  return res + curr;
});

console.log("sum = " , sum);

let factorial = arr.reduce((res, curr ) => {
  return res * curr;
});

console.log("factorial = " , factorial);