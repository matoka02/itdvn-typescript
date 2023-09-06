function repeatOperation(count: number, callback: () => void): void {
  console.log('start');
  for (let i = 0; i < count; i++) {
    callback();
  }
  console.log('stop');
}

const setting = {
  displayName: 'test object',

  test1() {
    // const self = this;
    // repeatOperation(3, function () {
    //   // console.log(this.displayName);    // undefined, undefined, undefined
    //   console.log(self.displayName);       // test object, test object, test object    
    // });

    // рефакторинг
    repeatOperation(3, (function () {
      console.log(this.displayName);     
    }).bind(this));                           // test object, test object, test object    
  },

  test2() {
    repeatOperation(2, () => console.log(this.displayName));                      // test object,test object, test object
  }
};
setting.test1();
setting.test2();