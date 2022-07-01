mortalRabbits = (n, m) => {
  if (m < 2) {
    throw 'There are no adult rabbits';
  }
  var genArray = Array(m).fill(0)
  genArray[1] = 1;
  return mortalRabbitsHelp(n, m, genArray)
}

mortalRabbitsHelp = (n, m, genArray) => {
  sumRabbits = 0;
  if (n <= 2) {
    sumRabbits = 0;
    for (let i=0; i < genArray.length - 1; i++) {
      sumRabbits += genArray[i];
    }
    console.log("sumRabbits: " + sumRabbits)
    return sumRabbits
  }
  var newGenArray = Array(m).fill(0)
  var newChildren = genArray.slice(1, genArray.length).reduce((a, b) => a + b)
  var temp = genArray[0]
  for (let i=1; i < genArray.length - 1; i++) {
    newGenArray[i + 1] = genArray[i]
  }
  newGenArray[0] = newChildren;
  newGenArray[1] = temp;
  return mortalRabbitsHelp(n-1, m, newGenArray);
}

/*
mortalRabbits = (n, m) => {
  return mortalRabbitsHelp (n, m, 0, 1, 0)
}

mortalRabbitsHelp = (n, m, gen1, gen2, gen3) => {
  if (n <= 1) {
    return gen1 + gen2 + gen3;
  }
  gen1 = gen2 + gen3
  gen3 = gen2
  return mortalRabbitsHelp(n-1, m, gen1, gen2, gen3)
}

console.log(mortalRabbits(6, 3));
*/

mortalRabbits(82, 20);