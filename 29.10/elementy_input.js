let xd = document.getElementById("formularz")

for(x = 1; x <101; x++){

    let sel = document.createElement('input')
    sel.id = "element"+x
    sel.style.margin = "10px"
    sel.style.boxShadow = "5px 5px 5px lightblue"
    sel.placeholder = "Element numer " + x
    xd.appendChild(sel)
        if(x%5==0){
        let sel = document.createElement('input')
        sel.id = "element"+x
        sel.style.margin = "10px"
        sel.style.boxShadow = "5px 5px 5px lightblue"
        sel.placeholder = "Element numer " + x
        xd.appendChild(sel)
        let ch = document.createElement('br')
        xd.appendChild(ch)
        }
}