var cities = ['karachi', 'islamabad', 'pindi', 'lahore', 'multan', 'swat'];

var userInput = prompt('enter city name');
var isValid = false;

for (var i = 0; i < cities.length; i++) {
    if (userInput.toLowerCase() == cities[i]) {
        alert('you are eligible');
        isValid = true;
        break;
    }
    // } else {
    //     alert('you are not eligible');
    //     isValid = false;
    //     break;
    // }
}

if (userInput.toLowerCase() != cities[i].toLowerCase()) {
    isValid = false;
    alert('you are not eligible');
}

// console.log(isValid);