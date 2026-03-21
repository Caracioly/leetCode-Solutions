function reverseVowels(s: string): string {
    const vowels = new Set('aAeEiIoOuU');
    const arr = Array.from(s);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (!vowels.has(arr[left])) {
            left++;
            continue;
        }

        if (!vowels.has(arr[right])) {
            right--;
            continue;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr.join('');
}