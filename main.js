// tady je místo pro náš program

console.log('Jsem nalinkovaný')

let nadpis = document.querySelector('h1');

nadpis.classList.add('none');
nadpis.classList.remove('cosi');
/**nadpis.classList.toggle('něco') - přepínátko = když to tam je, tak se to vypne, když to tam není, zapne se to**/

function ztloustni() {
    let text = document.querySelector('p');
    text.style.fontWeight = 'bold';
}

function zcervenej() {
    let text = document.querySelector('p');
    text.classList.toggle('cerveny');
}


