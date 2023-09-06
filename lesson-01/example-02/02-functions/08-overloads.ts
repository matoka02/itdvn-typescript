// Перезагрузка функции
function showMessage(messsage: string): void;
function showMessage(messsage: number): void;
function showMessage(messsage: any): void {
  switch (typeof messsage) {
    case 'number':
      console.log('Hello world');
      break;
    case 'string':
      console.log(messsage);
      break;
  }
};
showMessage(1);
showMessage('test');
// showMessage(true);