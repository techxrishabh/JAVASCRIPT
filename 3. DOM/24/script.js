// currentTarget = always refers to the element to which the event handler has been attached to
// target = identifiers the element on which the event occured

// currentTarget
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    e.currentTarget.style.color = "green";
  });
});

//target
const butns = document.querySelectorAll(".butn");

butns.forEach(function (butn) {
  butn.addEventListener("click", function (e) {
    console.log("target", e.target);
    e.target.style.color = "red";
  });
});
