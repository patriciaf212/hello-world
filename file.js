function sayConsole () {
  console.log("Hello, World!");
}
function sayPopup () {
  alert("Hello, World!");
}
function sayBrowser () {
  var p = document.getElementById ("hello");
  p.innerHTML = "Hello, World!";
}

function sayHello () {
  var name = prompt("Please Enter Your Name:");
  var p = document.getElementById("stranger");
  p.innerHTML = "Hello, " + name + "!";
}
