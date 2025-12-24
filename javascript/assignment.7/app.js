var display = document.getElementById('display');
var buttons = document.getElementsByClassName('btn');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var value = this.value;

        if (value === 'AC') {
            display.value = '';
        } else if (value === '=') {
            try {
                var expression = display.value.replace(/%/g, '/100');
                display.value = eval(expression);
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    };
}
