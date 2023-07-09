/*
    Crea due tag div con due id diversi. 
    Un div avrà il testo colorato di rosso mentre l’altro di verde. 
    Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari 
    e in verde i numeri pari.
*/

const numeri = [23, 34, 55, 10, 21, 12, 11, 6, 7, 90, 203];

const divRosso = document.createElement('div');
divRosso.id = 'rosso';
divRosso.style.color = 'red';

const divVerde = document.createElement('div');
divVerde.id = 'verde';
divVerde.style.color = 'green';

for (let i = 0; i < numeri.length; i++) {
    const span = document.createElement('span');
    span.textContent = numeri[i];

    if (numeri[i] % 2 === 0) {
        divVerde.appendChild(span);
    } else {
        divRosso.appendChild(span);
    }
}

document.body.appendChild(divRosso);
document.body.appendChild(divVerde);