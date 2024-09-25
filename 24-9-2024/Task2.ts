let numbers: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum of all elements:", sum);
//////////////////////////////////////////////////////
let numbers1: number[] = [1, 2, 3, 4, 5];
let allPositive: boolean = true;

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] <= 0) {
    allPositive = false;
    break;
  }
}

if (allPositive) {
  console.log("All Positive");
} else {
  console.log("Not All Positive");
}
//////////////////////////////////////////////////////
let names: string[] = ["rahaf", "eman", "dema", "sara"];
let longestName: string = names[0];

for (let i = 1; i < names.length; i++) {
  if (names[i].length > longestName.length) {
    longestName = names[i];
  }
}

console.log("Longest name:", longestName);
//////////////////////////////////////////////////////
let str: string = "hello world";
let char: string = "o";
let count: number = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === char) {
    count++;
  }
}

console.log(`Character '${char}' occurs ${count} times`);
//////////////////////////////////////////////////////
let numbers2: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let isPrime: (num: number) => boolean = (num: number) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let primes: number[] = [];

for (let i = 0; i < numbers2.length; i++) {
  if (isPrime(numbers2[i])) {
    primes.push(numbers2[i]);
  }
}

console.log("Prime numbers:", primes);
