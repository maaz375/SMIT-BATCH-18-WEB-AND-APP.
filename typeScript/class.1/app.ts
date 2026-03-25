// let myName : string = 'Maaz';
// myName = 'Mujeeb;

// let num1 : number = 123;


// boolean
// let isUser : boolean = true;
// isUser = ''


//  Array in typescript

// let arr1 : string[] = [];
// arr1.push('maaz');
// arr1.push(123);   error

// let arr2 : (string | number | boolean)[] = [];
// let arr2 : (any)[] = [];   for begginers

// arr2.push('smit');
// arr2.push(123);
// arr.2push(false);



// let marks : Array<number | string> = [10, 20 ,100];


//  function

// function test(a: number, b: number) {
//     console.log(a + b);
//     // return a + b;
// }

// test(12, 23);


// function test2(a: string, b: string, c: number) {
//     console.log(a, b, c);
// }

// test2()


// function test(a: string, n?: string) {
//     console.log(a, b);
// }

// test('maaz');



//  Objects & Type Alias

// type UserObj = {
//     name : string,
//     email : string,
//     password? : string,
//     isLoggedin? : boolean;
// };

// let user : UserObj = {
//     name : 'maaz',
//     email : 'maaz@',
//     password : 'maxs125',
//     isLoggedin : false
// };

// let user2 : UserObj = {
//     name : 'maaz',
//     email : 'maaz@'
// }




type UserObj = {
    name : string,
    email : string,
    password? : string,
    isLoggedin? : boolean;
};

let student: { name: string; age: number} = {
    name: 'maaz',
    age: 20
};