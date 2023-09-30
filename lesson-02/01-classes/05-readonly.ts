// при помощи ключевого слова readonly можно создать поле только для чтения. 
// такое поле может быть инициировано в момент его создания или в конструкторре
class Dog {
  public readonly name: string;
  public readonly numberOfLegs: number = 4;

  constructor(name: string) {
    this.name = name;
  }
};

const dog: Dog = new Dog('Sharik');
console.log(dog.name);
console.log(dog.numberOfLegs);
// dog.numberOfLegs = 5; // Cannot assign to 'numberOfLegs' because it is a read-only property.
// dog.name = "";
