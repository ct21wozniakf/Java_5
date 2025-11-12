let obrazki = document.querySelectorAll('img')
obrazki.forEach(img => {
    img.addEventListener('dragstart', dragStart)
})

let tede = document.querySelectorAll('td')
tede.forEach(td => {
    td.addEventListener('dragover', dragOver)
    td.addEventListener('drop', drop)
});

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id)
}

function dragOver(e) {
    e.preventDefault()
}

function drop(e) {
    e.preventDefault()
    let id = e.dataTransfer.getData('text')
    let przenoszony = document.getElementById(id)

    if(e.target.tagName === 'TD') {
        if(e.target.children.length > 0) {
        }
        e.target.appendChild(przenoszony)
    }
}