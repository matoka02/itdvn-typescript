enum Position {
  Junior = 'junior',
  Middle = 'middle',
  Senior = 'senior',
};

class Developer {
  // модификатор доступа public - указывает, что поле видимо за пределами данного класса
  name: string;
  // модификатор доступа private - указывает, что поле закрыто и не доступно за пределами данного класса
  private position: Position;
  private salary: number;

  constructor(name: string, position: Position) {
    this.name = name;
    this.position = position;
    this.salary = this.countSalary();
  };

  private countSalary(): number {
    switch (this.position) {
      case Position.Junior:
        return 700;
      case Position.Middle:
        return 2000;
      case Position.Senior:
        return 5000;
      default:
        throw new Error('Недоступная позиция');
    }
  };

  public setPosition(position: Position): void {
    // тут может быть дополнительная проверка, прежде чем будет обновлена позиция
    this.position = position;
    this.salary = this.countSalary();
  };

  public print(): void {
    console.log(`employee - ${this.name}, \nposition - ${this.position}, \nsalary - ${this.salary}`);
  };
}

const dev: Developer = new Developer('Ivan', Position.Junior);
dev.name = 'John';
// dev.salary = 100000000000; // Property 'salary' is private and only accessible within class 'Developer'.
// dev.position = Position.Senior; // Property 'position' is private and only accessible within class 'Developer'.

dev.print();
dev.setPosition(Position.Middle);
dev.print();
