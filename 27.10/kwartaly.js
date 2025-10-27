let t1 = document.getElementById('a1')
let t2 = document.getElementById('a2')

let losowa = Math.floor(Math.random() * 15) + 1;

t1.innerText = losowa

switch(losowa){
    case 1:
    case 2:
    case 3:
        t2.innerText = "I kwartał"
        break
    case 4:
    case 5:
    case 6:
        t2.innerText = "II kwartał"
        break
    case 7:
    case 8:
    case 9:
        t2.innerText = "III kwartał"
        break
    case 10:
    case 11:
    case 12:
        t2.innerText = "IV kwartał"
        break
    default:
        t2.innerText = "Błędny numer miesiąca"
}
