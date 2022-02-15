// tady je místo pro náš program

console.log('Jsem nalinkovaný')

/**let nadpis = document.querySelector('h1');

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


