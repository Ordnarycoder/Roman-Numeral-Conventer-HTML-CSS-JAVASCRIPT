const romanToIntMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

const romanToInt = (s) => {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const currentVal = romanToIntMap[s[i]];
    const nextVal = romanToIntMap[s[i + 1]];

    if (nextVal && currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }
  return total;
};

const intToRomanMap = [
  { value: 1000, numeral: 'M' },
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' }
];

const intToRoman = (num) => {
  let result = '';
  for (const { value, numeral } of intToRomanMap) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
};

const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  const num = parseInt(numberInput.value);
  if (isNaN(num)) {
    output.textContent = "Please enter a valid number";
  } else if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    const roman = intToRoman(num);
    output.textContent = roman;
  }
  output.classList.remove("hidden");
});
