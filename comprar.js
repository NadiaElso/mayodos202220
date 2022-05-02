"use strict";

const payamountbtn = document.querySelector("#pay-amount");
const decrementbtn = document.querySelectorAll("#decrement");
const quantityelement = document.querySelectorAll("#quantity");
const incrementbtn = document.querySelectorAll("#increment");
const priceelement = document.querySelectorAll("#price");
const subtotalelement = document.querySelector("#subtotal");
const taxelement = document.querySelector("#tax");
const totalelement = document.querySelector("#total");

for (let index = 0; index < incrementbtn.length; index++) {
  incrementbtn[index].addEventListener("click", function () {
    let increment = Number(this.previousElementSibling.textcontent);
    increment++;
    this.previousElementSibling.textcontent = increment;
  });
  decrementbtn.addEventListener("click", function () {
    let decrement = Number(this.nextElementSibling.textcontent);
    decrement < 1 ? 1 : decrement--;
    this.nextElementSibling = decrement;
  });
}
