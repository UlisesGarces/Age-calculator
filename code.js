"use strict";
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

/* console.log(document.querySelector(".Day-Input")); */
document.querySelector(".arrow-button").addEventListener("click", function () {
  let val3 = Number(document.querySelector(".Year-Input").value);
  let val2 = Number(document.querySelector(".Month-Input").value);
  let val1 = Number(document.querySelector(".Day-Input").value);
  if (!val1) {
    document.querySelector("#resulDay").textContent = "--";
    let el1 = document.querySelector("#DayLabel");
    el1.classList.add("redishWronger");
    document.querySelector("#p-Day").textContent = "This field is required";
  } else if (val1 > 31) {
    document.querySelector("#resulDay").textContent = "--";
    let el1 = document.querySelector("#DayLabel");
    el1.classList.add("redishWronger");
    document.querySelector("#p-Day").textContent = "Must be a valid day";
  } else if (!val2) {
    document.querySelector("#resulDay").textContent = "--";
  } else if (!val3) {
    document.querySelector("#resulDay").textContent = "--";
  } else {
    let el1 = document.querySelector("#DayLabel");
    document.querySelector("#resulYear").textContent = Math.abs(val3 - year);
    el1.classList.remove("redishWronger");
    document.querySelector("#p-Day").textContent = "";
  }

  if (!val2) {
    document.querySelector("#resulMonth").textContent = "--";
    let el2 = document.querySelector("#MonthLabel");
    el2.classList.add("redishWronger");
    document.querySelector("#p-Month").textContent = "This field is required";
  } else if (val2 > 12) {
    document.querySelector("#resulMonth").textContent = "--";
    let el2 = document.querySelector("#MonthLabel");
    el2.classList.add("redishWronger");
    document.querySelector("#p-Month").textContent = "Must be a valid month";
  } else if (!val1) {
    document.querySelector("#resulMonth").textContent = "--";
  } else if (!val3) {
    document.querySelector("#resulMonth").textContent = "--";
  } else {
    let el2 = document.querySelector("#MonthLabel");
    document.querySelector("#resulMonth").textContent = Math.abs(val2 - month);
    el2.classList.remove("redishWronger");
    document.querySelector("#p-Month").textContent = "";
  }

  if (!val3) {
    document.querySelector("#resulYear").textContent = "--";
    let el3 = document.querySelector("#YearLabel");
    el3.classList.add("redishWronger");
    document.querySelector("#p-Year").textContent = "This field is required";
  } else if (val3 > 2023) {
    document.querySelector("#resulYear").textContent = "--";
    let el3 = document.querySelector("#YearLabel");
    el3.classList.add("redishWronger");
    document.querySelector("#p-Year").textContent = "Must be in the past";
  } else if (!val1) {
    document.querySelector("#resulYear").textContent = "--";
  } else if (!val2) {
    document.querySelector("#resulYear").textContent = "--";
  } else {
    document.querySelector("#resulDay").textContent = Math.abs(day - val1);
    let el3 = document.querySelector("#YearLabel");
    el3.classList.remove("redishWronger");
    document.querySelector("#p-Year").textContent = "";
  }
});
