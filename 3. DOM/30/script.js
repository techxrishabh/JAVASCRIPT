/**
 * setTimeout - runs function once after specific time
 *
 * -- pass function reference
 * -- duration in ms (1000 ms = 1 second)
 * -- default 0, will cover more extensively in async/await section
 * -- returns unique identifier
 * -- clearTimeout to cancel
 * -- on window object
 */

function sayHello() {
  console.log("Hello Rishabh");
}

// first way of doing this ========
setTimeout(sayHello, 5000);

// This will not work
// setTimeout(sayHello(), 8000);

// Right way of doing this
function showScore(name, score) {
  console.log(`Hello ${name}, your score is ${score}`);
}

// setTimeout(showScore, 1000, 'john', 34);

const firstID = setTimeout(showScore, 1000, "John", 34);
const secondID = setTimeout(showScore, 1000, "Peter", 88);

console.log(firstID);
console.log(secondID);

clearTimeout(firstID);
