// интерфейс описывает сигнатуру функции, функция должна принимать одно строчное значение и возвращать boolean
interface MyFunc {
  (value: string): boolean;
}

let myFunc1: MyFunc;
// ....
myFunc1 = function (value: string): boolean {
  return false;
};

// имена параметров не обязательно должны совпадать с именами в интерфейсе
const myFunc2: MyFunc = function (data: string): boolean {
  return true;
};
