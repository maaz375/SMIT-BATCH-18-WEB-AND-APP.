// var username = "maaz";
// console.log(username);








// variable declare and initialize

// var mobile = 'samsung';

// re-declare OR re-assinged

// mobile = 'apple';






// var userName;

// console.log(userName);

// if(userName){
//     console.log('true haaa');
// } else{
//     console.log('elsee chlaaa');
// }




// var re-declare OR re-assigned dono hota h

// var declaration1;


// le re-declare nhi hota lekn re-assigned ho ata h

// let declaration1;
// let declaration1;




// const 1 hi dafa declare or initialize hota h

// const declaration2 = 'declaration2';
// declaration2 = 'declaration2';














//  pre increment
//  post increment



// let a = 12;
// let b = 5;


//         12 + 13  - 5
// console.log(a + ++a - b--);





// let firstName = "maaz"
// let lastName = "khatri"

// let fullName = firstName + lastName;             one
// let fullName = firstName.concat(" " + lastName); two
// let fullName = `${fistName} ${lastName}`

// console.log(fullName)









// console.log("2" + 2);



// let result = 2 + 3 + "35";
// console.log(result.slice(0 , 2));














//   conditional statement

//   job requirements ==> age ==> 18, location == karachi , exp ==> 1
//   lang == js , qualification == 'matric'

// let age = 19;
// let city = "karachi";
// let exp = '1year';
// let qualification = "matric";
// let lang = "javascript"










//  ARRAY

// let arr1 = [12, false , "string" , 54 , {name : "maaz"}];

// arr1[4].name = "jameel istri waro";

// console.log(arr1);

// console.log(arr1.shift());

// console.log(arr1.slice(0, 2));





//   higher order mathod  ||  callback function
//   splice, map, filter, find, findindex, slice
//                    for loop



// let arr = ["saleem karo", "shakoor lagro", "jameel istri waro"];
// console.log(arr, 'before splice array')

// console.log(arr.slice(0, 1));

// console.log(arr.splice(0, 1, 'rehan chupo'));

// console.log(arr, 'After splice array')



// function foo (a) {
// console.log(a)
// }

// function abc(cb) {
// console.log(cb)

//     cb(56)
// }

// abc(function (a) {
//     console.log(a)
// })



// function result (sum){

//     sum(50, 50)
// }

// function sum (a, b) {
//     console.log(a + b)

// }

// sum(12 + 12)

// result(sum)




//  ye sab loop chalaty han

//  for each kuch return nhi karta 
//  map return karta h wahi aaray
//  filter return karta h 1 new arrya
//  find return karta h true condition ki 1 value



// let arr = [1, 2, 3, 4, 5, 6];


// arr.forEach((item) => {console.log(item)})



// let returnMap = arr.map((item) => item > 8)

// console.log(returnMap)



// let filterItems = arr.filter((item) => item > 6)

// console.log(filterItems)



// let findReturn = arr.find((item) => item == 4 )

// console.log(findReturn)



// for (let i = 0; i< arr.length; i++){
//     console.log(arr[i])
// }



















//           if / else

// var username = "farhan";

// if(username != 'farhan mota') {
//     console.log('farhan lora');
// }
// else (
//     console.log('farhan topa')
// )


// var meow = false;

// if(meow == true) {
//     console.log('gop gop gop')
// }
// else{
//     console.log('ma ka ladly meow gop gop gop')
// }


// var biwi = false;

// if(biwi == true) {
//     console.log('jiski biwi moti uska bhi bara name h')
// }
// else {
//     console.log('biwi kali h');
// }









//      for  loop

// var inp = Number(prompt('enter number'))

// if (inp >= 1 && inp <= 999999999) {
//     for (i = 1; i <= 10; i++) {
//         document.write(inp + ' X ' + i + ' = ' + inp * i + '<br>');
//     }
// } else {
//     alert('please enter number');
// }



// var star = '';

// for (var i = 1; i <= 7; i++) {
//     star += '*';
//     document.write(star + '<br>');
// };



// for (i = 1; i <= 50; i++) {
//     document.write(i/3 + '<br>')
// }













//                             function
// ==================================================================

// function sum(a, b){
//     console.log(2 + 2);
// };

// sum();




// function checker() {
//     var num = [1, 2, 3, 4, 5, 6, 7, 9, 8, 3, 6];
//     for(let i = 0; i < num.length; i++) {
//         if(num = 0 || )
//     }
// }















//      to do list 

// var inp = document.getElementById('inp')
// var ul = document.getElementById('ul');

// function add() {

//     if(inp.value.trim() === '') return;

//     var obj = {
//         text: inp.value
//     };

//     var li = document.createElement('li');
//     li.innerHTML = obj.text;



//     var dlt = document.createElement('button');
//     dlt.innerHTML = 'Delete';

//     dlt.onclick = function (e) {
//         e.stopPropagation();
//         li.remove();
//     }



//     var edt = document.createElement('button');
//     edt.innerHTML = 'Edit';

//     edt.onclick = function (e) {
//         e.stopPropagation();
//         var newText = prompt('enter new value');
        
//         if(newText !== null && newText.trim() !== '') {
//             li.firstChild.nodeValue = newText;
//         }

//     }

//     li.appendChild(dlt);
//     li.appendChild(edt);
//     ul.appendChild(li);

//     inp.value = '';

// }




//  to do list 2

// var inp = document.getElementById('inp');
// var ul = document.getElementById('ul');

// function add() {
    
//     if(inp.value.trim() === '') return;

//     var text = inp.value;

//     var li = document.createElement('li');
//     li.innerHTML = text;



//     var dltbtn = document.createElement('button');
//     dltbtn.innerText = 'Delete';

//     dltbtn.onclick = function (o) {
//         o.stopPropagation();
//         li.remove();
//     }



//     var edtbtn = document.createElement('button');
//     edtbtn.innerText = 'Edit';

//     edtbtn.onclick = function (p) {
//         p.stopPropagation();
//         var newText = prompt('enter new value');

//         if(newText !== null || newText.trim !== ''){
//             li.firstChild.nodeValue = newText;
//         }
//     }

//     li.appendChild(edtbtn);
//     li.appendChild(dltbtn);
//     ul.appendChild(li);

//     inp.value = '';
// }





//   to do list 3

// var inp = document.getElementById('inp');
// var ul = document.getElementById('ul');

// function add() {

//     if(inp.value.trim() === ' ') return;

//     var text = inp.value;

//     var li = document.createElement('li');
//     li.innerHTML = text;



//     var dltbtn = document.createElement('button');
//     dltbtn.innerText = 'Delete';

//     dltbtn.onclick = function (e) {
//         e.stopPropagation();
//         li.remove();
//     }



//     var edtbtn = document.createElement('button');
//     edtbtn.innerText = 'Edit';

//     edtbtn.onclick = function (p) {
//         p.stopPropagation();
//         var newText = prompt('enter new text here');

//         if (newText.trim() !== ' ' || newText !== null){
//             li.firstChild.nodeValue = newText;
//         }
//     }



//     li.appendChild(dltbtn);
//     li.appendChild(edtbtn);
//     ul.appendChild(li);

//     inp.value = '';

// }




//         promises

// console.log('hello');

// setTimeout(() => {
//     console.log('set');
// }, 1000)


// console.log('baad');



// new Promise((resolve, reject) => {
//     let car = true;
//     if(car){
//         car = true;
//         console.log('kam ho gya');
//         resolve()
//     }else{
//         console.log('kam nhi huwa');
//         reject()
//     }
    
// }).then((res) => console.log('then chala') )
// .catch((err) => console.log('error chala'))
// .finally((fin) => console.log('final chala'))



//                       EVENT LOOP

//       1. settime out
//       2. async await
//       3. promise
//       4. web apis
//       5. call stack
//       6. 




let user = 'maaz';

setTimeout(() => {
    console.log('set time out');
},0);


console.log('user', user);

new Promise ((resolve, reject) => {
    console.log('promise chala');
    resolve();
});


