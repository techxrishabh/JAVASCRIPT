/*
innerWidth == The read-only window property the interior width of the windows in pixels

innerHeight == The read-only property of the window interface returns interior height of the window in pixels

The Element.getBoundClientReact() method returns a DOMReact object providing information about the size of an element and its position relative to the viewport.

*/

//we can get the height and width of the document by using this ------------------------
// console.log("height: " + window.innerHeight);
// console.log("Width: " + window.innerHeight);

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

//by using this function  we shall get the height and width of the box ----------------

btn.addEventListener("click", function () {
  const values = box.getBoundingClientRect();
  console.log(values);
});
