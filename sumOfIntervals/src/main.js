function sumIntervals(intervals) {
    let sum = 0
    for (let i = intervals.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (
                (intervals[i][0] >= intervals[j][0] && intervals[i][0] <= intervals[j][1])
                || (intervals[i][1] >= intervals[j][0] && intervals[i][1] <= intervals[j][1])
                || (intervals[i][0] < intervals[j][0] && intervals[i][1] > intervals[j][1])
            ) {
                intervals[j][0] = Math.min(intervals[i][0], intervals[j][0])
                intervals[j][1] = Math.max(intervals[i][1], intervals[j][1])
                intervals.splice(i, 1)
            }
        }
    }
    for (let k = 0; k < intervals.length; k++) {
        sum += intervals[k][1] - intervals[k][0]
    }
    return sum
}
let arrOver = [
    [0, 20],
    [-100000000, 10],
    [30, 40]
]
let arrOverFal = [
    [1, 6],
    [6, 10],
    [10, 15],
    [27, 29]
]
let testArr = [
    [1,4],[7, 10],[3, 5]
]
console.log(sumIntervals(testArr));
