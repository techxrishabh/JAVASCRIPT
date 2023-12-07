// JSON.string(), JSON.parse()

const friends = ["john", "peter", "bob"];

localStorage.setItem("friends", JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[2]);
