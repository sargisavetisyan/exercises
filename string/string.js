// // Print all the duplicates and their counts in the input string
// // Input : aasdddf ksf d
// // Output : a, s, d, f

const str = 'aasdddf ksf d'

function print(str) {
    let str1 = ''
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j] && str[i] !== ' ') {
                if (!(str1.includes(str[i]))) {
                    str1 += str[i]
                }
            }
        }
    }
    return str1.split('')
}

console.log(print(str))