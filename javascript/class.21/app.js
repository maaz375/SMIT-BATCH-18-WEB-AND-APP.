function Plan(name, price, space, transfer, pages) {
    this.name = name,
        this.price = price,
        this.space = space,
        this.transfer = transfer,
        this.pages = pages
};

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);

console.log(plan1);

var plan2 = new Plan("Professional", 5.99, 500, 5000, 50);

console.log(plan2);