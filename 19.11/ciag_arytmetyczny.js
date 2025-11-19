
let guzik = document.getElementById('psycisk')
let poj = document.getElementById('pojemnik')

guzik.addEventListener('click', function(){

    let pierwszy = document.getElementById('pwyraz')
    let drugi = document.getElementById('dwyraz')
    let n = document.getElementById('ilewyraz')

    let r = drugi.value - pierwszy.value

    let lista = document.createElement('ul')
    poj.appendChild(lista)

    let x = (n.value-1)*r.value+pierwszy.value
    console.log(x)

    if(n.value>=1){
        let jeden = document.createElement('li')
        jeden.textContent = pierwszy.value
        lista.appendChild(jeden)}else{
            poj.innerHTML = " "
        }
    if(n.value>=2){
        let dwa = document.createElement('li')
        dwa.textContent = drugi.value
        lista.appendChild(dwa)}else{

        }
    



})