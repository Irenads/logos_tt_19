let form = document.forms.one
let first = form.elements.first
let move = form.elements.move
let second = form.elements.second
let place = form.elements.place



move.addEventListener('click', function () {
    second.value = first.value;
    first.value = '';
})

place.addEventListener('blur', function () {
    place.placeholder = place.value;
    place.value = '';
})
