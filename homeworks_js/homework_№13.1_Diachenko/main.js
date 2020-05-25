const btnWidth = (keyCode) => {
    switch (keyCode) {
        case 8:
        case 9:
            return 10 + '%';
        case 20:
        case 13:
            return 11.5 + '%';
        case 16:
            return 15 + '%';
        case 32:
            return 100 + '%';
    }
    return 6.0 + '%';
}

const keyLayout = [
    ["`", 192], ["1", 49], ["2", 50], ["3", 51], ["4", 52], ["5", 53], ["6", 54], ["7", 55], ["8", 56], ["9", 57], ["0", 48], ["-", 189], ["=", 187], ["Delete", 8], ["Tab", 9], ["q", 81], ["w", 87], ["e", 69], ["r", 82], ["t", 84], ["y", 89], ["u", 85], ["i", 73], ["o", 79], ["p", 80], ["[", 219], ["]", 221], ["/", 220], ["CapsLock", 20], ["a", 65], ["s", 83], ["d", 68], ["f", 70], ["g", 71], ["h", 72], ["j", 74], ["k", 75], ["l", 76], [";", 186], ["'", 222], ["Enter", 13], ["shift", 16], ["z", 90], ["x", 88], ["c", 67], ["v", 86], ["b", 66], ["n", 78], ["m", 77], [",", 188], [".", 190], ["/", 191], ["shift", 16], [" ", 32]
];

const textinput = document.querySelector("textarea");
const container = document.querySelector("div");


textinput.focus();
keyLayout.forEach(key => {
        const button = document.createElement("button");
        button.id = key[1];
        button.setAttribute("type", "button");
        button.classList.add("keyboard__key");
        button.innerHTML = key[0];
        button.style.width = btnWidth(key[1]);

        container.appendChild(button);
});

document.body.addEventListener('keyup', function (event) {
    console.log(event.keyCode);

    const btn = document.getElementById(event.keyCode);
    btn.style.backgroundColor = 'white';

    textinput.focus();
});

document.body.addEventListener('keydown', function (event) {
    console.log(event.keyCode);

    const btn = document.getElementById(event.keyCode);
    btn.style.backgroundColor = 'rgb(167, 165, 165)';

    textinput.focus();
});

