class EmailValidator {
  isCorrect(email: string) {
    throw new Error('Method not implemented.');
  }
}

class EmailValidator2 {
  isCorrect(email: string) {
    throw new Error('Method not implemented.');
  }
}

// export { EmailValidator, EmailValidator2 };
// экспорт с указанием другого имени
export { EmailValidator, EmailValidator2 as MyEmailValidator }; 
