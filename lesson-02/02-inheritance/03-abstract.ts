// abstract - ключевое слово, позволяющее создавать абстрактные методы и абстрактные классы.
// Абстрактный класс - это класс, который может существовать только в качестве базового класса. Создать экземпляр абстрактного класса не получится.
// Абстрактный метод - это метод, не имеющий реализации в текущем классе, но обязательно должен быть реализован в производном классе.
// Абстрактные методы могут создаваться только в абстрактных классах.

// абстрактный класс 
abstract class Animal {
  constructor(public name: string) { }
  // абстрактный метод 
  abstract makeSound(): void;

  public move(): void {
    console.log(this.name + ' передвигается');
  }
};

class Cat extends Animal {
  constructor() {
    super('Кот');
  }

  // обязательна реализация абстрактного метода из базового класса. Попробуйте удалить этот метод из класса Cat
  makeSound(): void {
    console.log('Мяу-Мяу');
  }
};

class Cow extends Animal {
  constructor() {
    super('Корова');
  }

  makeSound(): void {
    console.log('My-y-y-y-y');
  }
};

const murzik: Animal = new Cat();
murzik.makeSound();
murzik.move();

const burenka: Animal = new Cow();
burenka.makeSound();
burenka.move();

// const animal: Animal = new Animal('animal');    // Cannot create an instance of an abstract class.
