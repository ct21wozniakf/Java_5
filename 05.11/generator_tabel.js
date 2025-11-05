let tab = document.getElementById("tabela")
let guzik = document.getElementById("psycisk")

let kolw = document.getElementById("mini")
let wiew = document.getElementById("maxi")

guzik.addEventListener('click', function(){

    if(kolw.value>500){
        kolw.value=500

    }else if(wiew.value>500){
        wiew.value=500    
        
    }else{

    tab.innerHTML = " "

    for (let w = 1; w <= wiew.value; w++) {
        let tr = document.createElement("tr");

        for (let k = 1; k <= kolw.value; k++) {
            let td = document.createElement("td");
            td.innerHTML = w + "/" + k;
            tr.appendChild(td);
        }

        tab.appendChild(tr);
    }}

    
});