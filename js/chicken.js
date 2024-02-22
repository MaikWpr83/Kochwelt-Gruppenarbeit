async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}
let amounts = [600, 2, 2, 1, 5, 2, 3, 2, 1, 1];
let items = [
  "g Hähnchenbrustfilet",
  " Frühlingszwiebel",
  " Knoblauchzehen",
  " EL Rapsöl",
  " EL Sojasauce",
  " EL Zucker",
  " EL Reisweinessig",
  " EL Mirin - Alternativ trockener Weißwein",
  " EL Sesamöl",
  " TL Speisestärke",
];

function addIngredient() {
  let factor = +document.getElementById("input-ingredients").value; // getting the factor from the input
  if (factor >= 1 && factor <= 20 && Number.isInteger(factor)) {
    // checking if the input value is matching all the conditions
    for (i = 0; i < items.length; i++) {
      // calculating the amounts of the items times the length of the array
      document.getElementById("i" + i).innerHTML = amounts[i] * factor; // calculating the amounts array with the factor from the input and sending it to inner HTML
    }
  }
}
function loadItems() {
  for (i = 0; i < items.length; i++) {
    document.getElementById("table-ingredients").innerHTML += `
        <tr>
        <td><var id="i${i}">${amounts[i]}</var>${items[i]}</td> 
        </tr>`;
  }
}

let burgercontainer = false;

function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}

async function burgerMenu() {   // Testing Delays with Javascript, transition in css is more common
  if (burgercontainer == false) {
    document.getElementById("burgermenu").style.transition="0.5s";
    document.getElementById("burgermenu").style.height="200px";
    await delay(1000); // if we dont "wait" code jumps and sets transition to 0 in under 0.5s
    document.getElementById("burgermenu").style.transition="0s"; 
    burgercontainer = true;
  } else {
    document.getElementById("burgermenu").style.transition="0.5s";
    document.getElementById("burgermenu").style.height="0px";
    await delay(1000);  
    document.getElementById("burgermenu").style.transition="0s";   
    burgercontainer = false;
  }
}
