function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const greatest = findMax(candies);
    const result: boolean[] = []

    for (const candie of candies) {
        if (candie + extraCandies >= greatest) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result;
};

function findMax(nums: number[]): number {
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return max;
}   

console.log(kidsWithCandies([2,3,5,1,3], 3))
console.log(kidsWithCandies([4,2,1,1,2], 1))
console.log(kidsWithCandies([12,1,12], 10))