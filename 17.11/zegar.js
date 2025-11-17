
let godzii = document.getElementById('godz')
let godzinawar = document.getElementById('godzn')
godzinawar.innerText = godzii.value

godzii.addEventListener('input', obliczKat)


let minii = document.getElementById('minu')
let minwar = document.getElementById('minun')
minwar.innerText = minii.value

minii.addEventListener('input', obliczKat)

function obliczKat() {





let godzinka = godzii.value

godzinawar.innerText = godzinka

let minutka = minii.value

minwar.innerText = minutka

let kont = document.getElementById('kontu')

kont.innerText = Math.abs(30*godzii.value - (5.5*minii.value))

}
obliczKat();