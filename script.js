function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        //Criando uma imagem dinamicamente
        var img = document.createElement('img')
        //Dando nome ao id da tag img criada
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bhomem.png')
            } else if  (idade < 21){
                //Jovem
                img.setAttribute('src', 'jhomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'ahomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'ihomem.png')
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bmulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jmulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'amulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imulher.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}