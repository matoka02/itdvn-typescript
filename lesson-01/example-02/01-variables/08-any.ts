// 8. Any
// Тип данных неизвестен на момент объявления переменной
let someValue: any = 'Hello world';
someValue = false;
someValue = 100;
console.log(someValue);         // 100

someValue.toFixed();

someValue = 'test';
someValue.toFixed();          // Uncaught TypeError: someValue.toFixed is not a function at 08-any.ts:11:11