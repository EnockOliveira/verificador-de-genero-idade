function verificar() {
var date = new Date()
var ano = date.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')

if (fano.value.length == 0 || fano.value > ano ) {
    alert('[ERRO] verifique os dados e tente novamente!')
}
else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - (fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if(idade<10){
            img.setAttribute('src','kidm.png')
        }else if(idade<21){
            img.setAttribute('src','teenm.png')
        }else if(idade<60){
            img.setAttribute('src','adultm.png')
        }else {
            img.setAttribute('src','oldm.png')
        }
    }   else if (fsex[1].checked) {
        genero = 'Mulher'
        if(idade<10){
            img.setAttribute('src','kidf.png')
        }else if(idade<21){
            img.setAttribute('src','teenf.png')
        }else if(idade<60){
            img.setAttribute('src','adultf.png')
        }else{
            img.setAttribute('src','oldf.png')
        }            
   
}
res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
res.style.textAlign = 'center'
res.appendChild(img)
}
}
