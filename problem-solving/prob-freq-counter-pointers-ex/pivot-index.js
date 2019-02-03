// add whatever parameters you deem necessary
// expect(pivotIndex([1, 2, 1, 6, 3, 1])).toBe(3); // 3

// p1, p2, sum1, sum2
// if sums are equal add one to both sides
// if p1 and p2 are on same index and sums are equal, then return idx
// if sums are not equal, then move

function pivotIndex(arr) {
  const sum = arr.reduce(function(acc, val) {
    acc += val;
    return acc;
  }, 0);
  let p1 = 0;
  let p2 = arr.length - 1;
  let sum1 = arr[p1];
  let sum2 = arr[p2];
  let remainder;

  while (p1 < p2) {
    remainder = sum - (sum1 + sum2);
    if (sum1 > sum2 && remainder > 0) {
      p2++;
      sum2 += arr[p2];
    } else if (sum2 > sum1 && remainder > 0) {
      p1++;
      sum1 += arr[p1];
    } else if (sum1 > sum2 && remainder < 0) {
      p1++;
      sum1 += arr[p1];
    } else if (sum2 > sum1 && remainder < 0) {
      p2++;
      sum2 += arr[p2];
    } else if (sum1 === sum2) {
      p1++;
      p2--;
      sum2 += arr[p2];
      sum1 += arr[p1];
    } else if(remainder === 0) {
      p2--;
      sum2 += arr[p2];
  }
    if (sum1 === sum2 && p1 === p2) return p1;
  }
  return -1;
}

module.exports = pivotIndex;
