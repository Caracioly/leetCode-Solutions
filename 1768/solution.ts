function mergeAlternately(word1: string, word2: string): string {
  const maxLen: number = Math.max(word1.length, word2.length);

  let merged: string[] = [];

  for (let i = 0; i < maxLen; i++) {
    if (word1.length > i) merged.push(word1[i]);

    if (word2.length > i) merged.push(word2[i]);
  }

  return merged.join('');
}

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));
