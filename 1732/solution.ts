function largestAltitude(gain: number[]): number {
    let gainCount: number = 0;
    let count: number = 0;
    for (let i = 0; i < gain.length; i++) {
        count += gain[i];
        
        if (gainCount < count) {
            gainCount = count;
        }
        console.log(`gain1 -> ${gain[i - 1]}`)
        console.log(`gain2 -> ${gain[i]}`)

    }
    console.log(gainCount);
    return gainCount;
};


const test1 = [44,32,-9,52,23,-50,50,33,-84,47,-14,84,36,-62,37,81,-36,-85,-39,67,-63,64,-47,95,91,-40,65,67,92,-28,97,100,81]

largestAltitude(test1)