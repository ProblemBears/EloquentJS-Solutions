//Array of roads(edges) that illustrate connections between place(vertices)
const roads = 
[
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

//ABOVE isn't easy to work with so, we convert it to a graph data structure:
function buildGraph(edges)
{
    //Create {} with no prototype
    let graph = Object.create(null);

    //Define a function to add stuff to a "Adjacency List" data structure
    function addEdge(from, to)
    {
        if( graph[from] == null )
            graph[from] = [to];
        else
            graph[from].push(to);
    }

    //For every element in roads[], we make an array with two elements by splitting the strings at "-", and destructure them to the bindings from and to. Then we add these to the graph.
    for(let [from, to] of edges.map(r => r.split("-")))
    {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

const roadGraph = buildGraph(roads);



/*THE TASK: We don't use OOP for each thing. Instead we define a changeable STATE */
class VillageState
{
    constructor(place, parcels)
    {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination)
    {
        //If not a valid move: return old state
        if(!roadGraph[this.place].includes(destination))
            return this;
        //Otherwise change the place property to the new destination:
        else
        {
            //map() takes care of moving parcels, and filter() does the delivering(removed from undelivered parcels)
            let parcels = this.parcels.map
            (
                p => 
                {
                    if(p.place != this.place) return p;
                    return {place: destination, address: p.address};
                }
            ).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office