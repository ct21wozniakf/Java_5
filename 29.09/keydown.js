document.addEventListener("keydown", function (event) {
    document.getElementById('elo').innerText = event.key
    console.log("Przycisk: ", event.key, event.code)
})