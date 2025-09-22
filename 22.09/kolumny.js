document.querySelector("header").style.backgroundColor = "yellow"
const ha = document.querySelector("header h1")
console.log({ha})
ha.style.fontFamily = "Arial Black"
ha.innerText = "Preambuła"
const pow = document.getElementsByTagName("section")
console.log({pow})
for (const el of pow){
    el.style.border = "2px solid brown"
}
const pro = document.querySelector("section h1 .main_column")
console.log({pro})
pro.innerText = "Specjalność szefa:"