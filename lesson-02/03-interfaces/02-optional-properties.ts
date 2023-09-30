interface RectangleShape {
  // свойство не обязательно
  name?: string; 
  width: number;
  height: number;
}

function drawRectangle(rect: RectangleShape): void {
  if (rect.name) {
    console.log('Name - ' + rect.name);
  }

  console.log(rect.width + '*' + rect.height);
};

const rect1 = {
  name: 'Rectangle 1',
  width: 100,
  height: 75,
};

const rect2 = {
  // name: 4,
  width: 55,
  height: 33,
};

const rect3 = {
  name: 'Rectangle 3',
  width: 100,
};

drawRectangle(rect1);
drawRectangle(rect2);
// объект не имеет обязательного свойства
// drawRectangle(rect3); 
