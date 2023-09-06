// неявное указание типа данных
let message1 = 'Hello!';
// message1 = 5;      // Type 'number' is not assignable to type 'string'.t

// явное указание типа данных - сразу и не сразу
// let message2: string = 'Hello!';
let message2: string;
message2 = 'hello';

const message3: string = 'Hello!';
// message3 = 'world';     // Cannot assign to 'message3' because it is a constant.ts(2588)