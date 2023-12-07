//First we assign it to the variable then we did the further process and it make our work easier
const h1 = document.getElementById("title");
h1.style.color = "red";

//we did it without assigning the variable first and it make our work more harder as we can see
document.getElementById("btn").style.backgroundColor = "blue";
document.getElementById("btn").style.color = "white";

//Lets see what happened if we assigned the value in the variable first by using this on the another button =======
const but1 = document.getElementById("btn-1");
but1.style.backgroundColor = "red";
but1.style.color = "white";
