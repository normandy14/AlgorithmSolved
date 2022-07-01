// Input: At most DNA strings
// Output: The id of the string with the highest GC count

maxGC = (dna_struct) => {
    max_key = "";
    max_gc = 0;
    for (let key of Object.keys(dna_struct)) {
      percent_gc = getGC(dna_struct[key]);
      if (percent_gc > max_gc) {
        max_key = key;
        max_gc = percent_gc;
      }
    }
    return [max_key , max_gc]
}

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

dna_struct = {
  "Rosalind_6404" : "CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCCTCCCACTAATAATTCTGAGG",
  "Rosalind 5959" : "CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCTATATCCATTTGTCAGCAGACACGC",
  "Rosalind_0808" : "CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGACTGGGAACCTGCGGGCAGTAGGTGGAAT"
}

console.log(maxGC(dna_struct))