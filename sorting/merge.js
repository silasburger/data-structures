function merge(arr1, arr2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let sortedArr = [];
  while(pointer1 < arr1.length && pointer2 < arr2.length) {
    if(arr1[pointer1] <= arr2[pointer2]) {
      sortedArr.push(arr1[pointer1]);
      pointer1++;
    } else {
      sortedArr.push(arr2[pointer2]);
      pointer2++;
    }
  }
}