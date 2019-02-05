class Graph{
	constructor(){
		this.graph={};
	}

	addEdge(u,v){
		if(!this.graph.hasOwnProperty(u))
			this.graph[u]=[];
		this.graph[u].push(v);
	}

	BFSutil(visited,elem){
		let queue=[];
		visited[elem]=true;
		queue.push(elem);
		let str=" "
		while(queue.length>0){
			let r =queue.shift();
			str=str+r+" ";
			for(let i=0;i<this.graph[r].length;i++){
				let item=this.graph[r][i];
				if(!visited[item]){
					queue.push(item);
					visited[item]=true;
				}
			}
		}
		console.log(str);


	}

	BFS(elem){
		let visited={};
		for(let key in this.graph)
			visited[key]=false;
		this.BFSutil(visited,elem);

	}

}

let g= new Graph();

g.addEdge(0, 1) 
g.addEdge(0, 2) 
g.addEdge(1, 2) 
g.addEdge(2, 0) 
g.addEdge(2, 3) 
g.addEdge(3, 3)
g.BFS(2);

