//Qno2
// function greetUser(firstName,lastName) {
//     const fullName=firstName +""+ lastName
//     const greeting=fullName
//     return greeting
// }
// let firstName=prompt("your first name?")
// let lastName=prompt("your last name?")
// alert(greetUser(firstName,lastName))
//Qno3
// function myNum() {
//     const num1=+prompt("your 1st num")
//     const num2=+prompt("your 2nd num")
//     return num1+num2
// }
// console.log(myNum())
//Qno4
// function compute(num1, num2, operator) {
//     let result;


//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             // Handle division by zero
//             if (num2 === 0) {
//                 alert("Division by zero is not allowed.");
//                 return;
//             }
//             result = num1 / num2;
//             break;
//         default:
//             alert("Invalid operator. Please use +, -, *, or /.");
//             return;
//     }

//     // Return the result
//     return result;
// }

// // Example usage:
// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const operator = prompt("Enter the operator (+, -, *, /):");

// // Compute the result and show it
// const result = compute(num1, num2, operator);
// if (result !== undefined) {
//     alert("The result is: " + result);
// }

//Qno5
// function squareNumber(num) {
//     return num * num;
// }

// // Example usage:
// const number = parseFloat(prompt("Enter a number to square:"));
// const squared = squareNumber(number);
// alert("The square of " + number + " is: " + squared);
//Qno7
// function counting(start,end) {
//     if (start>end) {
//         alert("start num should be less than and equal to end num")
//         return
//     }

// let count=""
// for (let i=start; i<=end ; i++) {
//     count+=i+"  "

// }
// alert("counting from"+start+"to"+end+":"+count.trim())
// }

// const startNumber = +prompt("Enter the start number:");
// const endNumber = +prompt("Enter the end number:");

// // Display the counting sequence
//  counting(startNumber, endNumber);
//Qno10

// function isPalindrome(str) {
//     // Convert the string to lowercase to handle case insensitivity
//     const lowerStr = str.toLowerCase();

//     // Reverse the string
//     const reversedStr = lowerStr.split('').reverse().join('');

//     // Check if the original string is the same as the reversed string
//     return lowerStr === reversedStr;
// }

// // Example usage:
// const inputString = prompt("Enter a string to check if it's a palindrome:");
// const result = isPalindrome(inputString);

// // Display the result
// alert(inputString + (result ? " is a palindrome." : " is not a palindrome."));

//Qno11


// function convertToUpperCase() {
//     // Prompt the user to enter a string
//     const inputStr = prompt("Enter your string");

//     // Check if input is not null and not empty
//     if (inputStr !== null && inputStr.trim() !== "") {
//         // Convert the input string to uppercase
//         const upperStr = inputStr.toUpperCase();

//         // Return the uppercase string
//         return upperStr;
//     } else {
//         return "No input provided or input is empty.";
//     }
// }

// // // Call the function and write the result to the document
// // document.write(convertToUpperCase());
// //Qno12
// function findLongestWord(str) {
//     // Split the string into an array of words
//     const words = str.split(' ');
    
//     // Initialize a variable to keep track of the longest word
//     let longestWord = '';
    
//     // Iterate through the array of words
//     for (const word of words) {
//         // Check if the current word is longer than the longest word found so far
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
    
//     // Return the longest word
//     return longestWord;
// }

// // Example usage:
// const inputString = prompt("Enter a string to find the longest word:");
// const longestWord = findLongestWord(inputString);

// // Display the result
// alert("The longest word is: " + longestWord);

//Qno13
function countLetterOccurrences(str, letter) {
    
    let count = 0;
    

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    
    
    return count;
}

const inputString = prompt("Enter a string:");
const inputLetter = prompt("Enter the letter to count:");
const occurrences = countLetterOccurrences(inputString, inputLetter);


alert("The letter '" + inputLetter + "' appears " + occurrences + " times.");





