function mesaj() {
    alert("Yazılım yolculuğum başladı");
    let sayac = 0;
}
function mesaj() {
    alert("Merhaba! 🚀");
}
function mesajyenisekme() {
    window.open("merhaba.html", "_blank");
}

function renkDegistir() {
    const rastgeleRenk = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = rastgeleRenk;
}

let yaziGorunur = false;   // state

function yaziToggle() {
    const yaziEl = document.getElementById("yazi");

    if (yaziGorunur) {
        yaziEl.innerText = "";
        yaziGorunur = false;
    } else {
        yaziEl.innerText = "Yazılım öğreniyorum 😎";
        yaziGorunur = true;
    }
}
let sayac = 0;
function sayacArtir() {
    sayac = sayac + 1;
    document.getElementById("sayac").innerText = sayac;
}

function sayacSifirla() {
    sayac = 0;
    document.getElementById("sayac").innerText = 0;
}

