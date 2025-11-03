let opa = document.getElementById("xd")
let xpp = document.getElementById("xdd")

let xdd = 0


for(x= 100; x<=999; x++){

    let sel = document.createElement('span')
    sel.textContent = x + ", "
    opa.appendChild(sel)
    let suma = x
    .toString()
    .split('')
    .reduce((a, b) => a + Number(b), 0)


    if (suma === 10) {
        sel.style.color = "red"
        sel.style.fontWeight = "bold"
        xdd++
        
    }
        
    if(x<999){
        sel.textContent = x + ", "
    }else{
        sel.textContent = x + ". "
    }
    xpp.textContent = "Liczb trzycyfrowych, których suma cyfr równa 10, jest: " + xdd
}

