const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/;
function checkPassword(str){
    return REGEXP.test(str)
}
console.log(checkPassword('DSJKHD23'))