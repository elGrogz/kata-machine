export default function two_crystal_balls(breaks: boolean[]): number {
    // [ false, false, false, false, false, true, true, true, true, true, true]
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            // === true
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i] === true) {
            return i;
        }
    }

    return -1;
}
