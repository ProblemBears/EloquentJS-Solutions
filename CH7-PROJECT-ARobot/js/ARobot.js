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

/*SIMULATION:  */
//A robot can be a function that takes a VillageState object and returns the name of a nearby place
function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
}

//Brute Force way of randomly picking a direction to travel
function randomPick(array) 
{
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}
function randomRobot(state) 
{
    return {direction: randomPick(roadGraph[state.place])};
}

//We first need a way to create a STATE with some parcels. We do it here in this
// statics function (defined by directly adding it to the constructor's properties)
VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do 
        {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

runRobot(VillageState.random(), randomRobot);