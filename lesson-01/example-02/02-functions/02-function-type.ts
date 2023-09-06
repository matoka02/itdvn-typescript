// принимает 2 параметра типа number, возвращает значение тип number
let myAdd: (x: number, y: number) => number;

// ничего не принимает и не возвращает
let myProc: () => void;

function myAddDeclaration(x: number, y: number): number {
  return x + y;
}
myAdd = myAddDeclaration;
console.log(myAdd(10, 20));       // 30

myProc = function(): void {
  console.log('hello world');     // hello world  
};
myProc();