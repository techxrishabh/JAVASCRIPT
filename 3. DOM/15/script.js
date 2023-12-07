// prepend
// innerText

// creating a h2 element
const heading = document.createElement("h2");
//adding text in that created h2 element
heading.innerText = "I am a dynamic heading";
// now we use prepend method to add this heading inside the body Element
document.body.prepend(heading);
