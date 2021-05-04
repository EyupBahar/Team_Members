var mySwitch = document.getElementById("check");
var element = document.getElementById("main-container");
mySwitch.addEventListener("click", () => {
  if (mySwitch.checked == true) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    element.style.opacity = "0.6";
  } else if (mySwitch.checked == false) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    element.style.opacity = "1";
  }
});
