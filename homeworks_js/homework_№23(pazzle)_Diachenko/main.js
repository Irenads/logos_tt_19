const imagesBG = ['url(images/image_part_001.jpg)', 'url(images/image_part_002.jpg)', 'url(images/image_part_003.jpg)', 'url(images/image_part_004.jpg', 'url(images/image_part_005.jpg)', 'url(images/image_part_006.jpg)', 'url(images/image_part_007.jpg)', 'url(images/image_part_008.jpg)', 'url(images/image_part_009.jpg)', 'url(images/image_part_010.jpg)', 'url(images/image_part_011.jpg)', 'url(images/image_part_012.jpg)', 'url(images/image_part_013.jpg)', 'url(images/image_part_014.jpg)', 'url(images/image_part_015.jpg)', 'url(images/image_part_016.jpg)'];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
shuffle(imagesBG);

let divImage = document.getElementsByClassName('image')
for (let i = 0; i < divImage.length; i++) {
    divImage[i].style.backgroundImage = imagesBG[i];
}

$('.image').draggable({
    grid: [100, 100],
    start: function () {
        $(this).css('z-index', '1')
    },
    stop: function () {
        $(this).css('z-index', '1')
    }
})

$('.conteinerTwo').droppable({
    accept: '.image',
});