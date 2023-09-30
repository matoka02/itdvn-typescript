class Base {
  private value1: string;
  public value2: string;
  protected value3: string;

  constructor() {
    this.value1 = 'private value 1';
    this.value2 = 'public value 2';
    this.value3 = 'protected value 3';
  }

  private method1(): void {
    console.log('private method 1 call.');
  }

  public method2(): void {
    console.log('public method 2 call.');
  }

  protected method3(): void {
    console.log('protected method 3 call.');
  }
};

// класс Derived наследует класс Base, класс Derived расширяет класс Base
class Derived extends Base {
  constructor() {
    // вызов конструктора базового класса. Обязательная операция при наследовании
    super();

    // console.log('private property = ' + this.value1);
    console.log('public property = ' + this.value2);
    console.log('protected property = ' + this.value3);

    // this.method1(); // метод private, скрыт
    this.method2(); // public - открыт для всех
    this.method3(); // protected - доступен, т.к. является потомком
  }
}

const derived: Derived = new Derived();

// доступен только method2 и value2, т.к. они public. Другие элементы недоступны, т.к. этот код находится вне границ класса.
// console.log(derived.value1);
// console.log(derived.value3);
console.log(derived.value2);

// derived.method1();
// derived.method3();
derived.method2();
