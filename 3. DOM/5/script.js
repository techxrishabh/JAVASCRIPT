// ===================================================================== //
//========== MOST IMPORTANT =============
//===================================================== //

// select the element or group of element that we want
//decide the effect we want to apple to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";
result.style.color = "white";

const item = document.querySelector(".special");

let last = document.querySelector("li:last-child");
last.style.color = "green";
console.log(last);

let list = document.querySelectorAll(".special");
list.forEach(function (dark) {
  console.log(dark);
  dark.style.color = "#be2465";``
});
