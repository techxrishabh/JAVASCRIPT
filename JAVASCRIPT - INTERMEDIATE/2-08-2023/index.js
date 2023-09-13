//====================== CALLBACK FUNCTIONS AND HIGHER ORDER FUNCTIONS ======================

// Functions are first class objects - stored in a variable(expression) passed as an argument to another function,
// return from the function (closure)

//Higher Order Function =================
// It accepts another function as an argument or returns another function as a result ====

//Callback Function ==================
//It passed to a another function as an argument and executed inside that function ===

//Normal Function ______________________________
function greetMorning(name) {
  const myName = "Rishabh";
  console.log(`Good morning ${name}. My name is ${myName}`);
}
function greetAfternoon(name) {
  const myName = "Rishabh";
  console.log(`Good afternoon ${name}. My name is ${myName}`);
}

greetMorning("Priyanshu");
greetAfternoon("Priyanshu");

//High order function _________________________________

//Call back function __________________________________

console.log("THIS IS CALLBACK FUNCTION");

function morning() {
  console.log(`Good morning BOB`);
}

function greet(name, cb) {
  const myName = "Rishabh";
  console.log(`${name}, my name is ${myName}`);
  cb();
}

greet("Priyanshu", morning);

//Another Example _____________________________________
console.log("-------------- ANOTHER EXAMPLE ------------");

function morning(name) {
  return `Good morning ${name.toUpperCase}`;
}

function afternoon(name) {
  return `Good afternoon ${name.toUpperCase}`;
}

function greet(name, cb) {
  const myName = "John";
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet("bobo", morning);
greet("peter", afternoon);
