// map - обходит все элементы массива и возвращает новый массив со значениями, возвращенными указанной функцией.

const array: number[] = [1, 2, 3, 4, 5];

const newArray: number[] = array.map((value, index, arr) => {
  return value * value;
});

console.log(array);
console.log(newArray);
