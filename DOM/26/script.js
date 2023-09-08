// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
// const heading = document.querySelector(".heading");
// console.log('heading')

function sayHello() {
  console.log("Hello there");
}

btn.addEventListener("click", function () {
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent = `I'm inside the computer`;
  container.appendChild(element);
});

container.addEventListener("click", function (e) {
  if (event.target.classList.contains("heading")) {
    console.log("hello there");
  }
});
