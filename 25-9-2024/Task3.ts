// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
interface Person {
  name: string;
  age: number;
  IsAdult: () => void;
}

let person: Person = {
  name: "Rahaf",
  age: 23,
  IsAdult: function () {
    if (person.age > 18) {
      console.log("Adult");
    } else {
      console.log("Minor");
    }
  },
};

// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.
interface Teacher {
  name: string;
  subjects: string[];
}

const teacher: Teacher = {
  name: "Rawaa",
  subjects: ["Math", "Science", "History"],
};

console.log(`${teacher.subjects}:`);

// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to increase the price of each product by 10% if the quantity is greater than 5.
interface Product {
  name: string;
  price: number;
  quantity: number;
  IsGreater: (threshold: number) => string;
}

let products: Product[] = [
  {
    name: "Laptop",
    price: 1000,
    quantity: 3,
    IsGreater: function (threshold: number) {
      return this.quantity > threshold ? "Greater" : "Not Greater";
    },
  },
  {
    name: "Phone",
    price: 500,
    quantity: 10,
    IsGreater: function (threshold: number) {
      return this.quantity > threshold ? "Greater" : "Not Greater";
    },
  },
];

for (let product of products) {
  if (product.IsGreater(5) === "Greater") {
    product.price *= 1.1;
  }
}

console.log(products);
console.log("Updated product prices:");
console.log(products);

// Task 4 : Validate Optional Function in Interface with Default Behavior
// You have an interface Device with an optional method start(). If the device has a start method, it should be called, otherwise, log "Device starting with default settings."

interface Device {
  start?: () => void;
}

const deviceWithStart: Device = {
  start: () => {
    console.log("Device started.");
  },
};

const deviceWithoutStart: Device = {};

function initializeDevice(device: Device) {
  if (device.start) {
    device.start();
  } else {
    console.log("Device starting with default settings.");
  }
}

initializeDevice(deviceWithStart);
initializeDevice(deviceWithoutStart);
