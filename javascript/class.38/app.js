//  rset operator 




//  without rest operator

// function sum1(a, b, c, ...numbers) {
//     let aplh = a + b + c;
//     let arrSum = numbers.reduce((accumulated, current) => {
//         return accumulated + current;
//     });
//     return aplh + arrSum;
// }

// sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));



//  rest operator

// function sum(a, ...numbers) {
//     console.log(numbers);
// }

// let arr1 = [1, 2, 3];
// let arr2 = [11, 12, 13];

// sum(1, arr1, arr2);


// let arr1 = [1, 2, 3, 4, 5, 6];

// let sumNumber = arr1.reduce((accumulated, current) => {
//     return accumulated + current
// });

// console.log(sumNumber);




//  Array destucturing with rest operator

// let arr1 = [1, 2, 3, 4, 5];

// let [a, b, ...rest] = arr1;

// console.log(a);   // 1
// console.log(b);   // 2
// console.log(rest);  // 3



// object destucturing rest operator

// let obj = {
//     name: 'Maaz',
//     age: 17,
//     city: 'Karachi'
// };

// let {name, age, city} = obj;

// let { name, ...rest} = obj;

// console.log(name);  // 'Maaz'
// console.log(rest);  // age: 17, city: 'Karachi'




//  spread operator

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// console.log(arr2);




//  Array merge

let a = [1, 2];
let b = [3, 4];

let result = [...a, ...b];
console.log(result);