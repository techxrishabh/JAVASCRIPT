//createElement('element')
//createTextNode('text content')
//element.appendChild(childElement)

const result = document.querySelector("#result");

// creating an empty element

const bodyDiv = document.createElement("div");

// creating the text node that we want to place inside the empty div

const text = document.createTextNode("a simple body div");

// now, we are placing the created text node inside the body div

bodyDiv.appendChild(text);

// finally our div is created with text inside of it
// now let place this inside the body element

document.body.appendChild(bodyDiv);

// now we can see our element in the web browser page
