// previous sibling
// next sibling
//return whitespace

const first = document.querySelector(".first");
const second = (first.nextSibling.nextSibling.style.color = "red");
console.log(second);

// if we dont use nextSibling two times the we will get only white space from the first time
//eg of white space
const whitespace = first.nextSibling;
console.log(whitespace);

const last = document.querySelector("#last");
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling);
