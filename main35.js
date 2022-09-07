let n = Math.floor(Math.random()*1000)

console.log(n)

function test (x) {
    if (100<x && x<200) {
        console.log('Liczba znajduje się w przedziale')
    } else {
        console.log('Liczba nie znajduje się w przedziale')
    }
}

test (n)