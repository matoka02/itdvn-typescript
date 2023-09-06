const increment = function (x: number) {
  return x + 1
};
const incrementArrow1 = (x: number) => {
  return x + 1
};
const incrementArrow2 = (x: number) => x + 1;
const incrementArrow3 = x => x + 1;

const myFunc = (callback: (x: number) => number): void => {
  callback(10);
}
myFunc(x => x + 1);