// tady je místo pro náš program

/**console.log('Jsem nalinkovaný')

let nadpis = document.querySelector('h1');

nadpis.classList.add('none');
nadpis.classList.remove('cosi');
nadpis.classList.toggle('něco') - přepínátko = když to tam je, tak se to vypne, když to tam není, zapne se to**/

let text = document.querySelector('#text')

function ztloustni() {
    text.classList.add('bold');
}

function zhubni() {
    text.classList.remove('bold');
}

function zcervenej() {
    text.classList.toggle('cerveny');
}

function zvetsiSe() {
    style = window.getComputedStyle(text, 0).getPropertyValue('font-size');
    velikost = parseFloat(style);
    text.style.fontSize = (velikost + 1) + 'px';
}

/** Písnička */

let nahravka = document.getElementById('zvukovaStopa');

function hudboHrej() {
    nahravka.play();
}

function hudboDost() {
    nahravka.pause();
}

function hudboZnovu() {
    nahravka.currentTime = 0;
    nahravka.play();
}

function hudboTicho() {
    nahravka.volume = 0;
    nahravka.play();
}

function hudboNapul() {
    nahravka.volume = 0.5;
    nahravka.play();
}

function hudboNahlas() {
    nahravka.volume = 1;
    nahravka.play();
}


