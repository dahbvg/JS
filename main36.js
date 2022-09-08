let en1 = Math.floor(Math.random() * 21)
let en2 = Math.floor(Math.random() * 21)

console.log(en1)
console.log(en2)

function twenty(n1, n2) {
    if ((n1 == 20) || (n2 == 20) || (n1 + n2 <= 20)) {
        console.log('true');
    } else {
        console.log('false');
    }

}

twenty(en1, en2)