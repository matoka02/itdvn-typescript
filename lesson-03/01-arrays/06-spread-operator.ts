// spread operator - добавление элементов массива dataArray1 в конец массива dataArray2
const dataArray1: number[] = [1, 2, 3];
const dataArray2: number[] = [ 100, 200, ...dataArray1]; 

console.log(dataArray2);

// object spread - свойства объекта point2D добавляются к свойствам объекта point3D (в начало)
const point2D = { x: 10, y: 20 };
const point3D = { ...point2D, z: 30 }; 

console.log(point3D);
