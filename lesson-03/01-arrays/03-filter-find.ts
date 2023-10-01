// filter - возвращает новый массив, состоящий из элементов, отобранных функцией.
const numbersArray: number[] = [1, 2, 3, 4, 5, 6];

// получить все парные элементы
const evenNumbers = numbersArray.filter(value => value % 2 === 0); 

console.log(numbersArray);
console.log(evenNumbers);

const usersArray = [
  { name: 'Андрій', role: 'client' },
  { name: 'Степан', role: 'admin' },
  { name: 'Іван', role: 'client' },
  { name: 'Микола', role: 'client' },
];

// Код отработает, но это плохой вариант использования метода filter, если нам нужно найти только один элемент из списка
const user1 = usersArray.filter((user, index) => {
  return user.role === 'admin';
});

// Метод find подходит в тех случаях, когда нужно найти только один элемент из списка
const user2 = usersArray.find((user, index) => {
  console.log(index);
  return user.role === 'admin';
});

console.log(user1);       // [0:{name: 'Степан', role: 'admin'}length:1[[Prototype]]:Array(0)]
console.log(user2);       // {name: 'Степан', role: 'admin'}
