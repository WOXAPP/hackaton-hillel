// ======================================================================
//Tasks # 1, 2, 3, - the most valuable. 4,5 - medium. 6 - easy.

// 1) Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward
// and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything into the same case (lower or upper case) in order to check for palindromes.

function palindrome(str) {
  return true;
}

palindrome('eye');

// ======================================================================

// 2) Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  return num;
}

convertToRoman(36);

// ======================================================================

// 3) One of the simplest and most widely known ciphers is a Caesar cipher,
//  also known as a shift cipher. In a shift cipher the meanings of the letters are
// shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted
// by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character
//  (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
  return str;
}

rot13('SERR PBQR PNZC');

// ======================================================================

// 4) You will be provided with an initial array (the first argument in the destroyer function),
//  followed by one or more arguments.
//  Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// ======================================================================

// 5) Make a function that looks through an array of objects (first argument) and returns an
// array of all objects that have matching name and value pairs (second argument). Each name and value pair
//  of the source object has to be present in the object from the collection if it is to be included in the
//   returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" },
//  { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
//  and the second argument is { last: "Capulet" }, then you must return the third object from
//  the array (the first argument), because it contains the name and its value, that was passed on
//   as the second argument.
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);

// ======================================================================

// 6) Write a function that splits an array (first argument) into groups the length of size
//  (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
