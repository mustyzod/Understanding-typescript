// const button = document.getElementById("btn");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// const add = (num1: number, num2: number) => {
//   return num1 + num2;
// };
// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
// console.log('hey....');

const add = (n1: number, n2: number, showresult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showresult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};

let number1: number;
number1 = 5;
const number2 = 2.8; 
const printResult = true;
let resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);