const colorOne = document.getElementById('color-1');
const colorTwo = document.getElementById('color-2');

function changeImg(url) {
    const img = document.getElementById('img');
    img.style.opacity = 0;
    setTimeout(function () {
        img.src = url;
        img.style.opacity = 1;
    }, 300);
}

colorOne.addEventListener('click', () => changeImg('assets/img/DiavelSred.png'));

colorTwo.addEventListener('click', () => changeImg('assets/img/DiavelS.png'));
