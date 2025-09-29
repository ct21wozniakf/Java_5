const ukryj = document.getElementById('ukryj')
const pokaz = document.getElementById('pokaz')
const ukr = document.getElementById('lorem')

pokaz.addEventListener('change', function() {
    ukr.style.display = 'block'
})

ukryj.addEventListener('change', function() {
    ukr.style.display = 'none'
})