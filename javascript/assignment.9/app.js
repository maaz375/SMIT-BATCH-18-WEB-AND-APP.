var dice = document.getElementById("dice");

var faces = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9]
};

function rollDice() {
    dice.innerHTML = "";

    dice.style.transform = "rotate(720deg)";

    setTimeout(function () {
        var number = Math.floor(Math.random() * 6) + 1;

        faces[number].forEach(function (pos) {
            var dot = document.createElement("span");

            if (number === 1 || number === 4) {
                dot.className = "dot red pos" + pos;
            } else {
                dot.className = "dot blue pos" + pos;
            }

            dice.appendChild(dot);
        });

        dice.style.transition = "none";
        dice.style.transform = "rotate(0deg)";

        setTimeout(function () {
            dice.style.transition = "transform 0.9s";
        }, 50);

    }, 600);
}
