let element = document.getElementById("FizzBuzz");
for(let i = 1; i <= 100; i++)
{
    let line = "";
    if( i%3 == 0 ) line += "Fizz";
    if( i%5 == 0 ) line += "Buzz";
    let newParaTag = document.createElement("p");
    let newText = document.createTextNode( line || i );
    newParaTag.appendChild(newText);
    element.appendChild(newParaTag);
}