interface Point {
    // свойство может быть установлено только в момент создания объекта
    readonly x: number; 
    readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 100; // Cannot assign to 'x' because it is a read-only property.
console.log(point);

