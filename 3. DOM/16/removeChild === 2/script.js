//removeChild()

// removeChild = it require a parent element and its child
// like here our parent is result tagged element and child is h1

const result = document.querySelector("#result");
const heading = result.querySelector("h1");
result.removeChild(heading);

console.log(heading);
