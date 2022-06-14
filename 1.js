function polindrome(kata) {
  let low = 0;
  let hi = kata.length - 1;

  while (low <= hi) {
    if (kata[low] !== kata[hi]) return false;
    low += 1;
    hi -= 1;
  }

  return true;
}

function recursive_polindrome(kata) {
  let low = kata[0];
  let hi = kata[kata.length - 1];

  if (low === hi && kata.length >= 1)
    return recursive_polindrome(kata.slice(1, kata.length - 1));
  else if (low !== hi) return false;

  return true;
}

// console.log(polindrome("katak"));
// console.log(polindrome("basi"));
// console.log(polindrome("isi"));

console.log(recursive_polindrome("katak"));
console.log(recursive_polindrome("basi"));
console.log(recursive_polindrome("isi"));
