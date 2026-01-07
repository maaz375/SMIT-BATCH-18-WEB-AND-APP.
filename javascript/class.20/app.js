// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
// };


function Plan(name, price, space, transfer, pages) {
        this.name = name,
        this.transfer = transfer,
        this.price = price,
        this.space = space,
        this.pages = pages,
};

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);