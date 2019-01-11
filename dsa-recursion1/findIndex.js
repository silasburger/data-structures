function findIndex(arr, value, i=0) {
  if(arr[i]===value) return i;
  if(i===arr.length) return -1;
  return findIndex(arr, value, i=i+1);
}