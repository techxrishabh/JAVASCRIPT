// submit event listener
// prevent default
// how to get a value

// first select all the id of an element

const form = document.querySelector("#form");
const Name = document.querySelector("#name");
const password = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");
  console.log(Name.value);
  console.log(password.value);
});
