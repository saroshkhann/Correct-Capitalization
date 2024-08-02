"use strict";

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".bt2");

btn.addEventListener("click", function () {
  input2.value = correctTheAlphabets(input1.value);
  // console.log(input2.value);
});

btn2.addEventListener("click", function () {
  input1.value = "";
  input2.value = "";
});

const correctTheAlphabets = function (n) {
  const name = n.toLowerCase();
  const firstLetter = n[0].toUpperCase();
  const correctName = firstLetter + name.slice(1);
  // console.log(correctName);
  return correctName;
};
