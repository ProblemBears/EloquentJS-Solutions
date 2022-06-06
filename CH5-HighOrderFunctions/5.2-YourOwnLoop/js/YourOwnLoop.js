function addParagraph(text)
{
    let element = document.getElementById("YourOwnLoop");
    let pTag = document.createElement("p");
    text = document.createTextNode(text);

    pTag.appendChild(text);
    element.appendChild(pTag);
}


function loop(n, testFunc, updateFunc, bodyFunc)
{
    let i = n;
    for(i; testFunc(i); i = updateFunc(i))
        bodyFunc(i);
}

loop(3, n => n > 0, n => n - 1, addParagraph);
// → 3
// → 2
// → 1