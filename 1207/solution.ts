function uniqueOccurrences(arr: number[]): boolean {
  const occurrences: number[] = [];
  const excludes: number[] = [];
  let current: number = 0;
  for (let i = 0; i < arr.length; i++) {
    current = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == arr[i] && !excludes.includes(arr[i])) {
        current++;
      }
    }
    excludes.push(arr[i]);
    if (current !== 0) occurrences.push(current);
  }
  return !(new Set(occurrences).size !== occurrences.length);
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
console.log(uniqueOccurrences([3, 5, -2, -3, -6, -6]));
