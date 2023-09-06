// 7. Enums
// Перечисление, тип данных, который позволяет набору целых чисел задать имена

// неявное присвоение (как индексация в массиве)
enum Color {
  Red,
  Green,
  Blue,
};
const c1: Color = Color.Green;
console.log(c1);        // 1

// явное присвоение
enum Status {
  Success = 1,
  Error = 5,
  Rejected = 10,
};
const c2: Status = Status.Rejected;
console.log(c2);        // 10

enum Shape {
  Circle = 2,
  Triangle,
  Square
};
const c3: Shape = Shape.Square;
console.log(c3);        // 4

const c4: string = Status[1];
console.log(c4);        // Success

enum Shape2 {
  Circle = 'circle',
  Triangle = 'triangle',
  Square = 'square',
};
// const c5: Shape2 = Shape2[2];
// console.log(c5);        // undefined
const c5: Shape2 = Shape2.Square;
console.log(c5);        // square


function drawImage1(fruit: number) {
  const domElement: HTMLImageElement = document.createElement('img');

  switch (fruit) {
    case 0:
      domElement.src = '../images/apple.jpg'
      break;
    case 1:
      domElement.src = '../images/orange.jpg.jpg'
      break;
    case 2:
      domElement.src = '../images/tomato.jpeg.jpg'
      break;
  }

  document.body.appendChild(domElement);
};
// drawImage1(0);

enum Fruit {
  Apple,
  Orange,
  Tomato,
};

function drawImage2(fruit: Fruit) {
  const domElement: HTMLImageElement = document.createElement('img');

  switch (fruit) {
    case Fruit.Apple:
      domElement.src = '../images/apple.jpg'
      break;
    case Fruit.Orange:
      domElement.src = '../images/orange.jpg.jpg'
      break;
    case Fruit.Tomato:
      domElement.src = '../images/tomato.jpeg'
      break;
  }

  document.body.appendChild(domElement);  
};
drawImage2(Fruit.Orange);