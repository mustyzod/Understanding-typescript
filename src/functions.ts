const addition = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResultFunc = (num: number): void => {
  console.log("Result: " + num);
};

//  Callback
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

console.log(printResultFunc(addition(5, 12)));

let combineValues: (a: number, b: number) => number;

combineValues = addition;

console.log(combineValues(8, 8));


addAndHandle(10, 20, (result) => {
  console.log(result);
});