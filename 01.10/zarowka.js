const swieci = document.getElementById('zar')

const przycisk1 = document.getElementById('wl')
const przycisk2 = document.getElementById('wyl')

const radio1 = document.getElementById('wlacz')
const radio2 = document.getElementById('wylacz')

const checkbox = document.getElementById('check')
const zmienia = document.getElementById('tekst')

przycisk1.addEventListener('click', function() {
    swieci.src = "zar2.png"
    radio1.checked = true
    checkbox.checked = true
    zmienia.innerText = "Włączono"
})
przycisk2.addEventListener('click', function() {
    swieci.src = "zar1.png"
    radio2.checked = true
    checkbox.checked = false
    zmienia.innerText = "Wyłączono" 
})

radio1.addEventListener('click', function() {
    swieci.src = "zar2.png"
    zmienia.innerText = "Włączono"
    checkbox.checked = true
})

radio2.addEventListener('click', function() {
    swieci.src = "zar1.png"
    zmienia.innerText = "Wyłączono" 
    checkbox.checked = false
})

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        swieci.src = "zar2.png"
        radio1.checked = true
        zmienia.innerText = "Włączono"
    } else {
        swieci.src = "zar1.png"
        radio2.checked = true
        zmienia.innerText = "Wyłączono" 
    }
});