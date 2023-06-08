const sons = {
    'A':'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criaTexto = (texto) =>{

    const div = document.createElement('div')
    div.classList.add('letras')
    div.textContent = texto
    div.dataset.tipo = texto
    document.querySelector('[data-tipo="conteiner"]').appendChild(div)

}

const exibirsons = (x) => Object.keys(x).forEach(criaTexto)  

const tocarSom = (letra) =>{
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play()
}

const adicionarEfeito = (letra) => document.querySelector(`[data-tipo=${letra}]`).classList.add('active')

const removerEfeito = (letra) => { 
    const div = document.querySelector(`[data-tipo=${letra}]`)
    const removactive = () => div.classList.remove('active')
    div.addEventListener('transitionend', removactive)
}

const ativaDiv = (evento) =>{

   const letra = evento.type == 'click'? evento.target.dataset.tipo : evento.key.toUpperCase()
   
   const letraPermitida = sons.hasOwnProperty(letra)
   if(letraPermitida){
    adicionarEfeito(letra)  
    tocarSom(letra)
    removerEfeito(letra)
   }
   
}


exibirsons(sons)
document.querySelector('[data-tipo="conteiner"]').addEventListener('click', ativaDiv)

window.addEventListener('keydown', ativaDiv)
