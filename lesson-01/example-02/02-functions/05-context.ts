function test1() {
  // глобальная область видимости
  console.log(this);    // window{...}
  // контекст someObj
  console.log(this);    // {name: 'test', testFunc: ƒ}
  // замена контекста на пустой экземпляр объекта new
  console.log(this);    // test1 {}
};
test1();

const someObj = {
  name: 'test',
  testFunc: test1,
};
someObj.testFunc();

const someInstance = new test1;
// console.log(someInstance);    // test1 {}


function test2(x: number, y: number) {
  console.log(x + y);         // 30 / 70 / 110
  console.log(this);        // {name: 'test object'}
};

const someTestObj = {
  name: 'test object'
};

test2.call(someTestObj, 10, 20);
test2.apply(someTestObj, [30, 40]);
const newFunc = test2.bind(someTestObj, 50);
newFunc(60)