// Эти параметры недвижимости у конструкторов, чтобы указать их модификаторы в памяти.
// Этот параметр автоматически станет полями класса с соответствующим уровнем доступа и значениями, которые будут установлены при вызове конструктора.
class Person {
  // public name: string;
  // private age: number;

  // constructor( name: string, age: number) { 
  //   this.name = name;
  //   this.age = age;
  // }

  // рефакторинг
  constructor( public name: string, private age: number) { }

  print() {
    console.log(this.name + ' ' + this.age);
  }
};

const person: Person = new Person('Jhon', 25);
person.print();

person.name = 'Ivan'; // поле public
// person.age = 111; // поле private
