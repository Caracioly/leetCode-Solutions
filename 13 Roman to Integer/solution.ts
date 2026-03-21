// npx ts-node solution.ts

function romanToInt(s: string): number {
  const romanNumerals: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const keys = Object.keys(romanNumerals);
  const numbers = []
  let sum: number = 0
  for (const char of s) {
    if (keys.indexOf(char) !== -1) {
        if (keys.indexOf(char) + 1 === keys) 
      numbers.push(romanNumerals[char].valueOf())
    }
    sum = numbers.reduce((acc, v) => acc + v)
  }

  console.log(sum)
  return sum;
}

romanToInt('MCMXCIV');

