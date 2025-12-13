// var countries = ['Pakistan', 'Germany', 'India'];

// console.log(countries);

// var newCities = ['Karachi', 'Paris'];

// countries.splice(countries.length, 0, newCities);

// console.log(countries);


// var countries = ['Pakistan', 'Germany', 'India', 'France', 'Brazil', 'Spain'];

// console.log(countries);

// var newArr = countries.slice(1, 4);

// console.log(newArr);




//  FUNCTION: CH.35


// function alertUser (name, greet) {
//     // var userName = prompt('user name');
//     alert(`As salamu alaikum ${name}`);
//     alert(` ${greet}`)
// }

// document.write(`Hellow <br>`);
// document.write(`Where r u <br>`);
// document.write(`Tera dihaan kidher h <br>`);
// document.write(`Chal by nikal yaha sy warna pity gha <br>`);

// var name1 = 'Saylani';
// var halChal = 'How r u';

// alertUser(name1, halChal);



//  function online class



function Calculate(n1, n2, operator){
    var total;
    if(operator === '+'){
        total = n1 + n2;
    } else if (operator === '-'){
        total = n1 - n2;
    } else if (operator === '*'){
        total = n1 * n2;
    } else if (operator === '/'){
        total = n1 / n2;
    } else {
        alert('please enter right number or operator');
    }

    return total;
}


var num1 = Number(prompt('enter num1'));
var num2 = Number(prompt('enter num2'));
var operator = prompt('+, -, *, /');

var output = Calculate(num1, num2, operator);

// console.log('output', output);


var heading = document.getElementById('h2');
heading.innerHTML = `Calculation is ${output}`;
// heading.innerText = 'now you can do';

// console.log('heading', heading);