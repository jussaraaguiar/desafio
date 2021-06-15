const imagem1 = document.getElementById('imagem1');
const nomeDoPersonagem1 = document.getElementById('nomeDoPersonagem1');

const imagem2 = document.getElementById('imagem2');
const nomeDoPersonagem2 = document.getElementById('nomeDoPersonagem2');

const imagem3 = document.getElementById('imagem3');
const nomeDoPersonagem3 = document.getElementById('nomeDoPersonagem3');

const imagem4 = document.getElementById('imagem4');
const nomeDoPersonagem4 = document.getElementById('nomeDoPersonagem4');

this.onload = function(){
    capturarPersonagem(imagem1, nomeDoPersonagem1);
    capturarPersonagem(imagem2, nomeDoPersonagem2);
    capturarPersonagem(imagem3, nomeDoPersonagem3);
    capturarPersonagem(imagem4, nomeDoPersonagem4);
};

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

capturarPersonagem = (imagem,nome) => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET', 
        headers: {Accept: 'application/json',
        "Content-type": 'application/json'
    }
}).then((response) => response.json()).then((data) => {
    imagem.src = data.image;
    imagem.alt = data.name;
    nome.innerHTML = data.name;
    });
}







