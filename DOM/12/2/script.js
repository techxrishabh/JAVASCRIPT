//createElement('element')
//createTextNode('text content')
//element.appendChild(childElement)

const result = document.querySelector("#result");

// creating an empty element

const heading = document.createElement("h2");

// creating the text node that we want to place inside the empty h2 element that we created now

const headingText = document.createTextNode("Dynamic Heading");

// now, we are placing the created text node inside the h2 element

heading.appendChild(headingText);

// finally our h2 element is created with text inside of it
// now let add blue class in the heading that we created now

heading.classList.add("blue");

// now we can see our element in the web browser page by appending it inside the heading tag
result.appendChild(heading);
