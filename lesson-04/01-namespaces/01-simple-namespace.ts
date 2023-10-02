// namespace (пространство имен) - механизм для группирования кода и определения отдельных областей видимости.
// Код, помещенный в пространство имен, находится в области видимости пространства имен, а не в глобальной области видимости.
// Чтобы элементы пространства имен были доступны вне пространства имен, необходимо использовать ключевое слово export.

// определение пространства имен с именем Sample1
namespace Sample1 {
  // класс будет доступен вне пространства Sample1
  export class MyClass1 {
    public message() {
      console.log('Sample1.MyClass1.message');
    }
  }

  class MyClass2 {
    public message() {
      console.log('Sample1.MyClass2.message');
    }
  }
}

namespace Sample2 {
  export class MyClass1 {
    public message() {
      console.log('Sample2.MyClass1.message');
    }
  }

  class MyClass2 {
    public message() {
      console.log('Sample2.MyClass2.message');
    }
  }
}

// следующий код находится в глобальной области видимости.

// Использование класса MyClass1 из пространства имен Sample1
const temp1 = new Sample1.MyClass1();
temp1.message();

const temp2 = new Sample2.MyClass1();
temp2.message();
