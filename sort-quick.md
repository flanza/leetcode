Quick Sort is another efficient sorting algorithm that, like Merge Sort, follows the divide-and-conquer approach. However, it sorts the array in place and typically has better performance in practice, even though both algorithms have the same average time complexity of O(n log n).

### How Quick Sort Works:

1.  **Choose a Pivot**:
    
    -   Select an element from the array as the pivot. The choice of pivot can affect the performance, but common strategies include picking the first element, the last element, the middle element, or a random element.
2.  **Partitioning**:
    
    -   Rearrange the elements in the array such that all elements less than the pivot are on its left, and all elements greater than the pivot are on its right. The pivot itself will be in its correct final position in the sorted array.
3.  **Recursively Apply**:
    
    -   Recursively apply the above steps to the sub-arrays formed by partitioning, excluding the pivot.

### Example:

Consider the following array: \[10, 7, 8, 9, 1, 5\]

**Step 1: Choose a Pivot**:

-   Let's choose the last element as the pivot: pivot = 5

**Step 2: Partitioning**:

-   Rearrange the array so that elements less than 5 are on the left, and elements greater than 5 are on the right: \[1, 7, 8, 9, 10, 5\]
-   After partitioning around the pivot, the array might look like \[1, 5, 8, 9, 10, 7\], where 5 is now in its correct sorted position.

**Step 3: Recursively Apply**:

-   Apply Quick Sort to the sub-arrays \[1\] and \[8, 9, 10, 7\].

**Step 4: Choose a New Pivot**:

-   For the right sub-array \[8, 9, 10, 7\], choose a pivot, say 7, and partition again.
-   After partitioning around 7, the array might look like \[1, 5, 7, 8, 9, 10\].

**Repeat** until all sub-arrays are sorted.

### Complexity:

-   **Time Complexity**:
    -   Best Case: O(n log n) when the pivot divides the array into two equal halves.
    -   Average Case: O(n log n) over many inputs due to the recursive division.
    -   Worst Case: O(n^2) when the pivot results in the most unbalanced partitions (e.g., if the pivot is always the smallest or largest element).
-   **Space Complexity**: O(log n) due to the stack space used by the recursion (in-place sorting).

### Key Points:

1.  **Pivot Selection**: The choice of pivot is crucial for performance. Randomized pivot selection or the "median of three" method (choosing the median of the first, middle, and last elements) can help mitigate worst-case scenarios.
2.  **Partitioning**: Efficient partitioning is key to Quick Sort. This process ensures that the pivot ends up in its correct position.
3.  **In-Place Sorting**: Quick Sort is an in-place sorting algorithm, which means it does not require additional storage proportional to the input size.

### Steps to Implement Quick Sort:

1.  **Partition Function**: Implement a function that partitions the array around the pivot and returns the pivot's final position.
2.  **Recursive Quick Sort Function**: Implement the main Quick Sort function that uses the partition function to recursively sort the sub-arrays.

By understanding and following these steps, you should be able to implement Quick Sort effectively. Feel free to try implementing it based on this explanation!