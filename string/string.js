// // Print all the duplicates and their counts in the input string
// // Input : aasdddf ksf d
// // Output : a, s, d, f

// const str = 'aasdddf ksf d'

// function print(str) {
//     let str1 = ''
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] === str[j] && str[i] !== ' ') {
//                 if (!(str1.includes(str[i]))) {
//                     str1 += str[i]
//                 }
//             }
//         }
//     }
//     return str1.split('')
// }

// console.log(print(str))

// ===============================================================================

// 9. Напишите программу на JavaScript, которая принимает на вход строку и меняет регистр каждого символа.
//  Например, если вы вводите «Быстрый коричневый лис», вывод должен быть «БЫСТРЫЙ КОРИЧНЕВЫЙ ЛИС»

/*
let string = 'Fast brown fox'
let uper = 'ABCDEFJHABCDEFGHIJKLMNOPQRSTUVWXYZ'

let str1 = ''

function toUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
        if (uper.includes(str[i])) {
            str1 += str[i]
        } else {
            str1 += str[i].toUpperCase()
        }
    }
    return str1
}

console.log(toUpperCase(string))
*/

// ===============================================================================

// Pangram is a sentence containing every letter in the English alphabet.
// Given a string, find all characters that are missing from the string,
// i.e., the characters that can make string a Pangram.

/*
let input = 'The quick brown fox jumps'
let abc = 'abcdefghijklmnopqrstuvwxyz'
let output = ''

function pangram(str) {
    for (let i = 0; i < abc.length; i++) {
        if (!input.toLowerCase().includes(abc[i])) {
            output += `${abc[i]}`
        }
    }
    return output
}

console.log(pangram(input))
*/

// ===============================================================================