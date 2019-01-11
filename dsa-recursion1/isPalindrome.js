function isPalindrome(string, i = 0) {
  if(i===Math.floor(string.length/2)) return true;
  return string[i] === string[string.length-1-i] && isPalindrome(string, i+1);
  
}