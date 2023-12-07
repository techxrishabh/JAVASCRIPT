// CSS

const random = document.querySelector(".random");
console.log(random.style);

//WRONG WAY OF DOING THIS ========================

// random.style.backgroundColor = "blue";
// random.style.color = "white";
// random.style.fontSize = "3em";
// random.style.textTransform = "capitalize";

//RIGHT WAY OF DOING THIS ========================
random.classList.add("title");
