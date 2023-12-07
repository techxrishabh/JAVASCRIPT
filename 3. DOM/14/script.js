// // // // | createElement('element')
// // // // | createTextNode('text content')
// // // // | element.appendChild(childElement)
// // // // | replaceChild("new", "old")

//

//
// ==========   ========       ==============
// CREATING DIV ELEMENT WITH TEXT  TO INSERT  IT INSIDE BODY ===========
// ===========================
//

//selecting the id first
let result = document.querySelector("#result");
let first = document.querySelector("#red");
//creating the element
const bodyDiv = document.createElement("div");
//creating the text node that we want to insert inside our newly created div
const text = document.createTextNode("let we friends and friend together");
//placing our newly created text inside our newly created div
bodyDiv.appendChild(text);
//now let insert it inside the body element before the result tagged element
document.body.insertBefore(bodyDiv, result);

//
// ==========   ========       ==============
// CREATING H2 ELEMENT WITH TEXT  TO INSERT  IT INSIDE RESULT TAGGED ELEMENT ===========
// ===========================
//

//CREATING THE H2 ELEMENT
const heading = document.createElement("h2");
const textValue = document.createTextNode("dynamic heading");
heading.appendChild(textValue);
heading.classList.add("blue");
result.insertBefore(heading, first);

//creating the h6 element
const smallHeading = document.createElement("h6");
const textData = document.createTextNode("keep pushing yourself hard");
smallHeading.appendChild(textData);
smallHeading.classList.add("blue");

// ==================================================
// //   it replaces the  small-heading with body-div
// ====================================================

document.body.replaceChild(smallHeading, bodyDiv);
