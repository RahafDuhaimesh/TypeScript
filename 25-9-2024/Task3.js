var person = {
    name: "Rahaf",
    age: 23,
    IsAdult: function () {
        if (person.age > 18) {
            console.log("Adult");
        }
        else {
            console.log("Minor");
        }
    },
};
var teacher = {
    name: "Rawaa",
    subjects: ["Math", "Science", "History"],
};
console.log("".concat(teacher.subjects, ":"));
var products = [
    {
        name: "Laptop",
        price: 1000,
        quantity: 3,
        IsGreater: function (threshold) {
            return this.quantity > threshold ? "Greater" : "Not Greater";
        },
    },
    {
        name: "Phone",
        price: 500,
        quantity: 10,
        IsGreater: function (threshold) {
            return this.quantity > threshold ? "Greater" : "Not Greater";
        },
    },
];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    if (product.IsGreater(5) === "Greater") {
        product.price *= 1.1;
    }
}
console.log(products);
console.log("Updated product prices:");
console.log(products);
var deviceWithStart = {
    start: function () {
        console.log("Device started.");
    },
};
var deviceWithoutStart = {};
function initializeDevice(device) {
    if (device.start) {
        device.start();
    }
    else {
        console.log("Device starting with default settings.");
    }
}
initializeDevice(deviceWithStart);
initializeDevice(deviceWithoutStart);
