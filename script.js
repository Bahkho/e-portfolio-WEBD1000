"use strict";
var text = "Web Developer";
var speed = 50; // Adjust this value to control the typing speed (in milliseconds)

// Function to type out the text in the span element with id="techRole"
function typeEffect() {
  if (i < text.length) {
    document.getElementById("techRole").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}

var i = 0;
typeEffect();
