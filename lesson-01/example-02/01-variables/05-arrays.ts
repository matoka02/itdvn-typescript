// 5. Array

// один тип данных в массиве
let year: string[];
year = ['January', 'February', 'March', '...'];
console.log(year);        // ['January', 'February', 'March', '...']
// year = [1, 'January', 'February', 'March', '...'];    // Type 'number' is not assignable to type 'string'

// несколько типов данных в массиве
let year2: (string | number | boolean)[];
year2 = [1, 'January', 'February', 'March', '...'];    
console.log(year2);       // [1, 'January', 'February', 'March', '...']

const list: number[] = [1,2,3];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);   // 1,2,3
  ;  
}

const values: Array<number|string> = [-1,-2,-3];
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);   // -1,-2,-3
  ;  
}

//вложенные массивы
// const nested: number[][] = [[1],[2],[3]];
const nested: Array<Array<number>> = [[1],[2],[3]];
for (let i = 0; i < nested.length; i++) {
  console.log(nested[i]);   // [1],[2],[3]
  ;  
}