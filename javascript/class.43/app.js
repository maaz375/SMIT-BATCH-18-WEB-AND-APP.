//              callBack function


// function greet(namee) {
//     console.log("Hellow" + namee)
// };

// function processUser(callback) {
//     let userName = "Maaz";
//     callback(userName);
// };

// processUser(greet);



// let callTest = (namee) => {
//     console.log("Hellow" + namee)
// };

// let testOther = (callback) => {
//     let userName = "Mujeeb";
//     callback(userName);
// };

// testOther(callTest);


//            call.Apply.Bind


// let person1 = {
//     name: 'Ali'
// };

// let person2 = {
//     name: 'Ahmed'
// };

// function greet() {
//     console.log("Hellow " + this.name);
// };

// greet();
// greet.call(person1);
// greet.call(person2);


// let person1 = {
//     name: 'Ali'
// };

// function introduce(age, city) {
//     console.log(this.name + ' is ' + age + ' from ' + city);
// }

// introduce.apply(person1, [25, 'Islamabad']);
// introduce.apply(person1, [30, 'Dubai']);



//      clouser

// let num1 = 10;

// let test = () => {
//     let name = 'mota';
//     console.log('num1', num1);

//     let testchild1 = () => {
//         console.log('name', name);
//     };

//     testchild1();
// };

// test();




//          promises


// new Promise((resolve, reject) => {
//     let user = true;
//     if (user) {
//         resolve('kaam hogya');
//     } else {
//         reject('kaam nhi hwa');
//     }
// }).then((response) => console.log(response)
// ).catch((error) => console.log('error', error))  



// let promisesOne = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Apka kaam hogya');
//         resolve();
//     }, 1000)
// }); 

// promisesOne.then((data) => data)
// .catch((bhnd) => console.log(bhnd)
// ).finally(() => console.log('final chala'))



