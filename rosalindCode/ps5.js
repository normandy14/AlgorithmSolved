// Input: At most DNA strings
// Output: The id of the string with the highest GC count

maxGC = (dna_array) => {
  if (dna_array.length === 0) {
    return;
  }
  if (dna_array.length === 1) {
    return dna_array[0];
  }
  var max_gc = 0;
  var max_index = 0;
  var percGC = 0;
  for (let dnaString of dna_array) {
    percGC = getGC(dnaString);
    if (percGC > max_gc) {
      max_gc = percGC;
    }
  }
  return dna_array[max_index];
};

getGC = (dnaString) => {
  var countGC = 0
  for (let c of dnaString) {
    if( c == "G" || c == "C") {
      countGC += 1
    }
  }
  percGC =  countGC / dnaString.length
  return percGC
}

dna_list = ["CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCCTCCCACTAATAATTCTGAGG", "CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCTATATCCATTTGTCAGCAGACACGC", "CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGACTGGGAACCTGCGGGCAGTAGGTGGAAT"]

console.log(maxGC(dna_list))