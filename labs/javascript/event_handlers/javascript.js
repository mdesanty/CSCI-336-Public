document.addEventListener('DOMContentLoaded', function () {
  const blueButton = document.getElementById("blue-button");
  const textElement = document.getElementById("colorful-text");

  blueButton.onclick = function() {
    textElement.classList.add("blue");
  }

  const greenButton = document.getElementById("green-button");

  greenButton.onclick = function() {

  }

  const redButton = document.getElementById("red-button");

  redButton.onclick = function() {

  }
}, false);