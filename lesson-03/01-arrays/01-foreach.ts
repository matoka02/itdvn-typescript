const myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1.1 forEach - обход всех элементов массива и запуск определенной функции для каждого элемента.
const myCallback = value => {
  const message = value % 2 === 0 ? 'Четное число' : 'Нечетное число';
  console.log(value + ' - ' + message);
};
myArray.forEach(myCallback);

// 1.2 увеличение каждого элемента массива на 1.
myArray.forEach((value: number, index: number, array: number[]) => {
  array[index] = value + 1;
});
console.log(myArray);

// 2. список повторяющихся букв.
const letters = ['a', 'b', 'c', 'a', 'c', 'a'];
// в эту переменную записываем уникальные значения букв и кол-во повторений
const repeats = {};

letters.forEach(letter => {
  // если буква уже существует, добавляем 1 и кол-во повторений
  // если буква встречается впервые, записываем значение 1
  if (repeats[letter]) {
    repeats[letter] += 1;
  } else {
    repeats[letter] = 1;
  }
});

console.log(repeats);
