const changePlan = document.getElementById("change-plan");
const annually = document.getElementById("annually");
const monthly = document.getElementById("monthly");

changePlan.addEventListener("click", (evt) => {
  var button = evt.target;
  var classList = Array.from(button.classList);

  if (classList.includes("left")) {
    button.classList.remove("left");
    button.classList.add("right");
    annually.style.display = "none";
    monthly.style.display = "grid";
  } else {
    button.classList.remove("right");
    button.classList.add("left");
    annually.style.display = "grid";
    monthly.style.display = "none";
  }
});
