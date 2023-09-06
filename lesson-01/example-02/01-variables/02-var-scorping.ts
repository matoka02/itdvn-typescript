var i = 1;
// console.log(i);         // 1

function var1() {
  console.log(i);       // undefined
  console.log(test);    // undefined
  
  for (var i = 0; i < 10; i++) {
    var test = i;    
  };

  console.log(i);       // 10
  console.log(test);    // 9 
};
// var1();


function var2() {
  var a = 10;
  var a = 20;
  console.log(a);  
};
// var2();                  // 20

function var3() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function(){
      console.log(i);       // 5, 5, 5, 5, 5   
    }, 10)
  }
};
// var3();                     