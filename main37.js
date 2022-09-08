let paragraf = document.querySelector('#text')
document.querySelector('#dodaj').onclick = function(){
    paragraf.textContent = 'random text'
}
document.querySelector('#usun').onclick = function(){
    paragraf.textContent = ''
}