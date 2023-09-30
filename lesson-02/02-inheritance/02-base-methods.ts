// базовый тип данных
class Shape {
  // private name: string;
  public name: string;  

  constructor(name) {
    this.name = name;
  }

  public getInfo(): string {
    return `This is ${this.name}.`;
  }
};

// наследуемый тип данных
class Rect extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    // запуск конструктора родительского класса
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  public getInfo(): string {
    const baseInfo: string = super.getInfo();
    return `${baseInfo} Height = ${this.height}, Width = ${this.width}`;
  }
};

const newRect: Shape = new Rect(100, 200);
console.log(newRect.getInfo());

// наследуемый тип данных
class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super("Circle");
    this.radius = radius;
  }

  public getInfo(): string {
    // вызов метода родительского класса
    const baseInfo: string = super.getInfo();
    return `${baseInfo} Radius = ${this.radius}`;
  }
};

// создание массива базового типа
const shapes: Shape[] = [];
// заполнение массива экземплярами наследуемого класса
shapes.push(new Rect(100, 200));
shapes.push(new Circle(10));
shapes.push(new Circle(43));
shapes.push(new Rect(10, 30));

// к массиву shapes можно добавить только объекты, содержащие идентичную с классом Shape структуру
// shapes.push({
//   name: "foo",
//   getInfo: () => {
//     return "bar";
//   },
// });

for (let i = 0; i < shapes.length; ++i) {
  const info: string = shapes[i].getInfo();
  console.log(info);
}
