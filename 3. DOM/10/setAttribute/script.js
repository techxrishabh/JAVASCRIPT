//getAttribute
//setAttribute

// SET ATTRIBUTE

const last = link.nextElementSibling;
console.log(last);
// li selected

const classValue = last.setAttribute("class", "first");
console.log(classValue);

//We can change the value of any class by using setAttribute
//like here i changed the value of li element from i have no attribute to i also have a class of first

last.textContent = "I also have a class of first";
console.log(last);
