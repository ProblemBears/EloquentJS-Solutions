let countBs = function(s)
{
	let n = s.length;
  	let counter = 0;
  	for(let i = 0; i < n; i++)
      	s[i] == "B" ? counter++ : counter += 0;
  	return counter;
}

let countChar = (s, c) => 
{
  	let n = s.length;
  	let counter = 0;
  	for(let i = 0; i < n; i++)
      	s[i] == c ? counter++ : counter += 0;
  	return counter;
}

let element = document.getElementById("BeanCount");
let pTag = document.createElement("p");
let brTag = document.createElement("br");
// → 2
let text = document.createTextNode("countBs('BBC'): " + countBs("BBC"));
pTag.appendChild(text);
pTag.appendChild(brTag);

// → 4
text = document.createTextNode("countChar('kakkerlak', 'k') " + countChar("kakkerlak", "k"));
pTag.appendChild(text);

element.appendChild(pTag);