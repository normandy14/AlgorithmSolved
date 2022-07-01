// Input: 2 dnaStrings
// Output: Hamming distance
// HAMM https://rosalind.info/problems/hamm/

getNumPointMutations = (dnaString1, dnaString2) => {
  var numMutations = 0;
  for (let i=0; i < dnaString1.length; i++) {
    if (dnaString1[i] !== dnaString2[i]) {
      numMutations += 1;
    }
  }
  return numMutations;
  
}

console.log(getNumPointMutations("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"));
