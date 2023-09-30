class MyClass {
  value: string;

  //  определение конструктора для инициализации класса
  constructor() {
    console.log("Работает конструктор класса MyClass1");
    this.value = "Hello world";
  }
};

console.log("Создание экземпляра класса MyClass1");
// вызов конструктора, определенного на строке 5
const temp = new MyClass();
console.log(temp.value);


// Создание экземпляра класса MyClass1
// Работает конструктор класса MyClass1
// Hello world