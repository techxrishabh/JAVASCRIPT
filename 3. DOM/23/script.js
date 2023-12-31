/**
 * Whenever we're going to work with events in JavaScript, in our callback function as an argument, we can get event object and you're going to see abbreviations like E or evt.
 */

// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

// by using event.currentTarget we will get the of clicked item
heading.addEventListener("click", function (event) {
  console.log(event.currentTarget);
  console.log(this);
});

// by using event.type we will get the type of event we used
btn.addEventListener("click", function (event) {
  event.currentTarget.classList.add("blue");
  console.log(event.type);
});

const link = document.getElementById("link");

function someFunc(e) {
  e.preventDefault();
}

link.addEventListener("click", someFunc);
