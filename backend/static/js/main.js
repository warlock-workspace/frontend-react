var dropdownButton = document.querySelector(".dropdownButton");
var dropdown = document.querySelector(".dropdown");

document.addEventListener("DOMContentLoaded", function () {
  var dropdownButton = document.querySelector(".dropdownButton");
  var dropdown = document.querySelector(".dropdown");

  dropdown.addEventListener("mouseenter", function () {
    dropdown.style.display = "block";
  });
  dropdownButton.addEventListener("mouseenter", function () {
    dropdown.style.display = "block";
  });

  dropdownButton.addEventListener("mouseleave", function () {
    dropdown.style.display = "block";
  });
  dropdown.addEventListener("mouseleave", function () {
    dropdown.style.display = "none";
  });
});
