const firstPage = document.querySelector('.firstPage')
const mainText = document.querySelector('.mainText')
const sectionEdit = document.querySelector('.sectionEdit')
const sectionStyle = document.querySelector('.sectionStyle')
const textarea = document.querySelector('textarea')
const btnEdit = document.querySelector('.editBtn')
const btnSave = document.querySelector('.saveBtn')
const btnStyle = document.querySelector('.styleBtn')
const btnAdd = document.querySelector('.addBtn')
const secondPage = document.querySelector('.secondPage')


btnEdit.addEventListener('click', function () {
    console.log(btnEdit)
    sectionEdit.style.display = 'block'
    sectionStyle.style.display = 'none'
    textarea.value = mainText.innerHTML
});

btnSave.addEventListener('click', function () {
    mainText.innerHTML = textarea.value
    sectionEdit.style.display = 'none'
});

btnStyle.addEventListener('click', function () {
    sectionStyle.style.display = 'flex'
    sectionEdit.style.display = 'none'
    textarea.value = mainText.innerHTML
});

let fontSize = document.forms.fontSize;
for (let i = 0; i < fontSize.elements.length; i++) {
    fontSize.elements[i].addEventListener('click', function () {
        mainText.style.fontSize = fontSize.elements[i].value
        mainText.style.fontSize = this.value
    })
};

let fontFamily = document.forms['fontFamily'];
fontFamily.selectOptn.addEventListener('change', function () {
    mainText.style.fontFamily = this.value;
});

let fontStyle = document.forms.fontStyle;
const bold = fontStyle.elements.checkboxBold;
const cursive = fontStyle.elements.checkboxCursive;

bold.addEventListener('change', (event) => {
    if (event.target.checked) {
        mainText.style.fontWeight = bold.value;
    }
    else {
        mainText.style.fontWeight = 'normal';
    }
})

cursive.addEventListener('change', (event) => {
    if (event.target.checked) {
        mainText.style.fontStyle = cursive.value;
    }
    else {
        mainText.style.fontStyle = 'normal';
    }
})

const formColors = document.forms.formColors;
const btnColorTxt = formColors.elements.colorOfTxt;
const btnBgdColor = formColors.elements.bgdColor;
const colors = ['darkblue', 'red', 'yellow', 'green', 'purple', 'grey', 'orange', 'coral', 'blue'];
const color = document.getElementsByClassName('color');
const divColors = document.getElementById('divColors');

for (let i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = colors[i];
    color[i].style.display = 'block';
}

let text
divColors.addEventListener('click', event => {
    const div = event.target;
    if (div.id !== 'divColors') {
        if (text) {
            mainText.style.color = div.style.backgroundColor;
        }
        else {
            mainText.style.backgroundColor = div.style.backgroundColor;
        }
    }
    divColors.style.display = 'none';
})

btnColorTxt.addEventListener('click', () => {
    divColors.style.display = 'flex';
    text = true;
})

btnBgdColor.addEventListener('click', () => {
    divColors.style.display = 'flex';
    text = false;
})

btnAdd.addEventListener('click', function () {
    firstPage.style.display = 'none'
    secondPage.style.display = 'block'
    list.style.display = 'none'
    table.style.display = 'none'
})

const radioTable = document.querySelector('.radioTable')
const radioList = document.querySelector('.radioList')
const tableList = document.forms.tableList
const table = document.forms.table
const btnCreateTable = document.querySelector('.createTable')
const list = document.forms.list
const createList = document.querySelector('.createList')


radioTable.addEventListener('click', function () {
    table.style.display = 'flex'
    list.style.display = 'none'
})

radioList.addEventListener('click', function () {
    console.log(radioList.checked)
    list.style.display = 'block'
    table.style.display = 'none'
})


btnCreateTable.addEventListener('click', function () {
    let countTR = table.elements.countTR
    let countTD = table.elements.countTD
    let tdWidth = table.elements.tdWidth
    let tdHeight = table.elements.tdHeight
    let borderWidht = table.elements.borderWidht
    let borderType = table.elements.borderType
    let borderColor = table.elements.borderColor

    let divText = '';
    for (let i = 0; i < countTR.value; i++) {
        divText += '<tr>\n';
        for (let j = 0; j < countTD.value; j++) {
            divText += `<td style="width: ${tdWidth.value}px; height: ${tdHeight.value}px; border: ${borderWidht.value}px ${borderType.value} ${borderColor.value}">TD</td>\n`;
        }
        divText += '</tr>\n';

    }

    mainText.innerHTML += `<table>${divText}</table>`

    firstPage.style.display = 'flex'
    secondPage.style.display = 'none'
    sectionEdit.style.display = 'none'
    countTR.value = '';
    countTD.value = '';
    tdWidth.value = '';
    tdHeight.value = '';
    borderWidht.value = '';
    borderType.value = 'solid';
    borderColor.value = 'black';
    radioTable.checked = false;
});


createList.addEventListener('click', function () {
    let countLi = list.elements.countLi
    let typeMarks = list.elements.typeMarks

    let li = '';
    for (let i = 0; i < countLi.value; i++) {
        li += `<li type="${typeMarks.value}">Item</li>\n`;
    }

    mainText.innerHTML += `<ul>\n${li}</ul>`

    firstPage.style.display = 'flex';
    secondPage.style.display = 'none';
    sectionEdit.style.display = 'none';
    countLi.value = ''
    typeMarks.value = 'circle'
    radioList.checked = false

});
