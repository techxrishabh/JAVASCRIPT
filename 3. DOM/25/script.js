// it allows us to select the dynamic element
// dynamic element == element that we add with javascript
// event propagation = order the events are fired
// event bubbling = clicked element first then bubbles ip -- default
// event capturing = fires at the root and fires until reaches target

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("current target", e.currentTarget);
  console.log("target", e.target);
}

list.addEventListener("click", showBubbling);
container.addEventListener("click", showBubbling);
