function sort() {
  function defaultOf(arg, val) {
    return arg === undefined ? val : arg;
  }
  function merge(arrB, arrC) {
    var result = [];
    while (arrB.length > 0 && arrC.length > 0) {
      if (arrB[0] < arrC[0]) {
        result.push(arrB.shift());
      } else {
        result.push(arrC.shift());
      }
    }
    return result.concat(arrB.slice()).concat(arrC.slice());
  }
  var publicAPI = {
    insertionSort: function (arr) {
      /*
      * insertsionSort works by iterating through the array A,
      * beginning at A[1] to A[A.length], grabing it's index as a key,
      * then looping in reverse comparing that key to every index until
      * it finds one that is less it than it, then it leaves the key.
      * best case: already sorted, theta(n - 1)
      * worst case: reverse sorted, n(n+1)/2 ~ theta(n^2)
      */
      var j, key, i, n = arr.length;
      for (j = 1; j < n; j += 1) {
        key = arr[j];
        i = j - 1;
        while (i >= 0 && arr[i] > key) {
          arr[i + 1] = arr[i];
          i -= 1;
        }
        arr[i + 1] = key;
      }
      return arr;
    },
    mergeSort: function mergeSort(arr, start, end) {
      /*
       * mergeSort works by first slicing an array A into floored halved amd 
       * recursively slicing it until it has 1 or 0 elements whereupon it 
       * sorts and merges the returning leaves of the recursion.
       * worst case: theta(nlgn)
       */
      var n = arr.length;
      start = defaultOf(start, 0);
      end = defaultOf(end, n);
      if (start > end) {
        return arr;
      }
      if (n > 1) {
        var pivot = Math.floor(start + end / 2),
          arrB = arr.slice(start, pivot),
          arrC = arr.slice(pivot, end);
        return merge(mergeSort(arrB), mergeSort(arrC));
      }
      return arr;
    }
  };
  return publicAPI;
}
module.exports = sort;