//Import statements
import {getRem, getPx} from "./math.js";

//Getting HTML elements
const converterGrid = document.querySelector(".converter-grid");
const titleText = document.querySelector(".title");

const unitChangerInput = document.querySelector(".js-unit-changer-input");
const pencilIcon = document.querySelector(".fa-pencil");

const exchangeInput = document.querySelector(".js-exchange-input");
const pxInput = document.querySelector(".js-px-input");
const remInput = document.querySelector(".js-rem-input");


//* Styles
//Event Listeners
unitChangerInput.addEventListener("focus", () => {
   pencilIcon.style.display = "none";
});

unitChangerInput.addEventListener("blur", () => {
   pencilIcon.style.display = "inline";
});

exchangeInput.addEventListener("click", () => {
   if (titleText.innerHTML === "PX to REM Converter") {
      titleText.innerHTML = "REM to PX Converter";
   } else {
      titleText.innerHTML = "PX to REM Converter";
   }

   converterGrid.classList.toggle("converter-grid-first-arrangement");
   converterGrid.classList.toggle("converter-grid-second-arrangement");
})


//* JavaScript

//Unit changer
let multiplier = unitChangerInput.value || 16;
unitChangerInput.value = multiplier;

unitChangerInput.addEventListener("blur", () => {
   multiplier = unitChangerInput.value;
})


//Set up code
function setUp() {
   pxInput.value = getPx(1);
   remInput.value = getRem(16);
}

setUp();


//Converter
function stylingInput(main, secondary) {
   main.classList.remove("converter-input-alt");
   secondary.classList.remove("converter-input-alt");
   
   void main.offsetWidth;
   
   main.classList.add("converter-input-alt");
}

pxInput.addEventListener("input", () => {
   stylingInput(remInput, pxInput);
   remInput.value = getRem(pxInput.value, multiplier);
});

remInput.addEventListener("input", () => {
   stylingInput(pxInput, remInput);
   pxInput.value = getPx(remInput.value, multiplier);
})