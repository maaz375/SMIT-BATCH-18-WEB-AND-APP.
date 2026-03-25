// let test = () => {
//     console.log('testing');
// };



// function test(e) {
//     e.style.color = 'white';
//     e.style.backgroundColor = 'black';
// };



// function change() {
//     let inp = document.getElementById('inp');
//     inp.style.backgroundColor = 'black';
//     inp.style.color = 'white';
// }



// function blu() {
//     let inp = document.getElementById('inp');
//     inp.style.backgroundColor = 'black';
//     inp.style.color = 'white';
// }

function fillCity() {
    var cityName;
    var zipEnterned = document.getElementById('zip').value;
    switch(zipEnterned){
        case "123":
        cityName = "Karachi";
        break;
        case "124":
        cityName = "Hyderabad";
        break;
        case "125":
        cityName = "Multan";    

    }
    document.getElementById("city").value = cityName;

    
}



