from collections import defaultdict

class Graph:
	def __init__(self):
		self.graph=defaultdict(list)

	def addEdge(self,u,v):
		self.graph[u].append(v)

	def DFSutil(self,v,visited):
		visited[v]= True
		print(v)
		for x in self.graph[v]:
			if(visited[x] == False):
				self.DFSutil(x,visited)
	def DFS(self,v):
		visited=[False]*(len(self.graph))
		self.DFSutil(v,visited)

g=Graph()
g.addEdge(0, 1) 
g.addEdge(0, 2) 
g.addEdge(1, 2) 
g.addEdge(2, 0) 
g.addEdge(2, 3) 
g.addEdge(3, 3)

print("Following is the DFS starting from 2")
g.DFS(2)