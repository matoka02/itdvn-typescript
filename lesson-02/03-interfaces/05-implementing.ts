interface Report {
  name: string;
  build: () => string;
};

// implements - ключевое слово для реализации интерфейса в классе
// если члены интерфейса не будут определены в классе, компилятор выдаст ошибку
// class DailyReport implements Report {
//   name: string = 'Daily Report';

//   build(): string {
//     return 'some daili report data';
//   }
// };

// class WeaklyReport implements Report {
//   name: string = 'Weakly Report';

//   build(): string {
//     return 'some weakly report data';
//   }
// };

// const r1: Report = new DailyReport();
// const r2: Report = new WeaklyReport();

// console.log(r1.build());
// console.log(r2.build());
