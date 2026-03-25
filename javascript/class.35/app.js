//  includes
//  map
//  find
//  filter
//  reduce
//  forEach





// let arr = ['yellow', 'red', 'pink'];

// let check = arr.includes('yellow');
// console.log(check);

// let checker = (str) => {
//     let color = arr.includes(str)
//     if (color === true) {
//         console.log('your answer is right');
//     } else {
//         console.log('your answer is wrong');
//     }
// }

// checker('blue');


// let arr = ['yellow', 'red', 'pink'];
// let newData = [
//     {
//         name: 'Hamid',
//         age: 30,
//         id: 1,
//     },
//     {
//         name: 'Rehan',
//         age: 17,
//         id: 2,
//     }
// ];

// let checker = newData.map((data, index) => {
// console.log(data.name);
// console.log(index);

// if (data.age > 18) {
//     return console.log('you are eligible');
// } else{
//     return console.log('youre not eligible');
// }

//     return data.age;
// });

// console.log(checker)

// let newData = [
//     {
//         name: 'Hamid',
//         age: 30,
//         id: 1,
//     },
//     {
//         name: 'Rehan',
//         age: 17,
//         id: 2,
//     }
// ];

// let arr = [1,2,1,5]

// let checker =arr.find((data) => data === 1)
// console.log(checker)


// let newData = [
//     {
//         name: 'Hamid',
//         age: 30,
//         id: 1,
//     },
//     {
//         name: 'Rehan',
//         age: 17,
//         id: 2,
//     }
// ];

// let checker = newData.filter((data) => data.age > 18) 

// console.log(checker)
// console.log('newData',newData)

// let arr =  [1,2,3,4,5]

// let checker =  arr.reduce ((accumulated , current) => {
// return acc + current
// })
// console.log(checker);

// let arr =  [1,2,3,4,5]

// arr.forEach((d) => {
//     console.log(d > 3)
// })
// console.log(checker)

// let newData = [
//     {
//         name: 'Hamid',
//         age: 30,
//         id: 1,
//     },
//     {
//         name: 'Rehan',
//         age: 17,
//         id: 2,
//     }
// ];

// newData.forEach((d) => {
//     let a = d.name
// });