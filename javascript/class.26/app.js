
function submit() {
    var name1 = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var roll_num = document.getElementById('rollNum');

    var student = {
        stdName: name1,
        phone: phone,
        email: email,
        roll_num: roll_num
    };

    var finalData = JSON.stringify(student);
    localStorage.setItem('stdData', finalData);
};

function getData() {
    var get = localStorage.getItem('stdData');
    var parseValue = JSON.parse(get);
    document.write(parseValue.stdName);
};