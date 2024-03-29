class MyGenericClass<T> {
  public value: T;

  public method1(value1: T): void {
    console.log(value1);
  }

  public method2(): T {
    return this.value;
  }
}

// Экземпляр обобщенного типа, закрытого типом number
const myGenericNumber = new MyGenericClass<number>();
myGenericNumber.method1(10);
myGenericNumber.value = 100;
console.log(myGenericNumber.method2());

// Экземпляр обобщенного типа, закрытого типом string
const myGenericString = new MyGenericClass<string>();
myGenericString.method1('hello');
myGenericString.value = 'world';
console.log(myGenericString.method2());
