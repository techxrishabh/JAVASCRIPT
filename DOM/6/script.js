//select the element or group of element we want
//decide the effect we want to apply to the selection

//childNodes - return all childNodes including whitespace which is treated as a text nodes

//children
//firstChild
//lastChild

const result = document.querySelector("#result");
console.log(result);

//childnode also select text ============
const allChildren = result.childNodes;
console.log(allChildren);

const children = result.children;
console.log(children);

//it also return all the child nodes include text
console.log(result.firstChild);
console.log(result.lastChild);
