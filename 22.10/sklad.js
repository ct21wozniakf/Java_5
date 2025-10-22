let xd = document.getElementById("tekst")

let mjj = document.getElementById("mj")
let mdd = document.getElementById("md")
let mtt = document.getElementById("mt")
let mcc = document.getElementById("mc")
let mpp = document.getElementById("mp")

let pj = document.getElementById("je")
let pd = document.getElementById("dwa")
let pt = document.getElementById("trz")
let pc = document.getElementById("czt")
let pp = document.getElementById("pit")










pj.addEventListener('click', function () {
    if (xd.textContent.includes("Richie Blackmore, ")) {
    }
    else{
        xd.textContent = xd.textContent.concat("Richie Blackmore, ");
    }
});

pd.addEventListener('click', function () {
    if (xd.textContent.includes("Jon Lord, ")) {
    }
    else{
        xd.textContent = xd.textContent.concat("Jon Lord, ");
    }
});

pt.addEventListener('click', function () {
    if (xd.textContent.includes("Nick Simper, ")) {
    }
    else{
        xd.textContent = xd.textContent.concat("Nick Simper, ");
    }
});

pc.addEventListener('click', function () {
    if (xd.textContent.includes("Ian Paice, ")) {
    }
    else{
        xd.textContent = xd.textContent.concat("Ian Paice, ");
    }
});

pp.addEventListener('click', function () {
    if (xd.textContent.includes("Rod Evans.")) {
    }
    else{
        xd.textContent = xd.textContent.concat("Rod Evans. ");
    }
});