// Метод reduce(callback, initialValue) применяет функцию к аккумулятору и каждому значению массива (слева направо), сводя его к одному значению.

// callback
// Функция, выполняемая для каждого элемента массива, принимает четыре аргумента:
// ее аргументы
//    previousValue
//        Значение, возвращенное предварительным выполнением функции callback, или значение initialValue, если оно присвоено (см. ниже).
//    currentValue
//        Текущий обрабатываемый элемент массива.
//    currentIndex
//        Индекс текущего обрабатываемого элемента массива.
//    array
//        массив, для которого была вызвана функция reduce.
//
//    initialValue
//        Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.

const values: number[] = [10, 2, 3, 4, 5, 6];

const total: number = values.reduce((prev, current) => {
  console.log('prev ' + prev + ' current ' + current);
  return prev + current;
}, 0);

console.log(total);

// Список букв, которые могут повторяться
const chars = ['a', 'b', 'c', 'a', 'c', 'a'];

// рефакторинг с использованием reduce
const charsRepeat = chars.reduce((prev, current) => {
  if (prev[current]) {
    prev[current] += 1;
  } else {
    prev[current] = 1;
  }

  return prev;
}, {});

// console.log(charsRepeat);

// рефакторинг с использованием reduce
const usersList = [
  { name: 'Андрій', role: 'client' },
  { name: 'Степан', role: 'admin' },
  { name: 'Іван', role: 'client' },
  { name: 'Микола', role: 'client' },
];

const res1 = usersList
  .filter(user => user.role === 'client')
  .map(user => user.name);
console.log(res1);

const res2 = usersList.reduce((prev, user) => {
  if (user.role === 'client') {
    prev.push(user.name);
  }
  return prev;
}, []);
console.log(res2);
