var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of all elements:", sum);
//////////////////////////////////////////////////////
var numbers1 = [1, 2, 3, 4, 5];
var allPositive = true;
for (var i = 0; i < numbers1.length; i++) {
    if (numbers1[i] <= 0) {
        allPositive = false;
        break;
    }
}
if (allPositive) {
    console.log("All Positive");
}
else {
    console.log("Not All Positive");
}
//////////////////////////////////////////////////////
var names = ["Alice", "Bob", "Christina", "David"];
var longestName = names[0];
for (var i = 1; i < names.length; i++) {
    if (names[i].length > longestName.length) {
        longestName = names[i];
    }
}
console.log("Longest name:", longestName);
//////////////////////////////////////////////////////
var str = "hello world";
var char = "o";
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
        count++;
    }
}
console.log("Character '".concat(char, "' occurs ").concat(count, " times"));
//////////////////////////////////////////////////////
var numbers2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var isPrime = function (num) {
    if (num <= 1)
        return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
var primes = [];
for (var i = 0; i < numbers2.length; i++) {
    if (isPrime(numbers2[i])) {
        primes.push(numbers2[i]);
    }
}
console.log("Prime numbers:", primes);
