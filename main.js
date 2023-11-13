function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();   
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;
//Estrutura de repetição - Enquanto
while(contador<9){
    listaDeTeclas[0].onclick = tocaSom;
    contador = contador + 1;
}

