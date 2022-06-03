function isEven(num)
{
	if(num == 0) return true;
  	if(num == 1) return false;
  	if (num < 0) return isEven(-num);
  	return isEven(num-2);
}

let element = document.getElementById("Recursion");
let pTag = document.createElement("p");
let brTag = document.createElement("br");

// → true
let text = document.createTextNode("isEven(50): " + isEven(50) + "  ");
pTag.appendChild(text);
// → false
text = document.createTextNode("isEven(75): " + isEven(75) + "  ");
pTag.appendChild(text);

// → false
text = document.createTextNode("isEven(-1): " + isEven(-1) + "  ");
pTag.appendChild(text);

element.appendChild(pTag);
