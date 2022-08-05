
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        img.src = 'imagens/amanhace.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        img.src = 'imagens/atadecer.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagens/anoitecer.jpg'
        document.body.style.background = '#515154'
    }
}