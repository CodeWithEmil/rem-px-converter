//Getting HTML elements
const unitChangerInput = document.querySelector(".unit-changer-input");
const pencilIcon = document.querySelector(".fa-pencil");

//* Styles
//Event Listeners
unitChangerInput.addEventListener("focus", () => {
   pencilIcon.style.display = "none";
});

unitChangerInput.addEventListener("blur", () => {
   pencilIcon.style.display = "inline";
});

//* JavaScript
let multiplier = unitChangerInput.value || 16;
unitChangerInput.value = multiplier;
