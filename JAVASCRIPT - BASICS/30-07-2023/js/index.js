// ## Arrays ========= properties ========= and ========== Methods ## =============

let names = [
  "Rishabh",
  "Priyanshu",
  "Manish",
  "Vikash",
  "Rishu",
  "Saurav - Ganguli",
];

// Length ========

console.log(names.length);
console.log(names[names.length - 4]);

// we can conctinate the array by using this method ========= or we can say that add two arrays in one another array =====

let lastname = ["banana", "mango", "apple", "cake", "chocklate"];
let fullname = names.concat(lastname);
console.log(fullname);

// we can also reverse the value of an array ==========
console.log("reversing the value of an array");
console.log(fullname.reverse());

//we can also add an array by using this method , this method add the array from start ===========

fullname.unshift("orange");
fullname.unshift("berry");
console.log(fullname);

//we can remove array by using this method , this method remove the array from start ==========

fullname.shift();
fullname.shift();
fullname.shift();
fullname.shift();

console.log(fullname);

//we can also add an array by using this method , this method add the array from last ================

fullname.push("Iron - Man");
fullname.push("War - Machine");
fullname.push("Invisible - Armour");

console.log(fullname);

//we can also remove the value of an array by using this method, this method remove the value of an array from last =============

fullname.pop();
fullname.pop();
fullname.pop();

console.log(fullname);

//We can also remove the value of an array by using this special advance method , this method can remove any numbers of value from array just by using its index number ============== most advance method to remove the value of an array =======================

fullname.splice(1, 5);
console.log(fullname);

// Multiple Videos

// #### Create Students Array

students = ["Nami", "Luffy", "Zoro", "Sanji", "Brook"];

// 1. setup students array with 5 students
//    {
//    id: 1,
//    name: 'peter',
//    score: 80,
//    favoriteSubject: 'math',
//    },

// #### Use Multiple Files

// - easer to manage code base (file, project)
// - order matters
// - other ways to achieve the same result (ES6 modules, fetch DB )
// - not limited to just static data

// #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log

// #### highScores

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

// #### specificId

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

// #### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

// #### survey

// 1. list favorite subjects with reduce
//    {
//    english: 1
//    history: 1
//    math: 3
//    }
// 2. assign to survey and log
