class User {
  // свойство
  firstName: string; 
  lastName: string; 

  // метод
  print(): void {
    console.log(this.firstName + " " + this.lastName);    
    // Ivan Ivanov 
    // John Doe
  };
};

// создание экземпляра класса User, вызывая конструктор и инициализация переменной user1
const user1: User = new User(); 
// присвоение значения свойству firstName на экземпляре user1
user1.firstName = "Ivan"; 
// присвоение значения свойству lastName на экземпляре user1
user1.lastName = "Ivanov";

const user2: User = new User(); 
user2.firstName = "John"; 
user2.lastName = "Doe";

// вызов метода print на экземпляре
user1.print(); 
user2.print(); 
console.log(user1);               // User {firstName: 'Ivan', lastName: 'Ivanov'}
