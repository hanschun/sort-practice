/*
reference: https://www.hackerearth.com/practice/algorithms/graphs/minimum-spanning-tree/tutorial/
*/

interface Pair {
	first: any,
	second: any,
}

export interface Edge {
	points: Pair,
	weight: number,
}

const id: number[] = [];

function initialize(max: number): void {
	for (let i = 0; i < max; i++) {
		id[i] = i;
	}
}

function kruskal(edges: Edge[]): number {
	let x: number, y: number, cost: number, minimumCost = 0;
	for (let i = 0; i < edges.length; i++) {
		x = edges[i].points.first;
		y = edges[i].points.second;
		cost = edges[i].weight;
		if (root(x) !== root(y)) {
			minimumCost += cost;
			union(x, y);
		}
	}
	return minimumCost;
}

function root(x: number): number {
	const init = x;
	while (id[x] !== x) {
		id[x] = id[id[x]];
		x = id[x];
	}
	return x;
}

function union(x: number, y: number): void {
	const p = root(x);
	const q = root(y);
	id[p] = id[q];
}

export function minimumSpanningTree(edges: Edge[]) {
	let minimumCost: number;
	initialize(edges.length);
	edges.sort((a: Edge, b: Edge) => {
		return a.weight - b.weight;
	});
	minimumCost = kruskal(edges);
	return minimumCost;
}
