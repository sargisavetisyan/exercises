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


// var arr1 = [2, 3, 'a', 'a', 'a', 2, 2, 2, , 3, 3, 'a', 3, 'a', 2, 3, 3, 3, 3, 3, 10, 10]

// function duplicate(arr) {
//     let delta
//     let count = 0
//     let currentCount = 1
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 currentCount++
//                 if (count < currentCount) {
//                     count = currentCount
//                     delta = arr[i]
//                 }
//             }
//         }
//         currentCount = 1
//     }
//     return `${delta} (${count} раз)`
// }

// console.log(duplicate(arr1))

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



// ==========================================================================================================




// function grouping(arr1, arr2) {
//     let newArr = []
//     let newArr1 = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (!arr2.includes(arr1[i])) {
//             newArr.push(arr1[i])
//         }
//     }
//     for (let j = 0; j < arr2.length; j++) {
//         if (!arr1.includes(arr2[j])) {
//             newArr1.push(arr2[j])
//         }
//     }

//     return newArr.concat(newArr1)
// }

// console.log(grouping([5, 6], [5, 6, 7]))



// ==========================================================================================================


// 14. Напишите программу на JavaScript для удаления повторяющихся элементов из массива (игнорируйте регистр



// function deleyt(arr) {


//     for (let i = 0; i < arr.length; i++) {

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 if (arr[j] === arr[arr.length - 1]) {
//                     arr.pop()                                                            ?????????????????????????????????????
//                 }
//                 arr[j] = arr[arr.length - 1]
//                 arr.pop()
//             }
//         }

//     }

//     return arr
// }
// console.log(deleyt([2, 3, 6, 1, 5,]))


// ==========================================================================================================



// 17. Напишите программу на JavaScript для перемешивания массива

// function mixing(arr) {
//     let temp = arr.length
//     let index
//     let ctr
//     while (temp > 0) {
//         index = Math.floor(Math.random() * temp)
//         temp--
//         ctr = arr[temp]
//         arr[temp] = arr[index]
//         arr[index] = ctr
//     }
//     return arr
// }
// console.log(mixing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// ==========================================================================================================


// 18. Напишите программу на JavaScript для выполнения бинарного поиска. Перейти к редактору
// Примечание. Алгоритм бинарного поиска или поиска по полуинтервалу находит положение заданного входного значения в массиве,
//  отсортированном по значению ключа.
// Пример массива:


// var items = [1, 2, 3, 4, 5, 7, 8, 9];

// function binary_Search(arr, item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             return i
//         }
//     }
// }
// console.log(binary_Search(items, 1));
// console.log(binary_Search(items, 5))


// ==========================================================================================================

// 19. Есть два массива с отдельными значениями. Напишите программу на JavaScript для вычисления
// суммы каждого отдельного значения индекса из заданных массивов. Перейти в редактор
// Пример массива:

// Ожидаемый результат:
// [4, 5, 8, 10, 12, 13]

// array1 = [1, 0, 2, 3, 4];
// массив2 = [3, 5, 6, 7, 8, 13];

// function sumItems(arr1, arr2) {
//     let newArray = []
//     if (arr1.length >= arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr2[i] !== undefined) {
//                 newArray.push(arr1[i] + arr2[i])
//             } else {
//                 newArray.push(arr1[i])
//             }
//         }
//     } else {
//         for (let i = 0; i < arr2.length; i++) {
//             if (arr1[i] !== undefined) {
//                 newArray.push(arr1[i] + arr2[i])
//             } else {
//                 newArray.push(arr2[i])
//             }
//         }
//     }
//     return newArray
// }

// console.log(sumItems(array1, массив2))

// ==========================================================================================================

// Напишите программу на JavaScript для поиска повторяющихся значений в массиве JavaScript.

// function search(arr) {
//     let duplicate = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 if (!duplicate.includes(arr[i])) {
//                     duplicate.push(arr[i])
//                 }
//             }
//         }
//     }
//     return duplicate
// }

// console.log(search([1, 2, 3, 5, 3, 1, 6, 8, 5, 6, 9, 8, 12, 3, 4]))


// ==========================================================================================================


// 21. Напишите программу на JavaScript для выравнивания вложенного массива (любой глубины).
// Если вы пройдете мелко, массив будет сглажен только на один уровень. Перейдите в редактор
// Sample Data:
// console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));
// [1, 2, 3, [[4]], 5, 6]

// let array = [1, [2], [3, [[4, [[[[5, 6, [5, [5, 2]]]]]]]]], [5, 6]]
// let newArr = []

// function flatten(arr) {


//     let index
//     for (let i = 0; i < arr.length; i++) {


//         if (!Array.isArray(arr[i])) {

//             newArr.push(arr[i])
//         } else {

//             index = i
//             flatten(arr[index])
//         }
//     }

// }

// flatten(array);
// console.log(newArr)

// function sum(arr) {
//     return arr.filter(function (val) {
//         if (val % 2 !== 0) {
//             return val
//         }
//     })
//         .reduce(function (acc, val) {
//             return sum = acc + val
//         })
// }
// console.log(sum([7, 3, 9, 2, 8, 6, 5, 1, 7, 3]))


// ==========================================================================================================

// 22. Напишите программу на JavaScript для вычисления объединения двух массивов. Перейдите в редактор
// Sample Data:

// [1, 2, 3, 10, 100]


// function union(arr1, arr2) {

//     let arr = []
//
//     if (arr1.length - arr2.length >= 0) {
//         let newArr = arr.concat(arr2)
//         for (let i = 0; i < arr1.length; i++) {
//             if (!newArr.includes(arr1[i])) {
//                 newArr.push(arr1[i])
//             }

//         }
//     } else {
//         let newArr = arr.concat(arr1)
//         for (let i = 0; i < arr2.length; i++) {
//             if (!newArr.includes(arr2[i])) {
//                 newArr.unshift(arr2[i])
//             }

//         }
//         return newArr
//     }
// }


// console.log(union([1, 2, 3], [100, 2, 1, 10]));


// ==========================================================================================================

// 23. Напишите функцию JavaScript, чтобы найти разницу между двумя массивами. Перейдите в редактор
// Test Data :

// ["3", "10", "100"]


// function difference(arr1, arr2) {
//     let arr = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (!arr2.includes(arr1[i])) {
//             arr.push("" + arr1[i])
//         }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         if (!arr1.includes(arr2[i])) {
//             arr.push("" + arr2[i])
//         }
//     }
//     return arr
// }



// console.log(difference([1, 2, 3], [100, 2, 1, 10]));


// ==========================================================================================================


// 24. Напишите функцию JavaScript для удаления. 'null', '0', '""', 'false', 'undefined' и 'NaN' значения из массива.

// Ожидаемый результат: [15, -22, 47]



// let array = [NaN, 0, 15, false, -22, '', undefined, 47, null]

// function trueLabel(arr) {
//     debugger;
//     for (let i = 0; i < arr.length; i++) {
//         if (!Boolean(arr[i])) {
//             for (let j = i + 1; j < arr.length; j++) {
//                 if (Boolean(arr[j])) {
//                     arr[i] = arr[j]
//                     arr[j] = arr[arr.length - 1]
//                     arr.pop(arr[arr.length - 1])
//                 } else {
//                     arr.splice(j, j + 1)
//                 }
//             }             ????????????????????????????????????????????????????????
//         }

//     }
//     return arr
// }
// console.log(trueLabel(array))


// ==========================================================================================================


// 26. Напишите программу на JavaScript для поиска пары элементов (индексов двух чисел) из заданного массива,
//  сумма которых равна определенному целевому числу. Перейти в редактор

// Ввод: числа= [10,20,10,40,50,60,70], цель=50
// Вывод: 2, 3

// function index(arr, num) {
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] + arr[i + 1] === num) {
//             return `${i},${i + 1}`
//         }
//     }
// }


// console.log(index([10, 20, 10, 40, 50, 60, 70], 50))


// ==========================================================================================================


// 27. Напишите функцию JavaScript для извлечения значения заданного свойства из всех элементов массива.Перейти в редактор
// Пример массива: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Ожидаемый результат: [15, -22, 47]

// function trueLabel(arr) {
//     let newArr = []
//     for (let i in arr) {
//         if (Boolean(arr[i])) {
//             newArr.push(arr[i])
//         } ?????????????????????????????????????????????????????????
//     }
//     return newArr
// }

// console.log(trueLabel([NaN, 0, 15, false, -22, '', undefined, 47, null]))

// ==========================================================================================================

// 30. Напишите функцию JavaScript для объединения двух массивов и удаления всех повторяющихся элементов.

// Тестовые данные:
// var array1 = [1, 2, 3];
// вар массив2 = [2, 30, 1];
// console.log(merge_array(массив1,массив2));
// [3, 2, 30, 1]

// function associations(arr1, arr2) {
//     let newArr = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (!newArr.includes(arr1[i])) {
//             newArr.push(arr1[i])
//         }
//     }
//     for (let j = 0; j < arr2.length; j++) {
//         if (!newArr.includes(arr2[j])) {
//             newArr.push(arr2[j])
//         }
//     }
//     return newArr
// }

// console.log(associations([1, 50, 6, 8, 2, 3], [2, 30, 2, 50, 4, 1]))

// ==========================================================================================================


// 31. Напишите функцию JavaScript для удаления определенного элемента из массива.

// Тестовые данные:
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]

// function remove_array_element(arr, num) {
//     let index = arr.indexOf(num)
//     if (index >= 0) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === arr[index]) {
//                 arr.splice(i, 1)
//                 remove_array_element(arr, num)
//             }
//         }
//         return arr
//     } else {
//         return arr
//     }
// }
// console.log(remove_array_element([2, 9, 5, 5, 5, 6], 5))


// ==========================================================================================================


// 32. Напишите функцию JavaScript для поиска массива, содержащего определенный элемент.

// Тестовые данные:
// обр = [2, 5, 9, 6];
// console.log (содержит (обозначение, 5));
// [Верно]

// function contains(arr, num) {
//     if (arr.includes(num)) {
//         return 'Верно'
//     }
// }
// console.log(contains([2, 5, 9, 6], 5))

// ==========================================================================================================

// 34. Напишите функцию JavaScript для получения n-го по величине элемента из несортированного массива.

// Тестовые данные:
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

// function nthlargest(arr, index) {
//     return arr.sort((a, b) => a - b)[index]
// }

// console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4))

// / ==========================================================================================================

// 35. Напишите функцию JavaScript для получения случайного элемента из массива.

// function random(arr) {
//     if (Math.floor(Math.random() * arr.length) < arr.length) {
//         return arr[Math.floor(Math.random() * arr.length)]
//     }
// }

// console.log(random([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0, 23, 6, 46, 4, 50]))


// ==========================================================================================================


// 36. Напишите функцию JavaScript для создания указанного количества элементов с
// предварительно заполненным массивом числовых значений.

// Тестовые данные:
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]


// function array_filled(num, item) {
//     let arr = []
//     for (let i = 0; i < num; i++) {
//         arr.push(item)
//     }
//     return arr
// }
// alert(array_filled(6, 0))
// console.log(array_filled(4, 11))

// ==========================================================================================================

// 38. Напишите функцию JavaScript для перемещения элемента массива из одной позиции в другую.
// Тестовые данные:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]

// function move(arr, indexFrom, indexTo) {
//     let positive1 = Math.abs(indexFrom)
//     let positive2 = Math.abs(indexTo)
//     if (positive1 < arr.length && positive1 >= 0 && positive2 < arr.length && positive2 >= 0) {
//         let newArr = arr.slice(indexFrom, (indexTo - indexFrom + 1))
//         newArr.push(newArr[0])
//         newArr.shift()
//         arr.splice(0, newArr.length, ...newArr)
//     }
//     return arr
//     //    ????????

// }

// console.log(move([10, 20, 30, 40, 50], 0, 2))
// console.log(move([10, 20, 30, 40, 50], -1, -2))


// ==========================================================================================================

// 39. Напишите функцию JavaScript для фильтрации значений false, null, 0 и пустых значений из массива.

// Тестовые данные :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

// let array = [58, '', 'abcd', true, null, false, 0]
// function filter_array_values(arr) {
//     debugger;
//     for (let i = 0; i < arr.length; i++) {
//         if (!Boolean(arr[i])) {
//             arr.splice(i, 1)
//             i--
//         }
//     }
//     return arr
// }
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]))

// ==========================================================================================================

// 40. Напишите функцию JavaScript для создания массива заданной длины, заполненного целыми числами,
// увеличивающимися на единицу от начальной позиции.
// Тестовые данные :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]


// function array_range(firstElement, length) {
//     let arr = []
//     for (let i = 0; i < length; i++) {
//         arr.push(firstElement)
//         firstElement++
//     }
//     return arr
// }

// console.log(array_range(1, 4))
// console.log(array_range(-6, 4))


// ==========================================================================================================


// 41. Напишите функцию JavaScript для создания массива между двумя целыми числами длиной в 1 шаг.

// Тестовые данные :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// function rangeBetwee(firstElement, lastElement) {
//     let arr = []
//     let delta = firstElement
//     for (let i = 0; i <= lastElement - firstElement; i++) {
//         arr.push(delta)
//         delta++
//     }
//     return arr
// }
// console.log(rangeBetwee(4, 7))
// console.log(rangeBetwee(-4, 7))

// ==========================================================================================================


// 42. Напишите функцию JavaScript для поиска уникальных элементов из двух массивов.

// Данные теста :
// console.log(разница([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [ [4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10])) ;
// ["1", "2", "3", "10", "100"]

// function difference(arr1, arr2) {
//     let newArr = []
//     let newArr1 = []
//     newArr = arr1.concat(arr2)
//     for (let i = 0; i < newArr.length; i++) {
//         function isArray(newArr) {
//             for (let i = 0; i < newArr.length; i++) {
//                 if (Array.isArray(newArr[i])) {
//                     isArray(newArr[i])
//                 } else {
//                     if (!newArr1.includes(newArr[i])) {
//                         newArr1.push(newArr[i])
//                     }
//                 }
//             }
//         }
//         isArray(newArr)
//     }
//     return newArr1
// }

// console.log(difference([1, 2, 3], [100, 2, 1, 10]))
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]))
// console.log(difference([1, 2, 3], [100, 2, [[[[[[[[[5, [6, [[[[[6, 8, [[[[25]]]]]]]]]]]]]]]]]]], 1, 10]))

// ==========================================================================================================


// 43. Напишите функцию JavaScript для создания массива массивов, разгруппировав элементы в массиве, созданном zip.

// Тестовые данные :
// unzip([['a', 1, true], ['b', 2, false]])
// unzip([['a', 1, true], ['b', 2]])
// Ожидается Вывод:
// [["a","b"],[1,2],[true,false]]
// [["a","b"],[1,2],[true]]


// newArr = []
// function unzip(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             unzip(arr[i])
//         }else{
//             newArr.push(arr[i])
//         }
//     }
// }

// console.log(unzip([['a', 1, true], ['b', 2, false]]))