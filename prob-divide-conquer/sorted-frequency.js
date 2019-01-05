function sortedFrequency(arr, num) {
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  let current;
  let lower;
  let upper;
  let freq = -1;
  let count = 0;

  //Find lower side of frequency range
  while(pointer1 < pointer2) {
    current = Math.floor((pointer1 + pointer2) / 2);
    if(arr[current] >= num) pointer2 = current;
    if(arr[current] < num) pointer1 = current + 1;
    if(arr[current] === num && arr[current - 1] < num) lower = current;  
    count++;
    if(count > 200) throw new Error('infinite loop');
  }

  count = 0
  pointer1 = 0;
  pointer2 = arr.length - 1;

    //Find lower side of frequency range
  while(pointer1 < pointer2) {
    if(arr[current] > num) pointer2 = current;
    if(arr[current] <= num) pointer1 = current + 1;
    current = Math.floor((pointer1 + pointer2) / 2);
    if(arr[current - 1] === num && arr[current] > num) upper = current;  
    count++;
    if(count > 200) throw new Error('infinite loop');
  }
  return upper - lower;
}


module.exports = sortedFrequency;

// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
