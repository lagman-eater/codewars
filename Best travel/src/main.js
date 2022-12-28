function chooseBestSum(t, k, ls) {
    let arr = [];

    function rec(sum, ar, n) {
        if (n == 0) {
            arr.push(sum);
        }
        else {
            for (let i = 0; i < ar.length; i++) {
                rec(sum + ar[i], ar.slice(i + 1), n - 1);
            }
        }
    }

    rec(0, ls, k);
    console.log(arr);

    var sol = arr.sort((a, b) => b - a).find(a => a <= t);
    return typeof sol ? sol : null;

    // let sumArr = []
    // for (let i = 0; i < ls.length; i++) {
    //     for (let j = i + 1; j < ls.length; j++) {
    //         for (let k = j + 1; k < ls.length; k++) {
    //             sumArr.push(ls[i] + ls[j] + ls[k])
    //             console.log(ls[i], ls[j], ls[k], `sum is: ${ls[i] + ls[j] + ls[k]}`)
    //         }
    //     }
    // }
    // console.log(sumArr);
    // return Math.max(...sumArr)
}
let arr = [50, 55, 57, 58, 60]
console.log(chooseBestSum(174, 3, arr));