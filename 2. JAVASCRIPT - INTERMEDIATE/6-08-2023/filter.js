// FILTER =================================================
// Does return a new array
// can manipulate the size of new array
// return based on condition

const people = [
  { name: "bob", age: 20, position: "web-developer" },
  { name: "peter", age: 25, position: "solution-architect" },
  { name: "susy", age: 30, position: "system-designer" },
  { name: "anna", age: 40, position: "cloud-engineer" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

const developer = people.filter(function (person) {
  return person.position === "web developer";
});
console.log(developer);
console.log(youngPeople);
