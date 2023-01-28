// function arrayDiff(a, b) {
// for(let i = 0; i < b.length; i++){
//     for(let j = a.length - 1; j >= 0; j--){
//         if(b[i] === a[j]){
//             a.splice(j, 1)
//         }
//     }
// }
// return a

// return a.filter(e => !b.includes(e))

// b = new Set(b) // for Array.dif hero
// return a.filter(v => !b.has(v)) 
// }
// console.log(arrayDiff([1, 2, 2, 2, 3, 4], [1, 2]));

// function sum() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }
// console.log(sum(...[1,2,3]));
// function arrSum(arg){

// }
// let arr = [123, 12, 3]
// console.log(typeof Number(arr.join()));
// console.log(sum(Number([1, 231, 123].join())))

// function sum(){
//     let sum = 0 
//     sum = arguments.reduce((previousValue, currentValue) {
//         return previousValue + currentValue;
//     }, 0)
// }
// console.log(sum(1, 123, 12));

// const arr = [1, 2, 3]
// arr.push(4)
// console.log(arr);

let regexp = /^[0-9]*\.[0-9]{2}$/
console.log(regexp.test('10.50'))

// function secondBiggest(arr) {
//     let max = Math.max(...arr)
//     arr.splice(arr.indexOf(max), 1)
//     return Math.max(...arr)
// }
// console.log(secondBiggest([1,2,5,7,9]))