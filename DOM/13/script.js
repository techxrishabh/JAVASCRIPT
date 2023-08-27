//createElement('element')
//createTextNode('text content')
//element.appendChild(childElement)

// insertBefore("element", "location")
// in this method we have to pass two parameter

// 1. element === what lind of element we want to insert
// 2. location === before which element we want to insert our dynamic element

// we will not use appendChild in this method =================================================

const result = document.querySelector("#result");
const first = document.querySelector("#red");

// //================================================
// =====================================
// FOR INSERTING THE TEXT IN THE BODY Element
// ================================================
// ==============================

// creating an empty element

const bodyDiv = document.createElement("div");

// creating the text node that we want to place inside the empty div

const text = document.createTextNode("a simple body div");

// now, we are placing the created text node inside the body div

bodyDiv.appendChild(text);

// finally our div is created with text inside of it
// now let place this before the result tag by using insertBefore

document.body.insertBefore(bodyDiv, result);

// now we can see our element in the web browser page

// ===============================
// =================================
// FOR INSERTING HEADING
// ===========================================
// =======================

// creating an empty element

const heading = document.createElement("h2");

// creating the text node that we want to place inside the empty h2 element that we created now

const headingText = document.createTextNode("Dynamic Heading");

// now, we are placing the created text node inside the h2 element

heading.appendChild(headingText);

// finally our h2 element is created with text inside of it
// now let add blue class in the heading that we created now

heading.classList.add("blue");

result.insertBefore(heading, first);

// now our heading is placed inside the result id and before the first id

// ============ DONE ==============
