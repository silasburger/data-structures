function sortedFrequency(arr, num) {
    const first = findLower(arr, num);
    if(first === -1) return -1;
    const last = findUpper(arr, num);
    return last - first + 1;
}

function findLower(arr, num) {
    let lower = 0;
    let upper = arr.length - 1;
    let mid = Math.floor((lower + upper)/2);
    while(!(arr[mid-1] !== num && arr[mid] === num) && lower < upper) {
        if(arr[mid] < num) lower = mid + 1;
        if(arr[mid] >= num) upper = mid - 1;
        mid = Math.floor((lower + upper)/2);
    }
    if(arr[mid] !== num) return -1;  
    return mid;
}

function findUpper(arr, num) {
    let lower = 0;
    let upper = arr.length - 1;
    let mid = Math.floor((lower + upper)/2);
    while(!(arr[mid+1] !== num && arr[mid] === num) && lower < upper) {
        if(arr[mid] <= num) lower = mid + 1;
        if(arr[mid] > num) upper = mid - 1;
        mid = Math.floor((lower + upper)/2);
    }
    return mid;
}


module.exports = sortedFrequency;

// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
