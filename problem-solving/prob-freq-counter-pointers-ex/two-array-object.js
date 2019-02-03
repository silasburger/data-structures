// add whatever parameters you deem necessary
function twoArrayObject(keysArr, valsArr) {
  const object = {};
  let pointer = 0;
  let val;

  while(keysArr[pointer] !== undefined ) {
    val = valsArr[pointer] === undefined ? null : valsArr[pointer];
    object[keysArr[pointer]] = val;
    pointer++;
  }

  return object;
}

module.exports = twoArrayObject;

//must be letter in first array
//second array cant be longeer than first but first can be longer than second

//twoArrayObjest(['a', 'b', 'c', 'd'], [1, 2, 3]) => {a:1, b:1, c:3, d:null}


// one pointer starts at 0
// while keyArr[pointer] isn't undefined loop
  // if valsArr[pointer] is undefined, val is null
  // add key of keyArr[pointer] and value of val to object
// return object