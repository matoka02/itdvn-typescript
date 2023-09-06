// Функция содержит message
function printValue(message: string, ...names: string[]): void {
  console.log(message);
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
};

printValue('sample 1');
printValue('sample 2', '1', '2');
printValue('sample 3', '1', '2', 'abc');