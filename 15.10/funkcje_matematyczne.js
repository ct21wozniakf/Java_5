let wpis = prompt("Podaj liczbe rzeczywistą:") 

if (isNaN(wpis)){
    alert("Źle wpisałeś " + wpis)
}


document.getElementById("l1").innerHTML = parseFloat(wpis)

document.getElementById("l2").innerHTML = parseFloat(wpis)
let abb = Math.abs(wpis)
document.getElementById('aw').innerHTML = abb

document.getElementById("l3").innerHTML = parseFloat(wpis)
let cee = Math.ceil(wpis)
document.getElementById('ce').innerHTML = cee

document.getElementById("l4").innerHTML = parseFloat(wpis)
let fll = Math.floor(wpis)
document.getElementById('fl').innerHTML = fll

document.getElementById("l5").innerHTML = parseFloat(wpis)
let maa = Math.max(wpis)
document.getElementById('ma').innerHTML = maa

document.getElementById("l6").innerHTML = parseFloat(wpis)
let mii = Math.min(wpis)
document.getElementById('mi').innerHTML = mii

document.getElementById("l7").innerHTML = parseFloat(wpis)
let poo = Math.pow(wpis,2)
document.getElementById('po').innerHTML = poo

document.getElementById("l8").innerHTML = parseFloat(wpis)
let roo = Math.round(wpis)
document.getElementById('ro').innerHTML = roo

document.getElementById("l9").innerHTML = parseFloat(wpis)
let sqq = Math.sqrt(wpis)
document.getElementById('sq').innerHTML = sqq






    

