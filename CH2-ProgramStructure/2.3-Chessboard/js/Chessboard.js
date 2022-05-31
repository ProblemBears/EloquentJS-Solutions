let size = 8;

let element = document.getElementById("Chessboard");

for (let y = 0; y < size; y++) {
    let row = "";
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
        row += " ";
        } else {
        row += "#";
        }
    }
    let pTag = document.createElement("p");
    let text = document.createTextNode(row);
    pTag.appendChild(text);
    element.appendChild(pTag);
}