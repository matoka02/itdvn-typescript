class Rectangle {
  private _width: number;
  private _height: number;

  // метод для получения значения закрытого свойства
  public getWidth(): number {
    return this._width;
  }

  // метод для установления значения закрытого свойства
  public setWidth(value: number): void {
    if (value <= 0) {
      this._width = 1;
    } else {
      this._width = value;
    }
  }

  // accessors - механизм, который позволяет перехватить обращение к члену объекта на запись или чтение.

  // getter
  get height(): number {
    return this._height;
  }

  // setter
  set height(value: number) {
    if (value <= 0) {
      this._height = 1;
    } else {
      this._height = value;
    }
  }

  public calculateArea(): number {
    return this._width * this._height;
  }
}

const rect: Rectangle = new Rectangle();
// установление ширины при помощи метода
rect.setWidth(100);
// чтение значения закрытого свойства при помощи метода
console.log(rect.getWidth());

// установление высоты при помощи setter. Запускается метод set на строке 22, значение 20 передается как параметр 
rect.height = -20;
// rect.height = 6;
// чтение значения закрытого свойства при помощи акссесора. Тут вызывается метод get со строки 27
console.log(rect.height);

const rectArea: number = rect.calculateArea();
console.log(rectArea);
