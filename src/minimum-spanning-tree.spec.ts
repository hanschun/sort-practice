import { Edge, minimumSpanningTree } from "./minimum-spanning-tree";

describe('Minimum spanning tree', () => {
	it('should return the mimimum cost for a set of edges', () => {
		const edges: Edge[] = [
			{
				points: {
					first: 1,
					second: 2,
				},
				weight: 1,
			},
			{
				points: {
					first: 1,
					second: 3,
				},
				weight: 4,
			},
			{
				points: {
					first: 1,
					second: 4,
				},
				weight: 3,
			},
			{
				points: {
					first: 2,
					second: 4,
				},
				weight: 2,
			},
			{
				points: {
					first: 3,
					second: 4,
				},
				weight: 5,
			}
		];

		const minimumCost = minimumSpanningTree(edges);
		expect(minimumCost).toBe(7);
	});

	it('should return a minimum cost for a second set of edges', () => {
		const differentEdges = [
			{
				points: {
					first: 1,
					second: 2,
				},
				weight: 1,
			},
			{
				points: {
					first: 1,
					second: 3,
				},
				weight: 7,
			},
			{
				points: {
					first: 2,
					second: 3,
				},
				weight: 5,
			},
			{
				points: {
					first: 2,
					second: 4,
				},
				weight: 4,
			},
			{
				points: {
					first: 2,
					second: 5,
				},
				weight: 3,
			},
			{
				points: {
					first: 3,
					second: 5,
				},
				weight: 6,
			},
			{
				points: {
					first: 4,
					second: 5,
				},
				weight: 2,
			},
		];

		const minimumCost = minimumSpanningTree(differentEdges);
		expect(minimumCost).toBe(11);
	});
});
