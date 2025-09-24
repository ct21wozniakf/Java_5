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

const pro = document.querySelector("section.main_column h1")
console.log({pro})
pro.innerText = "Specjalność szefa: "

let kiebab = document.querySelector(".main_column")
let paragraf = document.createElement('p')
paragraf.textContent = "Kebab na frytkach _-_"
kiebab.appendChild(paragraf);

let stopa = document.querySelector("footer")
let dywizjion = document.createElement('div')
dywizjion.style.backgroundColor = "pink"
stopa.appendChild(dywizjion)
let paragi = document.createElement('p')
paragi.textContent = "&copy"
paragi.style.textAlign = "center"
dywizjion.appendChild(paragi)

let kolum = document.getElementById("kolum")
if (kolum) {
  kolum.remove();
}

let jeden = document.createElement('p')
jeden.innerHTML = "<i>Pochylony tekst</i>"
let dwa = document.createElement('p')
dwa.innerText = "<i>Pochylony tekst</i>"
let glowa = document.querySelector("header")
glowa.appendChild(jeden)
glowa.appendChild(dwa)

let sekcja = document.createElement('section')
sekcja.style.border = "2px dotted blue"
sekcja.style.padding = "10px 20px 10px 20px"
sekcja.style.width = "100%"
sekcja.innerHTML = "Zderzak"
let glowny = document.querySelector("body")
glowny.appendChild(sekcja)