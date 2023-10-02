/*
Модуль - отдельный файл со своей областью видимости. Сменные функции, классы и т.д. определены в модуле и не доступны за его пределами.
Любой файл, в котором на верхнем уровне находится import или export, является модулем.
Зависимости между модулями определяются с помощью ключевого слова.
Модули импортируются с помощью загрузчиков модулей. Во время выполнения загрузчик модуля ответственен за определение расположения модуля и его загрузку перед его исполнением.
*/

export interface Validator {
  validate(value: string): boolean;
}

export class CreditCardValidator implements Validator {
  validate(value: string): boolean {
    return false;
  }
}

export class UrlValidator implements Validator {
  validate(value: string): boolean {
    return false;
  }
}
