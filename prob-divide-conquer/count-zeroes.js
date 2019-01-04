function countZeroes(arr) {
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  if(arr[pointer2] === 1) return 0;
  if(arr[pointer1] === 0) return arr.length;
  let current;
  while(pointer1 < pointer2) {
    current = Math.floor((pointer2 + pointer1) / 2);
    if(arr[current] === 0 && arr[current - 1] === 1) {
      return arr.length - current;
    }
    if(arr[current] === 0) pointer2 = current;
    if(arr[current] === 1) pointer1 = current;
  }
}


// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

module.exports = countZeroes;