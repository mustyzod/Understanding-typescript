type Combinable = number | string; // Literal Types alias
type ConversionDescriptor = "as-number" | "as-text";

const combine = (
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
};

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
