// every - функция возвращает true, если все элементы удовлетворяют условию.
// some / функция возвращает true, если хотя бы один элемент удовлетворяет условию.
const data1: number[] = [1, 2, 3, 4, 5, 6, 100];
const result1: boolean = data1.every(value => value > 10);
console.log(result1);         // false

const data2: number[] = [11, 21, 31, 41, 1];
const result2: boolean = data2.every(value => value > 10);
console.log(result2);         // false

const data3: number[] = [1, 3, 5, 7, 9, 2];
const result3: boolean = data3.some(value => value % 2 == 0);
console.log(result3);         // true
