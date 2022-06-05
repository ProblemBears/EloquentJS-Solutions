//Converts an array into a list
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
    }
    return list;
}

//Converts a list into an array
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
    array.push(node.value);
    }
    return array;
}

//Add a node to the front of the list and return it
function prepend(value, list) {
    return {value, rest: list};
}

//Return the value of the given index on the list
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

let element = document.getElementById("AList");
let pTag1 = document.createElement("p");
let pTag2 = document.createElement("p");
let pTag3 = document.createElement("p");
let pTag4 = document.createElement("p");

let text = document.createTextNode( JSON.stringify(arrayToList([10, 20])) );
pTag1.appendChild(text);
element.appendChild(pTag1);
// → {value: 10, rest: {value: 20, rest: null}}

text = document.createTextNode( listToArray(arrayToList([10, 20, 30])) );
pTag2.appendChild(text);
element.appendChild(pTag2);
// → [10, 20, 30]

text = document.createTextNode( JSON.stringify(prepend(10, prepend(20, null))) );
pTag3.appendChild(text);
element.appendChild(pTag3);
// → {value: 10, rest: {value: 20, rest: null}}

text = document.createTextNode( nth(arrayToList([10, 20, 30]), 1) );
pTag4.appendChild(text);
element.appendChild(pTag4);
// → 20