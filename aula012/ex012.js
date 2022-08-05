var agora = new Date()
var hora = agora.get
var minuto = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${minuto} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora < 19) {
    console.log('Boa Tarde!')
} else if(hora < 23) {
    console.log('Boa Noite!')
} else if (hora < 5) {
    console.log('Ja é madrugada infeliz, vai dormi!!!')
}