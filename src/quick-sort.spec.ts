import { quickSort } from "./quick-sort";

describe('quick sort', () => {
	it('should sort items', () => {
		const items = [5, 3, 7, 6, 2, 9];
		const sortedArray = quickSort(items, 0, items.length - 1);
		expect(sortedArray).toEqual([2, 3, 5, 6, 7, 9]);
	});
});
