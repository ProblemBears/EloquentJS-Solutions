function insertPTag(text)
{
    let element = document.getElementById("BorrowingAMethod");
    let pTag = document.createElement("p");
    text = document.createTextNode(text);
    
    pTag.appendChild(text);
    element.appendChild(pTag);
}

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
insertPTag(Object.prototype.hasOwnProperty.call(map, "one"));
// → true