const testData1 = ["стационар", "соратница"];
const testData2 = ['покраснение', 'пенсионерка'];
const testData3 = ['лолкек', 'кеклок'];

function isAnagram(str1, str2) {
    return str1.split('').sort().join() === str2.split('').sort().join();
}

console.log(isAnagram(testData1[0], testData1[1])) //true
console.log(isAnagram(testData2[0], testData2[1])) //true
console.log(isAnagram(testData3[0], testData3[1])) //false