function luckCheck(ticket) {
    if (/^\d+$/.test(ticket)) {
        const list = ticket.split('')
        const middleIndex = Math.ceil(list.length / 2);
        let firstHalf, secondHalf
        if (ticket.length % 2 === 0) {
            firstHalf = list.splice(0, middleIndex)
            secondHalf = list.splice(-middleIndex);
        } else {
            firstHalf = list.splice(0, middleIndex - 1);
            secondHalf = list.splice(-middleIndex + 1);
        }
        return firstHalf.map(Number).reduce((a, b) => a + b) === secondHalf.map(Number).reduce((a, b) => a + b)
    } else {
        throw new Error('Invalid input')
    }
}
console.log(luckCheck('6F43E8'));