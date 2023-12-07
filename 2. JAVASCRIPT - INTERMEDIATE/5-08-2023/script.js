//============================== MAP ====================================

// Map
// it return a new Array
// it doesnot change the size of original Array
// it uses value from original array when making new one

const people = [
  { name: "bob", age: 20, position: "web-developer" },
  { name: "peter", age: 25, position: "solution-architect" },
  { name: "susy", age: 30, position: "system-designer" },
  { name: "anna", age: 40, position: "cloud-engineer" },
];

const ages = people.map(function (person) {
  return person.age + 20;
});
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join("");
console.log(names);
