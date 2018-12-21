function bubbleSort(array) {
  if(array.length <= 1) return array;
  let hadToSort = true;
  let j = 0;
  while(hadToSort) {
    hadToSort = false;
    for(let i = 0; i < array.length-1-j; i++) {
      if(array[i] > array[i+1]) {
        [array[i], array[i+1]] = [array[i+1], array[i]];
        hadToSort = true;
      }
    }
    j++;
  }
  return array;
}