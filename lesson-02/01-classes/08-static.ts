// Самый распространенный пример использования статических полей – это класс Math.
// Чтобы воспользоваться методами класса Math не нужен экземпляр.
console.log(Math.PI);
console.log(Math.random());

// так работать не будет:
// const math = new Math();
// math.random();

// Паттерн singleton (единственный)
class Database {
  // статистическое приватное поле
  private static readonly instance: Database = new Database(); 

  // Частный конструктор, чтобы запретить создание экземпляров класса.
  private constructor() {
    console.log('Вызываем конструктор');
  }

  // Статический метод существует только у класса и отсутствует у экземпляра.
  public static getInstance(): Database {
    return Database.instance;
  }

  // методы для работы с базой данных
  public getData(): void {
    console.log('Received data from Database');
  }

  public setData(): void {
    console.log('Data saved to Database');
  }
}

// const database: Database = new Database(); // Constructor of class 'Database' is private and only accessible within the class declaration.

// Database.getData() //Property 'getData' does not exist on type 'typeof Database'.
// Database.setData() //Property 'setData' does not exist on type 'typeof Database'.

const db: Database = Database.getInstance();
db.getData();
db.setData();

const db2: Database = Database.getInstance();
// если экземпляр класса один, то должны получить true
console.log('db === db2', db === db2);
