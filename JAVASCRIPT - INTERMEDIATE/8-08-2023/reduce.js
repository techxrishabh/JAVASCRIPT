//==========================================
//REDUCE ==============================================
//===========================================
//it uses iterates and callback function
//reduces to a single value  number, array, object

const people = [
  { name: "bob", age: 20, position: "web-developer", id: 1, salary: 200 },
  { name: "peter", age: 25, position: "developer", id: 2, salary: 200 },
  { name: "susy", age: 30, position: "system-designer", id: 3, salary: 200 },
  { name: "anna", age: 40, position: "cloud-engineer", id: 4, salary: 200 },
];

const total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 500);
console.log(total);
