class Vec
{
    constructor(x = 0,y = 0)
    {
        this.x = x;
        this.y = y;
    }

    plus(vector)
    {
        let resVec = new Vec( this.x + vector.x, this.y + vector.y );
        return resVec;
    }

    minus(vector)
    {
        let resVec = new Vec( this.x - vector.x, this.y - vector.y );
        return resVec;
    }

    get length()
    {
        return Math.sqrt( (this.x * this.x) + (this.y * this.y));
    }
}

function insertPTag(text)
{
    let element = document.getElementById("AVectorType");
    let pTag = document.createElement("p");
    text = document.createTextNode(text);
    
    pTag.appendChild(text);
    element.appendChild(pTag);
}

insertPTag( JSON.stringify(new Vec(1, 2).plus(new Vec(2, 3))) );
// → Vec{x: 3, y: 5}

insertPTag( JSON.stringify(new Vec(1, 2).minus(new Vec(2, 3))) );
// → Vec{x: -1, y: -1}

insertPTag( new Vec(3, 4).length );
// → 5