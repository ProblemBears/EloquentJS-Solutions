class Group
{
    constructor()
    {
        this.group = [];
    }

    add(e)
    {
        if(!this.has(e)) 
            this.group.push(e);
    }

    delete(e)
    {
        if(this.has(e))
            this.group.splice(this.group.indexOf(e), 1);
    }

    has(e)
    {
        return this.group.indexOf(e) != -1
    }

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
          group.add(value);
        }
        return group;
    }
}

function insertPTag(text)
{
    let element = document.getElementById("Groups");
    let pTag = document.createElement("p");
    text = document.createTextNode(text);
    
    pTag.appendChild(text);
    element.appendChild(pTag);
}

let group = Group.from([10, 20]);
insertPTag(group.has(10));
// → true
insertPTag(group.has(30));
// → false
group.add(10);
group.delete(10);
insertPTag(group.has(10));