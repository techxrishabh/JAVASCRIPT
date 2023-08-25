//getAttribute
//setAttribute

const first = document.querySelector(".first");
console.log(first);
const idValue = first.getAttribute("id");

//By using this we can get the value of id in the console
// like here the ID i put is special

console.log(idValue);

const last = document.querySelectorAll(".first");
console.log(last);

//we can also get link by using get attribute
const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);
