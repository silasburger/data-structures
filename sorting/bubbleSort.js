function bubbleSort(array) {
  if(array.length <= 1) return array;
  let pointer1 = 0;
  while(array[pointer1] !== undefined) {
    for(let i = pointer1; i < array.length-1; i++) {
      if(array[i] > array[i+1]) {
        pointer1++;
        break;
      }
      if(array[i] > array[i+1]) {
        [array[i], array[i+1]] = [array[i+1], array[i]];
      }
    }
  }
  return array;
}