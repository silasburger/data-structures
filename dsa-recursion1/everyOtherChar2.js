function everyOther(string) {
  if(string.length === 0) return '';
  if(string.length % 2 !== 0) {
    return string[0] + everyOther(string.slice(1));
  }
  return everyOther(string.slice(1));
}

