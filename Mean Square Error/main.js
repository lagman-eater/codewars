function solution(firstArray, secondArray) {
    let arr = []
    for (let i = 0; i < firstArray.length; i++) {
        arr.push(Math.pow(firstArray[i] - secondArray[i], 2))
    }
    return arr.reduce((a, b) => a + b) / firstArray.length
}

console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));

// Adding Big Numbers
// function add(num1, num2){
//     console.log(String(Number(num1) + Number(num2)));
// }

// console.log(add('63829983432984289347293874', '90938498237058927340892374089'));