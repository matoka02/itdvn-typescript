// импорт интерфейса Validator из модуля 01-validators
import { Validator } from "./01-validators"; 
// импорт нескольких типов 
// import { Validator, CreditCardValidator } from "./01-validators"; 

class PhoneNumberValidator implements Validator {
    validate(value: string): boolean {
        return true;
    }
}

const phoneVal = new PhoneNumberValidator();
console.log(phoneVal.validate("000-00-00"));