let arrays = [[1, 2, 3], [4, 5], [6]];

let res = arrays.reduce((flat, e) => flat.concat(e));

let element = document.getElementById("Flattening");
let pTag = document.createElement("p");
let text = document.createTextNode(res);
pTag.appendChild(text);
element.appendChild(pTag);
// → [1, 2, 3, 4, 5, 6]