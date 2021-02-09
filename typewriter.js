"use strict";
window.addEventListener("DOMContentLoaded", init);

let type = document.querySelector(".typewritten").textContent;
let n = "0";

function init() {
  console.log(`${type}`);
  //clear the html area
  document.querySelector(".typewritten").textContent = null;

  //start loop
  loop();
}

function loop() {
  // show the N'th letter
  let letter = type.substring(0, n);

  console.log(`${letter}`);
  // - set textcontent to substring of 0 n
  document.querySelector(".typewritten").textContent = letter;
  // increment N
  n++;

  //sounds
  let space = letter.endsWith(" ");

  if (space == true) {
    document.querySelector("#typespace").play();
    console.log("play");
  } else if (Math.random() > 0.5) {
    document.querySelector("#typekey1").play();
    console.log("play1");
  } else {
    document.querySelector("#typekey2").play();
    console.log("play2");
  }

  //wait before loop

  let length = type.length;

  if (n <= length) {
    setTimeout(loop, 500);
  }
}
