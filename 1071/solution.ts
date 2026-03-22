function gcdOfStrings(str1: string, str2: string): string {
  const minLen = Math.min(str1.length, str2.length);

  for (let i = minLen; i > 0; i--) {
    if (str1 + str2 !== str2 + str1) return '';
    if (str1.length % i !== 0 || str2.length % i !== 0) continue;

    const candidate = str1.slice(0, i);

    const repeat1 = candidate.repeat(str1.length / i);
    const repeat2 = candidate.repeat(str2.length / i);

    if (repeat1 === str1 && repeat2 === str2) return candidate;
  }

  return '';
}

console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('ABABAB', 'ABAB'));
console.log(gcdOfStrings('LEET', 'CODE'));
console.log(gcdOfStrings('AAAAAB', 'AAA'));
