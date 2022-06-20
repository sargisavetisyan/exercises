// 1. Напишите функцию JavaScript для клонирования массива
/*
example 1

const array1 = [1, 2, 4, 0]
const array2 = [1, 2, [4, 0]]

let array_Clone = arr => arr.slice(0)

console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))

example 2

const array1 = [1, 2, 4, 0]
const array2 = [1, 2, [4, 0]]
let array_Clone = arr => arr.map((item) => item = item)
console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))
*/

// ===========================================================================================================


// 2.Напишите функцию JavaScript для получения первого элемента массива.
// Передача параметра «n» вернет первые «n» элементов массива.

// Ожидаемый результат :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
/*
function firstElement(arr, n) {
    if (arr === null) {
        return []
    } else if (n === undefined) {
        return arr[0]
    } else {
        if (n <= 0) {
            return arr[0]
        } else {
            return arr.slice(0, n)
        }
    }
}

console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([], 3));
console.log(firstElement([7, 9, 0, -2], 3));
console.log(firstElement([7, 9, 0, -2], 6));
console.log(firstElement([7, 9, 0, -2], -3))
*/

// ===========================================================================================================

// 3.Напишите функцию JavaScript для получения последнего элемента массива.
// Передача параметра «n» вернет последние «n» элементов массива.

// Ожидаемый результат :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

/*
function lastElement(arr, n) {
    if (arr === null) {
        return []
    }
    if (n === undefined) {
        return arr[arr.length - 1]
    } else {
        return n <= arr.length ? arr.splice(arr.length - n) : arr.splice(0)
    }
}


console.log(lastElement([7, 9, 0, -2]));
console.log(lastElement([7, 9, 0, -2], 3));
console.log(lastElement([7, 9, 0, -2], 6))
*/

// ===========================================================================================================

// 4.Напишите простую программу на JavaScript для объединения всех элементов следующего массива в строку.
// Пример массива : myColor = ["Красный", "Зеленый", "Белый", "Черный"];
// Ожидаемый результат :
// «Красный, зеленый, белый, черный»
// «Красный, зеленый, белый, черный»
// «Красный + зеленый + белый + черный»

/*
myColor = ["Красный", "Зеленый", "Белый", "Черный"];

function string(arr, simbol) {
    if (simbol === ', ') {
        return arr.join(', ')
    }
    if (simbol === ' + ') {
        return arr.join(' + ')
    }
}

console.log(string(myColor, ' + '))
*/

// ===========================================================================================================

// 5.Напишите программу на JavaScript, которая принимает число в качестве входных данных и вставляет дефисы (-) между каждыми двумя четными числами.
// Например, если вы принимаете 025468, вывод должен быть 0-254-6-8.

/*
let str = '025468'
let str1 = ''
function defis(str) {
    debugger;
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
            str1 = str1 + `${str[i]}${'-'}`
        } else {
            str1 = str1 + `${str[i]}`
        }
    }
    return str1
}

console.log(defis('025468'))
*/

// ===========================================================================================================
//6. Given a n x n matrix. The problem is to find all the sum of elements of
// the matrix.
// Input :
// 
// 
// 1 2 1
// 3 2 2
// 0 2 1
// 
// 
// Output : 14

/*
const matrice = [
    [1, 2, 1],
    [3, 2, 2],
    [0, 2, 1]
]
function sum(arr, n) {
    return arr.flat(n)
        .reduce(function (acc, val) {
            return acc + val
        })
}
console.log(sum(matrice, 1))
*/

// ===========================================================================================================

// .7  Напишите программу на JavaScript для сортировки элементов массива.
// Пример массива : var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// Пример вывода : -4,-3,1,2,3,5,6,7,8

/*
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1]

function sort(arr) {
    return arr.sort()
}

console.log(sort(arr1))
*/


// ===========================================================================================================

// 8. Напишите программу на JavaScript для поиска наиболее часто встречающегося элемента массива.
// Пример массива : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Пример вывода : a (5 раз)

// function duplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {                           ??????????????????????????????????????????????????
// ??????????????????????????
//         }
//     }
// }


//==========================================================================================================

// 9. Напишите программу на JavaScript, которая печатает элементы следующего массива.
// Примечание. Используйте вложенные циклы for.
// Пример массива: var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Пример вывода :
// «строка 0»
// «1»
// «2»
// «1»
// «24»
// «строка 1»


// var a = [1, 2, 1, 24, [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

// function print(arr) {

//     for (let i = 0; i < arr.length; i++) {

//         if (!Array.isArray(arr[i])) {
//             console.log(`строка ${i}`)
//             console.log(arr[i])
//         } else {
//             console.log(`строка ${i}`)
//             for (let j = 0; j < arr[i].length; j++) {
//                 if (!Array.isArray(arr[i][j])) {
//                     console.log(arr[i][j])
//                 }
//             }


//         }
//     }
// }
// print(a)


// ==========================================================================================================


// Given an array of numbers, Push all the zero’s of a given array to the end of the array.
// For example, if the given arrays is 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0,
// it should be changed to 1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0. The order of all other elements should be same.


/*
let array = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]
let newArr = []
let zero = []
function fun(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i])
        } else {
            zero.push(arr[i])
        }
    }
    return array = newArr.concat(zero)
}
console.log(fun(array))
*/

// ==========================================================================================================

// Given a n x n matrix. The problem is to find all the distinct elements common to all rows of the matrix.
//  The elements can be printed in any order.

/*
let arr = [
    [2, 1, 4, 3],
    [1, 2, 3, 2],
    [3, 6, 2, 3],
    [5, 2, 5, 3]
]
let a = []

function commonElement(arr) {

    arr[0].forEach(function (val) {
        let count = 0
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].includes(val)) {
                count++
            }
        }
        if (count === arr.length - 1) {
            a.push(val)
        }
    })
    return a.join(' ')
}

console.log(commonElement(arr))
*/









