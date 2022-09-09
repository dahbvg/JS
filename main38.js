let en1 = Math.floor(Math.random() * 21)
let en2 = Math.floor(Math.random() * 21)

console.log(en1)
console.log(en2)

function twenty(n1, n2) {

    console.log('Wynik dodawania wynosi ' + (n1 + n2));

    console.log('Wynik odejmowania wynosi ' + (n1 - n2));

    console.log('Wynik mnożenia wynosi ' + (n1 * n2));
}

twenty(en1, en2)