var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", function() {

  body.toggleClass("changeBg");
});