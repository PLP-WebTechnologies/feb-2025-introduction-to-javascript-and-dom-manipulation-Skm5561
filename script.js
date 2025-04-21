// 1. Changing text content dynamically
const changeTextButton = document.getElementById("changeTextBtn");
const introText = document.getElementById("intro");

changeTextButton.addEventListener("click", function() {
  introText.textContent = "The text has been changed by JavaScript!";
});

// 2. Modifying CSS styles via JavaScript
const modifyStyleButton = document.getElementById("modifyStyleBtn");

modifyStyleButton.addEventListener("click", function() {
  document.body.style.backgroundColor = "#D3E4CD"; // Change background color
  document.querySelector("h1").style.color = "#FF6347"; // Change the color of the header
});

// 3. Adding or removing an element when a button is clicked
const addElementButton = document.getElementById("addElementBtn");
const removeElementButton = document.getElementById("removeElementBtn");
const newElementContainer = document.getElementById("newElementContainer");

addElementButton.addEventListener("click", function() {
  const newElement = document.createElement("p");
  newElement.textContent = "This is a newly added paragraph!";
  newElement.classList.add("new-element");
  newElementContainer.appendChild(newElement);
});

removeElementButton.addEventListener("click", function() {
  const newElement = document.querySelector(".new-element");
  if (newElement) {
    newElementContainer.removeChild(newElement);
  } else {
    alert("No element to remove!");
  }
});