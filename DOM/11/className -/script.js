// className = we can check our class name by using className   property
// classList

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

//lets check class name ===========================

classNameCheck = first.className;
console.log(classNameCheck);

// we can also add class name in any element dynamically by using js like this -=========
first.className = "colors";
second.className = "text";

// we can also add 2 class name in any element dynamically by using js like this -=========

third.className = "text colors";
