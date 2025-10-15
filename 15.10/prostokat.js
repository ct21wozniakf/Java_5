let guzik = document.getElementById('przy')

let szero = document.getElementById('wid')
let wyso = document.getElementById('wys')
let koloo = document.getElementById('kolo')

let prost = document.getElementById('prosto')
let obwod = document.getElementById('par1')
let pole = document.getElementById('par2')

guzik.addEventListener('click', function() {

    let szerow = szero.value
    let wysow = wyso.value
    let koloow = koloo.value

    if(szerow<=20 && wysow<=20){

    prost.style.backgroundColor = koloow
    prost.style.width = szerow + "cm"
    prost.style.height = wysow + "cm"

    let obwod = szerow*2+wysow*2
    let pole = szerow * wysow


    par1.innerHTML = "Obwód prostokąta jest równy " + obwod + " cm"
    par2.innerHTML = "Pole prostokąta jest równe " + pole + " cm²"
    }
    else{


    }
   
 })

  