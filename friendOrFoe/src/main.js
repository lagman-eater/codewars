function friend(friends) {
    return friends.filter(value => value.length === 4);
}
let arr = ["Ryan", "Kieran", "Mark"]
console.log(friend(arr));