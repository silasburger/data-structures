// add whatever parameters you deem necessary
function constructNote(message, letters) {
  let freqCounter = {};
  for(let letter of letters) {
    freqCounter[letter] = (freqCounter[letter] ? freqCounter[letter] : 0) + 1;
  }

  for(let letter of message) {
    freqCounter[letter] = (freqCounter[letter] ? freqCounter[letter] : 0) - 1;
    if(freqCounter[letter] < 0) return false  
  }

  return true;
}

module.exports = constructNote;

// loop through letters and add to frequency counter
// loop through message and remove letters from frequency counter
// if counter goes below zero
  //return false
//return true