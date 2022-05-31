let element = document.getElementById("LoopingATriangle");

for (let line = "#"; line.length < 8; line += "#")
{
  let tag = document.createElement("p");
  let text = document.createTextNode(line);
  tag.appendChild(text);
  element.appendChild(tag);
}