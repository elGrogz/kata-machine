### Big O

-   A way to categorise an algorithms time or memory requirements based on input
-   Big O - as your input grows, how fast does your run time/memory requirements increase?

-   `O(2n)` doesn't exist because we drop constants (eg the 2) because the result isn't that significant - we are interested in how it grows
-   BigO we consider the worst case (i.e. we would loop through everything) - we don't consider times when the loop would exit early.
-   `O(1)` does the same operation every time
-   `O(logn)` - base of 2
-   `O(n)` grows linearly
-   `O(nlogn)` -

1. Growth with respect to the input
2. Constants are dropped
3. Worst case is usually the way we measure

### Arrays

-   `const a = []` is not an array
-   Array is contiguous memory space
-   `ArrayBuffer` is a contiguous piece of memory, then you can create views into the array (eg . `Uint8Array(array)`)
-   You cannot grow an array (i.e insert/overwrite data that isn't within the array length)
-   BigO of accessing an array is O(n) (given the array length is a constant - 1 to infinite - no matter how big the array is, we do a constant amount of things - one thing)

### Binary Search

-   `O(n)` because it's one level of loop and it's running on a linear progression through the array
-   Divides the array up in to chunks
-   log of 4096 is 12 (12 halvings to get to 1)
-   Under the assumption the array is sorted
-   Called binary search because we are doing halvings and checking if the value is lower than the value we initially check at the halfway point
-   `search(arr, lo, hi, value)`

    -   `do`
    -   `m = lo + (hi - lo) / 2`
    -   `v = arr[m]`
    -   `if v = value return true` (or return index)
    -   `else if v > m`
        -   `lo = m + 1`
    -   `else`
        -   `hi = m`
    -   `while (lo < hi)`
    -   `return false`

### Bubble Sort

-   Any Xi will be less than or equal to Xi + 1
-   `[1, 3, 4, 7, 4, 2]`
-   Algorithm: if I am larger than you, then swap
-   1 iteration of bubble sort: the largest item goes to the end
-   Then repeat until no more items move
-   First iteration: N checks
-   Second N - 1
-   Third N - 2
-   Times = N + 1 x N/2
-   Running time is O(n squared)
