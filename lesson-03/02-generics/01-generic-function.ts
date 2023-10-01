// Generic или обобщенный тип - специальный тип данных, позволяющий создавать компоненты не привязываясь к конкретному типу данных, а указывать этот тип данных при создании компонента.
// На строке 8 создана функция-generic - эта функция принимает один параметр типа T и возвращает значение типа Т.
// T - type variable, специальный тип переменных, используемый в обобщенных типах для того, чтобы сохранять тип вместо значения.
// Type variable будет сохранять тип данных, который предоставит пользователь функции во время вызова.

function myFunc<T>(value: T): T {
  return value;
}

// Функция myFunc принимает и возвращает строку. Тип данных указан явно в угловых скобках
const value1 = myFunc<string>('test');

// Функция принимает и возвращает число. В этом случае используется type argument inference. Компилятор самостоятельно определят, какой тип нужно использовать
const value2 = myFunc<number>(10);

// Generic имеет значительное преимущество над any в плане типизации.
function myFunc2(value: any): any {
  return value;
}

const value3 = myFunc2('test');
const value4 = myFunc2(10);
