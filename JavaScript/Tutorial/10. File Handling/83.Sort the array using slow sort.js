/*Sort the array using slow sort*/
/*
Input: arr[] = {6, 8, 9, 4, 12, 1}
Output: 1 4 6 8 9 12

Input: arr[] = {5, 4, 3, 2, 1}
Output: 1 2 3 4 5 */

    function slow_sort(A, i, j)
    {
      if (i >= j)
        return;
      let m = parseInt((i + j) / 2, 10);
      slow_sort(A, i, m);
      slow_sort(A, m + 1, j);
      if (A[j] < A[m])
        {
          let temp = A[j];
          A[j] = A[m];
          A[m] = temp;
        }
      slow_sort(A, i, j - 1);
    }
    function printArray(arr, size)
    {
        let i;
        for(i = 0; i < size; i++)
        console.log(arr[i] + " ");
        console.log("</br>");
    }
    let arr = [ 6, 8, 9, 4, 12, 1 ];
    let n = arr.length;
    slow_sort(arr, 0, n - 1);
    printArray(arr, n);