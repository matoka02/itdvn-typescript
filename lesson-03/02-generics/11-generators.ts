// function* - generator function
function* stringSequence() {
  yield 'Hello';
  yield ' ';
  yield 'world';
  yield '!';
}

const iterable1 = stringSequence(); // получение generator object, само тело функции не выполняется
let result = '';

// когда будет вызван метод next, начнет выполняться generator funciton до первого ключевого слова yield
// после этого функция приостановит свою работу до следующего вызова метода next
for (const item of iterable1) {
  result += item;
}
console.log(result);

class MyStringCollection {
  private values: string[] = ['Hello', ' ', 'world', '!'];

  *getValues() {
    for (let i = 0; i < this.values.length; i++) {
      // console.log('here');      
      yield this.values[i];
    }
  }
}

const iterable2 = new MyStringCollection().getValues();
result = '';

for (const item of iterable2) {
  result += item;
}
console.log(result);
