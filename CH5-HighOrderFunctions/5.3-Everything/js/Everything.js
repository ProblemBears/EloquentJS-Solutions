function addParagraph(text)
{
    let element = document.getElementById("Everything");
    let pTag = document.createElement("p");
    text = document.createTextNode(text);

    pTag.appendChild(text);
    element.appendChild(pTag);
}

function every(array, test)
{
    for(let i = 0; i < array.length; i++)
    {
        if( !test(array[i]) ) return false;
    }
    return true;
}

addParagraph(every([1, 3, 5], n => n < 10));
//true

addParagraph(every([2, 4, 16], n => n < 10));
//false

addParagraph(every([], n => n < 10));
//true