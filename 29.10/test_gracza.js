let k1 = document.getElementById("kl1")
let p1 = document.getElementById("pod1")
let o1 = document.getElementById("odp1")
let i1 = document.getElementById("odpo1")

let klikniecia1 = 0
let xd1 = p1.textContent

k1.addEventListener('click', function(){
 klikniecia1++
 console.log(klikniecia1)

 
if(klikniecia1 === 1){
    p1.style.display = "inline-block"  
    k1.innerHTML = "&#9612;"
    let g1 = xd1.replace(/./g, '*')
    p1.textContent = g1 + " (" +xd1.length + ")"
}

if(klikniecia1 === 2){
    p1.style.display = "inline-block"  
    k1.innerHTML = "&#9613;"
    let litera1 = xd1.slice(0,1)
    let g1 = xd1.slice(1).replace(/./g, '*')
    p1.textContent = litera1+g1 + " (" +xd1.length + ")"
}
if(klikniecia1 === 3){
    p1.style.display = "inline-block" 
    k1.innerHTML = "&#9614;"
    let litera1 = xd1.slice(0,1)  
    let olitera1 = xd1.slice(-1)
    let g1 = xd1.slice(1, -1).replace(/./g, '*')
    p1.textContent = litera1+g1+olitera1+ " (" +xd1.length + ")"
}
if(klikniecia1 === 4){
    p1.style.display = "none" 
    k1.style.display = "none" 
    i1.style.display = "none" 
    o1.style.display = "inline-block" 
}
})

i1.addEventListener('click', function(){
  
    let okno1 = prompt("Podaj odpowiedź")
    if (okno1===o1.textContent){
        alert("poprawna odpowiedź !")
    p1.style.display = "none" 
    k1.style.display = "none" 
    i1.style.display = "none" 
    o1.style.display = "inline-block"
    }else{ }

}
)






let k2 = document.getElementById("kl2")
let p2 = document.getElementById("pod2")
let o2 = document.getElementById("odp2")
let i2 = document.getElementById("odpo2")

let klikniecia2 = 0
let xd2 = p2.textContent

k2.addEventListener('click', function(){
 klikniecia2++
 console.log(klikniecia2)

if(klikniecia2 === 1){
    p2.style.display = "inline-block"  
    k2.innerHTML = "&#9612;"
    let g2 = xd2.replace(/./g, '*')
    p2.textContent = g2 + " (" +xd2.length + ")"
}

if(klikniecia2 === 2){
    p2.style.display = "inline-block"  
    k2.innerHTML = "&#9613;"
    let litera2 = xd2.slice(0,1)
    let g2 = xd2.slice(1).replace(/./g, '*')
    p2.textContent = litera2+g2 + " (" +xd2.length + ")"
}
if(klikniecia2 === 3){
    p2.style.display = "inline-block" 
    k2.innerHTML = "&#9614;"
    let litera2 = xd2.slice(0,1)  
    let olitera2 = xd2.slice(-1)
    let g2 = xd2.slice(1, -1).replace(/./g, '*')
    p2.textContent = litera2+g2+olitera2+ " (" +xd2.length + ")"
}
if(klikniecia2 === 4){
    p2.style.display = "none" 
    k2.style.display = "none" 
    i2.style.display = "none" 
    o2.style.display = "inline-block" 
}
})

i2.addEventListener('click', function(){
  
    let okno2 = prompt("Podaj odpowiedź")
    if (okno2===o2.textContent){
        alert("poprawna odpowiedź !")
    p2.style.display = "none" 
    k2.style.display = "none" 
    i2.style.display = "none" 
    o2.style.display = "inline-block"
    }

}
)



let k3 = document.getElementById("kl3")
let p3 = document.getElementById("pod3")
let o3 = document.getElementById("odp3")
let i3 = document.getElementById("odpo3")

let klikniecia3 = 0
let xd3 = p3.textContent

k3.addEventListener('click', function(){
 klikniecia3++
 console.log(klikniecia3)

if(klikniecia3 === 1){
    p3.style.display = "inline-block"  
    k3.innerHTML = "&#9612;"
    let g3 = xd3.replace(/./g, '*')
    p3.textContent = g3 + " (" +xd3.length + ")"
}

if(klikniecia3 === 2){
    p3.style.display = "inline-block"  
    k3.innerHTML = "&#9613;"
    let litera3 = xd3.slice(0,1)
    let g3 = xd3.slice(1).replace(/./g, '*')
    p3.textContent = litera3+g3 + " (" +xd3.length + ")"
}
if(klikniecia3 === 3){
    p3.style.display = "inline-block" 
    k3.innerHTML = "&#9614;"
    let litera3 = xd3.slice(0,1)  
    let olitera3 = xd3.slice(-1)
    let g3 = xd3.slice(1, -1).replace(/./g, '*')
    p3.textContent = litera3+g3+olitera3+ " (" +xd3.length + ")"
}
if(klikniecia3 === 4){
    p3.style.display = "none" 
    k3.style.display = "none" 
    i3.style.display = "none" 
    o3.style.display = "inline-block" 
}
})

i3.addEventListener('click', function(){
  
    let okno3 = prompt("Podaj odpowiedź")
    if (okno3===o3.textContent){
        alert("poprawna odpowiedź !")
    p3.style.display = "none" 
    k3.style.display = "none" 
    i3.style.display = "none" 
    o3.style.display = "inline-block"
    }

}
)










let k4 = document.getElementById("kl4")
let p4 = document.getElementById("pod4")
let o4 = document.getElementById("odp4")
let i4 = document.getElementById("odpo4")

let klikniecia4 = 0
let xd4 = p4.textContent

k4.addEventListener('click', function(){
 klikniecia4++
 console.log(klikniecia4)

if(klikniecia4 === 1){
    p4.style.display = "inline-block"  
    k4.innerHTML = "&#9612;"
    let g4 = xd4.replace(/./g, '*')
    p4.textContent = g4 + " (" +xd4.length + ")"
}

if(klikniecia4 === 2){
    p4.style.display = "inline-block"  
    k4.innerHTML = "&#9613;"
    let litera4 = xd4.slice(0,1)
    let g4 = xd4.slice(1).replace(/./g, '*')
    p4.textContent = litera4+g4 + " (" +xd4.length + ")"
}
if(klikniecia4 === 3){
    p4.style.display = "inline-block" 
    k4.innerHTML = "&#9614;"
    let litera4 = xd4.slice(0,1)  
    let olitera4 = xd4.slice(-1)
    let g4 = xd4.slice(1, -1).replace(/./g, '*')
    p4.textContent = litera4+g4+olitera4+ " (" +xd4.length + ")"
}
if(klikniecia4 === 4){
    p4.style.display = "none" 
    k4.style.display = "none" 
    i4.style.display = "none" 
    o4.style.display = "inline-block" 
}
})

i4.addEventListener('click', function(){
  
    let okno4 = prompt("Podaj odpowiedź")
    if (okno4===o4.textContent){
        alert("poprawna odpowiedź !")
    p4.style.display = "none" 
    k4.style.display = "none" 
    i4.style.display = "none" 
    o4.style.display = "inline-block"
    }

}
)




let k5 = document.getElementById("kl5")
let p5 = document.getElementById("pod5")
let o5 = document.getElementById("odp5")
let i5 = document.getElementById("odpo5")

let klikniecia5 = 0
let xd5 = p5.textContent

k5.addEventListener('click', function(){
 klikniecia5++
 console.log(klikniecia5)

if(klikniecia5 === 1){
    p5.style.display = "inline-block"  
    k5.innerHTML = "&#9612;"
    let g5 = xd5.replace(/./g, '*')
    p5.textContent = g5 + " (" +xd5.length + ")"
}

if(klikniecia5 === 2){
    p5.style.display = "inline-block"  
    k5.innerHTML = "&#9613;"
    let litera5 = xd5.slice(0,1)
    let g5 = xd5.slice(1).replace(/./g, '*')
    p5.textContent = litera5+g5 + " (" +xd5.length + ")"
}
if(klikniecia5 === 3){
    p5.style.display = "inline-block" 
    k5.innerHTML = "&#9614;"
    let litera5 = xd5.slice(0,1)  
    let olitera5 = xd5.slice(-1)
    let g5 = xd5.slice(1, -1).replace(/./g, '*')
    p5.textContent = litera5+g5+olitera5+ " (" +xd5.length + ")"
}
if(klikniecia5 === 4){
    p5.style.display = "none" 
    k5.style.display = "none" 
    i5.style.display = "none" 
    o5.style.display = "inline-block" 
}
})

i5.addEventListener('click', function(){
  
    let okno5 = prompt("Podaj odpowiedź")
    if (okno5===o5.textContent){
        alert("poprawna odpowiedź !")
    p5.style.display = "none" 
    k5.style.display = "none" 
    i5.style.display = "none" 
    o5.style.display = "inline-block"
    }

}
)


let k6 = document.getElementById("kl6")
let p6 = document.getElementById("pod6")
let o6 = document.getElementById("odp6")
let i6 = document.getElementById("odpo6")

let klikniecia6 = 0
let xd6 = p6.textContent

k6.addEventListener('click', function(){
 klikniecia6++
 console.log(klikniecia6)

if(klikniecia6 === 1){
    p6.style.display = "inline-block"  
    k6.innerHTML = "&#9612;"
    let g6 = xd6.replace(/./g, '*')
    p6.textContent = g6 + " (" +xd6.length + ")"
}

if(klikniecia6 === 2){
    p6.style.display = "inline-block"  
    k6.innerHTML = "&#9613;"
    let litera6 = xd6.slice(0,1)
    let g6 = xd6.slice(1).replace(/./g, '*')
    p6.textContent = litera6+g6 + " (" +xd6.length + ")"
}
if(klikniecia6 === 3){
    p6.style.display = "inline-block" 
    k6.innerHTML = "&#9614;"
    let litera6 = xd6.slice(0,1)  
    let olitera6 = xd6.slice(-1)
    let g6 = xd6.slice(1, -1).replace(/./g, '*')
    p6.textContent = litera6+g6+olitera6+ " (" +xd6.length + ")"
}
if(klikniecia6 === 4){
    p6.style.display = "none" 
    k6.style.display = "none" 
    i6.style.display = "none" 
    o6.style.display = "inline-block" 
}
})

i6.addEventListener('click', function(){
  
    let okno6 = prompt("Podaj odpowiedź")
    if (okno6===o6.textContent){
        alert("poprawna odpowiedź !")
    p6.style.display = "none" 
    k6.style.display = "none" 
    i6.style.display = "none" 
    o6.style.display = "inline-block"
    }

}
)

let k7 = document.getElementById("kl7")
let p7 = document.getElementById("pod7")
let o7 = document.getElementById("odp7")
let i7 = document.getElementById("odpo7")

let klikniecia7 = 0
let xd7 = p7.textContent

k7.addEventListener('click', function(){
 klikniecia7++
 console.log(klikniecia7)

if(klikniecia7 === 1){
    p7.style.display = "inline-block"  
    k7.innerHTML = "&#9612;"
    let g7 = xd7.replace(/./g, '*')
    p7.textContent = g7 + " (" +xd7.length + ")"
}

if(klikniecia7 === 2){
    p7.style.display = "inline-block"  
    k7.innerHTML = "&#9613;"
    let litera7 = xd7.slice(0,1)
    let g7 = xd7.slice(1).replace(/./g, '*')
    p7.textContent = litera7+g7 + " (" +xd7.length + ")"
}
if(klikniecia7 === 3){
    p7.style.display = "inline-block" 
    k7.innerHTML = "&#9614;"
    let litera7 = xd7.slice(0,1)  
    let olitera7 = xd7.slice(-1)
    let g7 = xd7.slice(1, -1).replace(/./g, '*')
    p7.textContent = litera7+g7+olitera7+ " (" +xd7.length + ")"
}
if(klikniecia7 === 4){
    p7.style.display = "none" 
    k7.style.display = "none" 
    i7.style.display = "none" 
    o7.style.display = "inline-block" 
}
})

i7.addEventListener('click', function(){
  
    let okno7 = prompt("Podaj odpowiedź")
    if (okno7===o7.textContent){
        alert("poprawna odpowiedź !")
    p7.style.display = "none" 
    k7.style.display = "none" 
    i7.style.display = "none" 
    o7.style.display = "inline-block"
    }

}
)



let k8 = document.getElementById("kl8")
let p8 = document.getElementById("pod8")
let o8 = document.getElementById("odp8")
let i8 = document.getElementById("odpo8")

let klikniecia8 = 0
let xd8 = p8.textContent

k8.addEventListener('click', function(){
 klikniecia8++
 console.log(klikniecia8)

if(klikniecia8 === 1){
    p8.style.display = "inline-block"  
    k8.innerHTML = "&#9612;"
    let g8 = xd8.replace(/./g, '*')
    p8.textContent = g8 + " (" +xd8.length + ")"
}

if(klikniecia8 === 2){
    p8.style.display = "inline-block"  
    k8.innerHTML = "&#9613;"
    let litera8 = xd8.slice(0,1)
    let g8 = xd8.slice(1).replace(/./g, '*')
    p8.textContent = litera8+g8 + " (" +xd8.length + ")"
}
if(klikniecia8 === 3){
    p8.style.display = "inline-block" 
    k8.innerHTML = "&#9614;"
    let litera8 = xd8.slice(0,1)  
    let olitera8 = xd8.slice(-1)
    let g8 = xd8.slice(1, -1).replace(/./g, '*')
    p8.textContent = litera8+g8+olitera8+ " (" +xd8.length + ")"
}
if(klikniecia8 === 4){
    p8.style.display = "none" 
    k8.style.display = "none" 
    i8.style.display = "none" 
    o8.style.display = "inline-block" 
}
})

i8.addEventListener('click', function(){
  
    let okno8 = prompt("Podaj odpowiedź")
    if (okno8===o8.textContent){
        alert("poprawna odpowiedź !")
    p8.style.display = "none" 
    k8.style.display = "none" 
    i8.style.display = "none" 
    o8.style.display = "inline-block"
    }

}
)

