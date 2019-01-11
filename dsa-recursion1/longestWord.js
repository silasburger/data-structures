function longestWord(arr) {
  if(arr[0] === undefined) return 0;
  if(arr[0].length > longestWord(arr.slice(1))) {
    return arr[0].length
  } else {
    return longestWord(arr.slice(1));
  }
}