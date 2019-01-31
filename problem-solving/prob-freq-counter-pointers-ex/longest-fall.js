// add whatever parameters you deem necessary
function longestFall(numArr) {
  if (numArr.length === 0) return 0;
  if (numArr.length === 1) return 1;

  let pointer1 = 0;
  let pointer2 = 0;
  let longestFall = 0;
  let fall;

  while (pointer2 < numArr.length - 1) {
    if (numArr[pointer2 + 1] < numArr[pointer2]) {
      pointer2++;
      fall = pointer2 - pointer1 + 1;
    } else {
      pointer1++;
      pointer2 = pointer1;
    }
    if (fall > longestFall) {
      longestFall = fall;
    }
  }
  return longestFall;
}
// initialize pointer1 and pointer2 at 0 and 1, respectively
// initialize longestFall at 0

// while pointer2 is less than the length of the array
// check if pointer2 is less than pointer1
// set longestFall to pointer2 - pointer1 and then iterate pointer2
// else iterate both pointer1 and pointer2
// return longestFall

module.exports = longestFall;
