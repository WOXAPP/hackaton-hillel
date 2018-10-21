function convertToRoman(num) {
  
  let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let keyRoman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    for (var i = 0; i < decimals.length; i++) {
        if(num < 1)
            return "";       
        if(num >= decimals[i]) {
            return keyRoman[i] + convertToRoman(num - decimals[i]);        
        }
    }
}

console.log(convertToRoman(36));