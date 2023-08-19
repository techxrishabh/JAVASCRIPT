//Select the element or group of elements that we want
//Decide the effect we want to apply to the selection

//getElementByTagName('tagname');
//HTMLCollection = array-like object
//index, length property but not array methods (forEach)

//querySelectorAll() in most cases
//NodeList - objects are collections of nodes
//can run forEach
//turn them into array - spread operator [...]
//after that can use any array properties

const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";

// console.log(headings.length);

const items = document.getElementsByTagName("li");
items[1].style.color = "orange";

// ... = whenever we use 3 dots it means spread operator
const betterItems = [...items];
betterItems.forEach(function (item) {
  console.log(item);
});

console.log(items);
console.log(betterItems);
