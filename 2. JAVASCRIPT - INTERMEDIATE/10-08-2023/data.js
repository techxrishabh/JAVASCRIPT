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

const students = [
  {
    id: 1,
    name: Rishabh,
    score: 100,
    favoriteSubject: "math",
  },
  {
    id: 2,
    name: Priyanshu,
    score: 100,
    favoriteSubject: "English",
  },
  {
    id: 3,
    name: Manish,
    score: 100,
    favoriteSubject: "Hindi",
  },
  {
    id: 4,
    name: Rishu,
    score: 100,
    favoriteSubject: "Science",
  },
  {
    id: 5,
    name: Vikash,
    score: 100,
    favoriteSubject: "Social",
  },
];

function sayName(name) {
  console.log(name);
}

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
