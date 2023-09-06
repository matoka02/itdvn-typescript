function let1() {
  // console.log(i);       // Uncaught ReferenceError: i is not defined at let1 (03-let-scorping.ts:2:15) at 03-let-scorping.ts:12:1
  // console.log(test);    // Uncaught ReferenceError: test is not defined at let1 (03-let-scorping.ts:3:15) at 03-let-scorping.ts:12:1
  
  for (let i = 0; i < 10; i++) {
    let test = i;    
    // console.log(i);     // 0,1,2,3,4,5,6,7,8,9
    // console.log(test);  // 0,1,2,3,4,5,6,7,8,9    
  };

  // console.log(i);       // Uncaught ReferenceError: i is not defined at let1 (03-let-scorping.ts:9:15) at 03-let-scorping.ts:12:1
  // console.log(test);    // Uncaught ReferenceError: test is not defined at let1 (03-let-scorping.ts:9:15) at 03-let-scorping.ts:12:1 
};
let1();


function let2() {
  let a = 10;
  // let a = 20;           // Cannot redeclare block-scoped variable 'a'.ts(2451
  // console.log(a);  
};
let2();                  // 20

function let3() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function(){
      // console.log(i);     // 0,1,2,3,4 
    }, 10)
  }
};
let3();                     