
class Graph{

	constructor(){
		this.graph={};
	}
	
	addEdge(u,v){
		if(!this.graph.hasOwnProperty(u))
			this.graph[u]=[];
		this.graph[u].push(v);
	}

	DFSutil(elem,visited){
		console.log(elem);
		visited[elem]=true;
		for(let x in this.graph[elem]){
			if(!visited[x])
				this.DFSutil(x,visited);
		}

	}

	DFS(elem){
		let visited={};
		for(let item in this.graph){
			visited[item]=false;
		}
		this.DFSutil(elem,visited);
	}

}


let g= new Graph();
g.addEdge(0, 1) 
g.addEdge(0, 2) 
g.addEdge(1, 2) 
g.addEdge(2, 0) 
g.addEdge(2, 3) 
g.addEdge(3, 3)

g.DFS(2);



console.log();