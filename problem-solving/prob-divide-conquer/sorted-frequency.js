function sortedFrequency(arr, num) {
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  let current = Math.floor((pointer1 + pointer2) / 2);
  let lower;
  let upper;
  let loopCount = 0;

  if(!arr.length) return -1;
  while(pointer1 < pointer2) {
      if(arr[current-1] !== num && arr[current] === num) {
          lower = current;
          break;
      }
      if(arr[current] < num) pointer1 = current;
      if(arr[current] >= num) pointer2 = current;
      current = Math.floor((pointer1 + pointer2) / 2);
      loopCount++;
      if(loopCount > 1000) throw new Error('infinite loop');
  }

   pointer1 = 0;
   pointer2 = arr.length - 1;
   current = Math.floor((pointer1 + pointer2) / 2);

  while(pointer1 < pointer2) {
      if(arr[current+1] !== num && arr[current] === num) {
          upper = current;
          break;
      }
      if(arr[current] <= num) pointer1 = current;
      if(arr[current] > num) pointer2 = current;
      current = Math.floor((pointer1 + pointer2) / 2);
      loopCount++;
      if(loopCount > 1000) throw new Error('infinite loop');
  }
  return (upper - lower) + 1;
}


module.exports = sortedFrequency;

// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
