var display = document.getElementById("display");

function number(num) {
    display.value += num;
}

function operator(ope) {
    display.value += ope;
}

function compute() {
    display.value = eval(display.value);
}

function clearAll() {
    display.value = "";
}

function del() {
    display.value = display.value.slice(0, -1);
}