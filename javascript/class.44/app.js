//                             Revesion


// let newPro = new Promise((resolve, reject) => {
// resolve('kam ho gya');              1
// console.log('kam ho gya');          2
// resolve()                           3

//     let user = true;
//     if(user) {
//         resolve('treat h')
//     }else{
//         reject('koi treat nhi h')
//     }
// });

// newPro.then((aftari) => console.log(aftari))
// .catch((err) => console.log(err))





//     Fetch

// let response = fetch('https://jsonplaceholder.typicode.com/todos/1');

// response.then((data) => data.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
// .finally(() => console.log('finally chala'))

// let baseUrl = 'https://jsonplaceholder.typicode.com';
// let endPoint = {
//     posts: '/posts',
//     todos: '/todos',
//     comments: '/comments',
//     photos: '/photos',
// }

// let test = async () => {
    
//     let response = await fetch(`${baseUrl}${endPoint.photos}`)

//     let data = await response.json();

//     console.log(data)
// }

// test()