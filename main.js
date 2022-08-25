function tocaSom (elementoAudio){
    let elemento = document.querySelector(elementoAudio);

    if (/*elemento != null -> essa seria uma forma de fazer o se nulo*/elemento && elemento.localName === 'audio'){
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado');
    }
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

for (i=0; i<=listaDeTeclas.length; i++){
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom (idAudio);
    };


    tecla.onkeydown = function (evento){

        let teclaTeclado = evento.code

        if(teclaTeclado === 'Enter' || teclaTeclado === 'Space'){
            tecla.classList.add('ativa');
        // tecla.classList.remove('ativa'); esse foi o jeito que eu fiz sozinho 
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}