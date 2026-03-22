function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let canBePlanted: number = 0;
  
  for (let i = 0; i < flowerbed.length; i++) {
    const left = flowerbed[i - 1];
    const current = flowerbed[i];
    const right = flowerbed[i + 1];
    
    if (current === 0 && left !== 1 && right !== 1) {
      flowerbed[i] = 1;
      canBePlanted++;
    }
  }
  return canBePlanted >= n;
}

console.log(canPlaceFlowers([0, 0, 0, 0, 0], 4));