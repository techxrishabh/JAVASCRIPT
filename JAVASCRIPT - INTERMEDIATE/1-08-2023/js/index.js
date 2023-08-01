//================  ==============  ===================== =============
//================  ==============  ===================== =============

// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: "bob" };
let person2 = { ...person };
person2.name = "susy";
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);

//===================== ========================== ============== =============
//===================== ============================  =========== ==============

// Truthy and Falsy =================

//Every value in javascript is either truthy or falsy =========

// "" , '' , `` , 0 , -0 , NaN , false , null , undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = "n";

if (text) {
  console.log("The value is truthy");
} else {
  console.log("The value is falsy");
}

const text2 = "";
if (text2) {
  console.log("The value is truthy");
} else {
  console.log("The value is falsy");
}

//====================== Unary-Operator-typeof =========================

let text5 = "some text";

//====================== Binary-Operator-assignment ========================

let number5 = 10;
let number6 = 15;

//====================== Ternary-Operator ===============================

const value = 1 < 0;

value ? console.log("value is true") : console.log("value is false");

//====================== by-using-conditionals =============================

if (value) {
  console.log("value is true");
} else {
  console.log("value is false");
}
//==============

function add(a, b) {
  return a + b;
}

console.log(add(5, 6));
