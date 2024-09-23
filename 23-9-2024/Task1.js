var num = 10;
if (num % 2 === 0) {
  console.log("".concat(num, " is even"));
} else {
  console.log("".concat(num, " is odd"));
}
///////////////////////////////////////////////////////////
var numbers = [10, 20, 30];
var Threshold = 13;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > Threshold) {
    console.log(numbers[i]);
  }
}
var users = [
  { name: "Rahaf", age: 24, isAdmin: true },
  { name: "Ayah", age: 28, isAdmin: false },
  { name: "Rawaa", age: 26, isAdmin: false },
  { name: "daba", age: 26, isAdmin: false },
];
var oldestAdmin = null;
for (var i = 0; i < users.length; i++) {
  if (users[i].isAdmin) {
    if (oldestAdmin === null || users[i].age > oldestAdmin.age) {
      oldestAdmin = users[i];
    }
  }
}
if (oldestAdmin) {
  console.log("Oldest Admin: ".concat(oldestAdmin.name));
}
