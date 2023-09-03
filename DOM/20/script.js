// ===================================================
// HOW TO USE CLICK EVENT PROPERLY =================
// =============================================

// select element === first we need to select the element in which we want to place the click event
// addEventListener() === we need to pass two argument here
// first === what type of event we want to use
// second === what we want to do with the help of that event
// what event, what to do

// like here if we want to add event in the button then we need to select the button first

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changeColors() {
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

btn.addEventListener("click", changeColors);
