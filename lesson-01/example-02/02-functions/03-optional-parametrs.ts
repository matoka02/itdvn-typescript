// Все параметры обязательны, но если указать знак '?', то опциональный параметр можно не указывать, а его значение будет undefined

function getFullName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
};

const fullName1: string = getFullName('Ivan', 'Ivanov');
const fullName2: string = getFullName('Ivan');

console.log(fullName1);       // Ivan Ivanov
console.log(fullName2);       // Ivan


function getDisplayName(firstName: string, lastName: string = 'Ivanov') {
  return 'Display Name:' + firstName + ' ' + lastName;
};

const fullName3: string = getDisplayName('Ivan', 'Ivanov');
const fullName4: string = getDisplayName('Ivan');
const fullName5: string = getDisplayName('Ivan', undefined);

console.log(fullName3);       // Display Name:Ivan Ivanov
console.log(fullName4);       // Display Name:Ivan Ivanov
console.log(fullName5);       // Display Name:Ivan Ivanov

