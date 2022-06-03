let element = document.getElementById("Minimum");

//FUNCTION BINDING: Using Arrow Syntax
let min = (num1, num2) => num1 < num2 ? num1 : num2;

let pTag = document.createElement("p");
let brTag = document.createElement("br");
// → 0
let text = document.createTextNode("min(0,10): " + min(0, 10));
pTag.appendChild(text);
pTag.appendChild(brTag);
text = document.createTextNode("min(0, -10): " + min(0, -10));
pTag.appendChild(text);
element.appendChild(pTag);
