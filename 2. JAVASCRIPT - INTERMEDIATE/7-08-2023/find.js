//FIND =======================================
//Return single instance - (in this case object)
//returns first match, if no math undefined
//great for getting gun unique value

const people = [
  { name: "bob", age: 20, position: "web-developer", id: 1 },
  { name: "peter", age: 25, position: "solution-architect", id: 2 },
  { name: "susy", age: 30, position: "system-designer", id: 3 },
  { name: "anna", age: 40, position: "cloud-engineer", id: 4 },
];
const person = people.find(function (person) {
  return person.id === 3;
});
console.log(person);

//note === it returns only first match
