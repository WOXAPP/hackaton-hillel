var newStr = `eye`;
function foo(srt) {
var subString1 = srt.substr(0, (srt.length + 1)/2);
var subString2 = (srt.substr((srt.length)/2)).split('').reverse().join(``);
    return subString1 == subString2
}


console.log(foo(newStr))