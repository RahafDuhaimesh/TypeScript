interface Person {
  name: string;
  age: number;
  phone?: string;
  hobbies: string[];
  greet: () => string;
}

let person: Person = {
  name: "Rahaf",
  age: 23.8,
  greet: function () {
    return `Hello, my name is ${this.name}.`;
  },
  hobbies: ["drawing", "painting"],
};

console.log(person.greet());
console.log(person.age);
console.log(person.hobbies);
