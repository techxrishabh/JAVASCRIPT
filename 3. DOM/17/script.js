// innerHTML
// textContent

//selecting the parent element of li
const list = document.getElementById("first");
//selecting the div whose id is second
const div = document.getElementById("second");
//selecting the first child element of ul
const item = document.querySelector(".item");

// =================== text-content === by using this we can see what text is contained in the div element ====
console.log(div.textContent);

// =================== innerHTML === by using this we can see whole html
console.log(list.innerHTML);
console.log(list.textContent);

const randomVar = "random value";

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">${randomVar}</li>
      <li>list item</li> <li>list item</li>`;
document.body.appendChild(ul);
