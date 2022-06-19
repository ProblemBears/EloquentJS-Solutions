function handleArrow(e)
{
    let emoji = document.querySelector("p");
    let curSize = parseFloat( window.getComputedStyle(emoji, null).getPropertyValue('font-size') );
    if(e.key == "ArrowUp")
    {
        if( curSize > 70)
        {
            emoji.textContent = "💥";
            document.removeEventListener("keydown", handleArrow);
        }
        else
        {
            emoji.style.fontSize = (curSize + curSize * 0.1) + "px";
            e.preventDefault();
        }
    }
    else if(e.key == "ArrowDown")
    {
        emoji.style.fontSize = (curSize - curSize * 0.1) + "px";
        e.preventDefault();
    }
}

document.addEventListener("keydown", handleArrow);