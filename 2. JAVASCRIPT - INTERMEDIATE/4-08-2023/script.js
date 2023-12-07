//======================= ARRAY - METHODS =============================

//:::::::::::::::::::::: ======IMPORTANT======= :::::::::::::::::::::::

// forEach
// does not return new array

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

people.forEach(showPerson);

console.log("WE CAN ALSO WRITE THIS LIKE\n");

people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});
