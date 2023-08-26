// className = we can check our class name by using className   property
// classList = we can add or remove the class name property in an element by using add or remove in the class list

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const firstValue = first.className;
console.log(firstValue);

//we can attach our class property by using add property in className
second.classList.add("text", "colors");

//we can also remove the class attached in the element by using the remove property

second.classList.remove("colors");

//we can also check if the element really contains the property of some class or not by using the contains property in the classList  =======

//eg ===============================

let result = second.classList.contains("text");
if (result) {
  console.log("it contains the text property");
} else {
  console.log("it doesnot contains the text property ");
}
