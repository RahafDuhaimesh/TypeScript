var person = {
    name: "Rahaf",
    age: 23,
    greet: function () {
        return "Hello, my name is ".concat(this.name, ".");
    },
    hobbies: ["drawing", "painting"],
};
console.log(person.greet());
console.log(person.age);
console.log(person.hobbies);
