function writeLog<T>(value: T): T {
  // свойство length отсутствует на типе Т, т.к. значением для типа Т может быть любой тип данных, компилятор проверяет, чтобы обращения к такому типу не привели к исключениям.
   // Например, у типа string свойство length существует, а в типе number его нет
    // console.log(value.length); 
  return value;
};

// функция принимает массив типа T
function writeLogArray1<T>(value: T[]): T[] {
  // массивы имеют свойство length
  console.log(value.length);
  return value;
};

function writeLogArray2<T>(value: Array<T>): Array<T> {
  // массивы имеют свойство length
  console.log(value.length); 
  return value;
};
