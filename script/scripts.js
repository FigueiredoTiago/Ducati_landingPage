const btn = document.getElementById('btn');

function changeModel() {
    const img = document.getElementById('img');

    if (img.src.endsWith("XDiavel.png")) {
        img.src = "../assets/img/DiavelS.png";
    } else {
        img.src = "../assets/img/XDiavel.png";
    }


}


btn.addEventListener('click', () => changeModel());