// ===================================================
// HOW TO USE CLICK EVENT =================
// =============================================

// select element === first we need to select the element in which we want to place the click event
// addEventListener() === we need to pass two argument here
// first === what type of event we want to use
// second === what we want to do with the help of that event
// what event, what to do

// like here if we want to add event in the button then we need to select the button first

const btn = document.querySelector(".btn");

// now we have to add a function called addEventListener() in our selected element

btn.addEventListener("click", function () {
  console.log("have you click me");
});
//
const heading = document.querySelector("h2");

btn.addEventListener("click", function () {
  heading.classList.add("red");
});
