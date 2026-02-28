import { mergeSorting } from './index';

describe('mergeSorting', () => {
    test('Test 1: [1, 4, 7], [9, 6, 3, 0], [2, 5, 8]', () => {
        expect(mergeSorting([1, 4, 7], [9, 6, 3, 0], [2, 5, 8])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('Test 2: [1, 3, 3], [6, 3, 1], [2, 4, 6]', () => {
        expect(mergeSorting([1, 3, 3], [6, 3, 1], [2, 4, 6])).toEqual([1, 1, 2, 3, 3, 3, 4, 6, 6]);
    });

    test('Test 3: [11, 15, 16], [6, 5, 4], [7, 8, 9]', () => {
        expect(mergeSorting([11, 15, 16], [6, 5, 4], [7, 8, 9])).toEqual([4, 5, 6, 7, 8, 9, 11, 15, 16]);
    });
});
