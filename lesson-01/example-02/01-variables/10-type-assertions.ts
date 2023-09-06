// Утверждение типов (когда приходит any)
let someData: any = 'Hello word';
let strLength1: number = (<string>someData).length;
let strLength2: number = (someData as string).length;