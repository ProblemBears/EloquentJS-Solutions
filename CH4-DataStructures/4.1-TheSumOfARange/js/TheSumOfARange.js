// Your code here.
function sum(nums)
{
    let res = 0
    for(let num of nums) res += num;
    return res;
}

function range(start, end, step=1)
{
    let res = [];
    if( start < end)
    {
        for(start; start <= end; start += step)
            res.push(start);
    }
    else
    {
        for(start; start >= end; start += step)
            res.push(start);
    }
    return res;
}

element = document.getElementById("TheSumOfARange");
pTag = document.createElement("p");
text = document.createTextNode("range(1, 10): " + range(1, 10) + " " + "range(5, 2, -1): " + range(5, 2, -1) + " " + "sum(range(1, 10)): " + sum(range(1, 10)));

pTag.appendChild(text);
element.appendChild(pTag);