// String properties and methods
// wrapper String Object, don't memorize methods
let text = " Peter Jordan";
let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("e"));
console.log(text);
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith("peter"));
console.log(text.includes("eter"));
console.log(text.slice(0, 2));
console.log(text.slice(-3));

const person = {
  name: "peter", // property
  greeting() {
    // method
    console.log("Hey, I'm Peter");
  },
};

console.log(person);

console.log(person.name);
person.greeting();

//==============================================================

// ## Strings #8

// 1. create function fullName
// 2. accept two parameters "firstName", "lastName"
// 3. add them together (concat) and return result in uppercase
// 4. invoke fullName and pass some values
// 5. log result
// 6. change the order of arguments
// 7. refactor to object parameter

let person1 = {
  firstname: "Rishabh",
  lastname: "Kumar",
};

function fullName2(person1) {
  console.log((person1.firstname + " " + person1.lastname).toUpperCase());
}

fullName2(person1);

// ## Array Methods #9

// Multiple Videos

// #### Create Students Array

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
