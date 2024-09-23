let num: number = 10;

if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}
///////////////////////////////////////////////////////////
let numbers: number[] = [10, 20, 30];
let Threshold: number = 13;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > Threshold) {
    console.log(numbers[i]);
  }
}
///////////////////////////////////////////////////////////
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let users: User[] = [
  { name: "Rahaf", age: 24, isAdmin: true },
  { name: "Ayah", age: 28, isAdmin: false },
  { name: "Rawaa", age: 26, isAdmin: true },
  { name: "daba", age: 26, isAdmin: false },
];

let oldestAdmin: User | null = null;

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin) {
    if (oldestAdmin === null || users[i].age > oldestAdmin.age) {
      oldestAdmin = users[i];
    }
  }
}

if (oldestAdmin) {
  console.log(`Oldest Admin: ${oldestAdmin.name}`);
}
