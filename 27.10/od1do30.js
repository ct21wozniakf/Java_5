let p1 = document.getElementById('a1')
let p2 = document.getElementById('a2')
let p3 = document.getElementById('a3')
let p4 = document.getElementById('a4')
let guzik = document.getElementById('psycisk')

guzik.addEventListener('click', function() {
     let losowa = Math.floor(Math.random() * 30) + 1;

p1.innerText = "Wylosowana liczba to:" + losowa
p1.style.color = "darkorchid"

if(losowa>=20){
    p2.innerText = "Wylosowana liczba jest większa lub równa 20"
    p2.style.color = "magenta"
} else{p2.innerText = " "}

if(losowa%2==0){
    p3.innerText = "Wylosowona liczba jest liczbą parzystą"
    p3.style.color = "navy"
}else{
    p3.innerText = "Wylosowana liczba jest liczbą nieparzystą"
    p3.style.color = "navy"
}

if(10>=losowa){
    p4.innerText = "Pierwsza dziesiątka"
    p4.style.color = "deeppink"
}else if(losowa>20){
    p4.innerText = "Trzecia dziesiątka"
    p4.style.color = "deeppink"
}else{
    p4.innerText = "Druga dziesiątka"
    p4.style.color = "deeppink"
}
})