//Testing Github commit detection after email change
function deepEqual(a, b) {
if (a === b) return true;

if (a == null || typeof a != "object" ||
    b == null || typeof b != "object") return false;

let keysA = Object.keys(a), keysB = Object.keys(b);

if (keysA.length != keysB.length) return false;

for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
}

return true;
}

let element = document.getElementById("DeepComparison");
let pTag1 = document.createElement("p");
let pTag2 = document.createElement("p");
let pTag3 = document.createElement("p");

let obj = {here: {is: "an"}, object: 2};

let text = document.createTextNode( deepEqual(obj, obj) );
pTag1.appendChild(text);
element.appendChild(pTag1);
// → true

text = document.createTextNode( deepEqual(obj, {here: 1, object: 2}) );
pTag2.appendChild(text);
element.appendChild(pTag2);
// → false

text = document.createTextNode( deepEqual(obj, {here: {is: "an"}, object: 2}) );
pTag3.appendChild(text);
element.appendChild(pTag3);
// → true