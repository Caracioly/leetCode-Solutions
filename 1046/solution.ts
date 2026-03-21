function lastStoneWeight(stones: number[]): number {
    function destroy(): number {
        if (sorted.length === 0) return 0;
        if (sorted.length == 1) {
            return sorted[0]
        }

        sorted = sortAsc(stones)

        let [x, y] = sorted.splice(-2);

        if (x !== y) {
            sorted.push(y - x)
        }
        return destroy()
    }

    let sorted = [...stones];
    let result = destroy()
    return result;
}

function sortAsc(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
}
