var input = document.getElementById('inp');

function calculate(e) {
    var val = input.value +=e;

};

function equal() {
    input.value = eval(input.value);
}

function clr() {
    input.value = '';
}