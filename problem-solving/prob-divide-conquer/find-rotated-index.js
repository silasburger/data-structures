findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

//

function findRotatedIndex(rArr, target) {
  let p1 = 0;
  let p2 = rArr.length - 1;
  let curr = Math.floor((p1 + p2 / 2));
  while(rArr[curr] !== target && p1 <= p2) {
    if(rArr[curr] === target) return curr;
    if(target < rArr[curr] && target > rArr[p1]) p2 = curr - 1;
    if(target < rArr[curr] && target < rArr[p1]) p1 = curr + 1; 
    if(target > rArr[curr] && target < rArr[p2]) p1 = curr + 1;
    if(target > rArr[curr] && target > rArr[p2]) p2 = curr - 1;
  }
  return -1;
}

module.exports = findRotatedIndex