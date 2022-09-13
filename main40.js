
document.querySelector('button').onclick = function () {

    let p1 = document.querySelector('#name');
    p1.textContent = fname.value;
    console.log(fname.value)
    let p2 = document.querySelector('#surname');
    p2.textContent = fsurname.value;
    console.log(fsurname.value)
    let p3 = document.querySelector('#phone');
    p3.textContent = fphone.value;
    console.log(fphone.value)
}