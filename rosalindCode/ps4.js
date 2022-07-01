// Input: positive int n <= 40 and k <= 5
// Output: total number of rabbits after n months, with k-produced with each generation
// FIB - https://rosalind.info/problems/fib/

rabbitSeq = (n, k) => {
  return rabbitSeqHelp (n, k, 0, 1)
}

rabbitSeqHelp = (n, k, child, adults) => {
  if (n <= 1) {
    return adults;
  }
  return rabbitSeqHelp (n - 1, k, k * adults, child + adults)
}

console.log(rabbitSeq(5, 3));
console.log(rabbitSeq(30, 3));
