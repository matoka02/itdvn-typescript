// -------------------------------------------
// Без интерфейса
// -------------------------------------------
// obj: { name: string } - параметром obj должен быть объект со свойством name строчного типа
function printValue1(obj: { name: string }) {
  console.log(obj.name);
}

const myObj1 = { value: 10, name: 'Hello World' };
// myObj1 имеет свойство name
printValue1(myObj1);

const myObj2 = { data: 10, name2: 'Hello World' };
// myObj2 не может использоваться как параметр, т.к. не имеет свойства name
// printValue1(myObj2); 


// -------------------------------------------
// С интерфейсом
// -------------------------------------------
// определяем интерфейс NamedValue
// Этот интерфейс можно рассматривать как требования к объектам обладать свойством с именем name типа string.
interface NamedValue {
  name: string;
}

// функция printValue2 принимает параметр типа NamedValue
// как параметр можно передать экземпляр класса, реализовавшего интерфейс
// или объект, по своей структуре подходящий под указанный интерфейс. Использовать приведение типов как в большинстве других языков не требуется
function printValue2(obj: NamedValue) {
  console.log(obj.name);
}

// myObj1 имеет свойство name
printValue2(myObj1);
// myObj2 не может использоваться как параметр, т.к. не имеет свойства name
// printValue2(myObj2); 

const myObj3: NamedValue = { name: 'World' };
// myObj3 реализует интерфейс NamedValue
printValue2(myObj3); 
