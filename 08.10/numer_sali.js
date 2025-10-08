const koch = document.getElementById('kociap')

koch.addEventListener('click', function(){

    let sala = prompt("Wpisz numer sali:")
    if (sala){
        alert("Jestes w " + sala)
    }
    else{
        alert("Anulowałeś akcję, a okna prompt zwróciło " + sala)
    }
})