var world = {
    name: "Kaminari Heaven",
    currency: "khc",
    size: 2000000,
};
console.log(world);
console.log("Hello welcome to " + world.name + ".");

function Person(fn, ln, age, gender, nationality, money) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
    this.money = money;
    this.house = [];
}

function House(color, size, price, age) {
    this.color = color;
    this.size = size;
    this.price = price;
    this.age = age;
    this.neighbors = [];
}

// Creating people
var em = new Person("Elon", "Musk", 48, "male", "Canadian", 0);
console.log(em);
var mz = new Person("Mark", "Zuckerberg", 35, "male", "American", 0);
console.log(mz);
var jb = new Person("Jeff", "Bezos", 55, "male", "American", 0);
console.log(jb);
var lp = new Person("Larry", "Page", 46, "male", "American", 0);
console.log(lp);

// Creating houses
var h1 = new House("Blue", 1000, 100000, 4);
console.log(h1);
var h2 = new House("Yellow", 1100, 110000, 3);
console.log(h2);
var h3 = new House("Red", 1200, 120000, 2);
console.log(h3);
var h4 = new House("Greeb", 1300, 130000, 1);
console.log(h4);

h1.neighbors = h2;