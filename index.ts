export function mergeSorting(
    arr1: number[],
    arr2: number[],
    arr3: number[]
): number[] {
    const result: number[] = [];

    let i = 0;
    let j = arr2.length - 1;
    let k = 0;

    while (
        i < arr1.length ||
        j >= 0 ||
        k < arr3.length
    ) {
        if (i < arr1.length && (j < 0 || arr1[i] <= arr2[j]) && (k >= arr3.length || arr1[i] <= arr3[k])) {
            result.push(arr1[i]);
            i++;
        } else if (j >= 0 && (k >= arr3.length || arr2[j] <= arr3[k])) {
            result.push(arr2[j]);
            j--;
        } else {
            result.push(arr3[k]);
            k++;
        }
    }

    return result;
}

console.log("Test 1:", mergeSorting([1, 4, 7], [9, 6, 3, 0], [2, 5, 8]));

console.log("Test 2:", mergeSorting([1, 3, 3], [6, 3, 1], [2, 4, 6]));

console.log("Test 3:", mergeSorting([11, 15, 16], [6, 5, 4], [7, 8, 9]));
