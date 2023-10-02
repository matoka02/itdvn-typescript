// импорт с указанием другого имени
import { EmailValidator as EmailV } from '03-export-statement'; 

class EmailValidator {
  validate() {
    return true;
  }
}

const x: EmailV = new EmailV();
const y: EmailValidator = new EmailValidator();
