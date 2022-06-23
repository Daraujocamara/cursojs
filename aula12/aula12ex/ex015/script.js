function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    //cria formulario ano, o ano que sera digitado
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //o length (quantidade de letras) verifica se a caixa de texto esta vazia
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]: Verifique os dados e tente novamente!')
    }else{
        //selecionar somente um sexo
    var fsex = document.getElementsByName('radsex')
        //calcular a idade ( ano atual - ano digitado)
    var idade = ano - Number(fano.value)
    var gênero = ""
    //inserindo a imagem dinamica no javaScript
    var img = document.createElement('img')
    //criando um id para o img
    img.setAttribute ('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        //classificando a idade
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'homembebe.png')
        } else if( idade < 21){
            //jovem
            img.setAttribute('src', 'homemjovem.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'homemadulto.png')
        }else{
            //idoso
            img.setAttribute('src', 'homemidoso.png')
        }
    } else if (fsex[1].checked){
        gênero = 'Mulher'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'mulherbebe.png')
        } else if( idade < 21){
            //jovem
            img.setAttribute('src', 'mulherjovem.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'mulheradulta.png')
        }else{
            //idoso
            img.setAttribute('src', 'mulheridosa.png')
        }
    }
        //centralizando texto no javaScript
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
        
    }
