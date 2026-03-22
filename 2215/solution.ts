function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set<number>(nums1);
  const set2 = new Set<number>(nums2);

  const onlyInA: number[] = [];
  const onlyInB: number[] = [];

  for (const num of set1) {
    if (!set2.has(num)) {
      onlyInA.push(num);
    }
  }

  for (const num of set2) {
    if (!set1.has(num)) {
      onlyInB.push(num);
    }
  }

  return [onlyInA, onlyInB];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
