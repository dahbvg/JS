let en1 = Math.floor(Math.random() * 21)
let en2 = Math.floor(Math.random() * 21)

console.log(en1)
console.log(en2)

function twenty(n1, n2) {

    if ((n1 + n2 > 0) && (n1 - n2 > 0) && (n1 * n2)) {

        console.log('Wynik dodawania wynosi ' + (n1 + n2));

        console.log('Wynik odejmowania wynosi ' + (n1 - n2));

        console.log('Wynik mnożenia wynosi ' + (n1 * n2));
    } else {
        console.log('Wynik jest nieprawidłowy');
    }
}
twenty(en1, en2)


function twentyvol1(n1, n2) {

    if (n1 + n2 > 0) {
        console.log('Wynik dodawania wynosi ' + (n1 + n2));
    }
    
    if (n1 - n2 > 0) {
        console.log('Wynik odejmowania wynosi ' + (n1 - n2));
    } else if (n1 - n2 < 0) {
        console.log('Wynik jest nieprawidłowy');
    }

    if (n1 * n2 > 0) {
        console.log('Wynik mnożenia wynosi ' + (n1 * n2));
    }
}
twentyvol1(en1, en2)