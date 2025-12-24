// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];

// var myName = 'Maaz';

// var userInput = prompt('Enter your name');

// var firstLetter = userInput[0].toUpperCase();

// var remainLetters = userInput.slice(1).toLowerCase();

// console.log('first letter',firstLetter);
// console.log('remain letters',remainLetters);

// var concatenate = firstLetter + remainLetters;

// if (myName === concatenate) {
//     alert('you are the father ' + concatenate);
// } else {
//     alert('you are not the father ' + concatenate);
// }







for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    }
}