import { bblSort } from "./bubble-sort";

describe('bubble sort', () => {
	it('should sort', () => {
		// This is our unsorted array
		const arr = [243, 45, 23, 356, 3, 5346, 35, 5];

		// Now pass this array to the bblSort() function
		const sorted = bblSort(arr);
		expect(sorted).toEqual([3, 5, 23, 35, 45, 243, 356, 5346]);
	});
});

