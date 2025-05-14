let incrementar = document.querySelector('.aumentar')
let decrementar = document.querySelector('.disminuir')
let resetear = document.querySelector('.cero')
let numero  = document.querySelector('h1')
let body = document.querySelector('body')
let caja = document.querySelector('.container')
let botones = document.querySelectorAll('.btn')
console.log(botones)
// let btnBlue = document.querySelector('#blue')
// let btnGreen = document.querySelector('#green')
// let btnRed = document.querySelector('#red')
// let btnYellow = document.querySelector('#yellow')

let total = ''
let tecla = ''
let digito = ''
let space = '  '
let igual = '='

const codigo = (n) =>{
    let cambio = document.createElement('span')
    cambio.classList.add('text-danger')
    digito = n
    if(digito.charCodeAt(0) >=48 && digito.charCodeAt(0) <= 57){
        cambio.append(digito)
        caja.append(cambio)
        caja.append(igual)
        caja.append(digito.charCodeAt(0))
        caja.append(space)
    }
}

const color = (value) =>{

}

incrementar.addEventListener('click', (event) => {
    total = parseInt(numero.innerText) +1;
    numero.innerText = total;
    decrementar.disabled = false
    console.log(total)
})

decrementar.addEventListener('click', (event) => {
    
    if(numero.innerText == '1'){
        total = parseInt(numero.innerText) -1;
        numero.innerText = total;
        decrementar.disabled = true
        
    } else{
        total = parseInt(numero.innerText) -1;
        numero.innerText = total
    }
    console.log(total)
    
})

resetear.addEventListener('click', () => {
    numero.innerText = 0;
    decrementar.disabled = true
})

body.addEventListener('keyup', (event) => {
    if(event.keyCode >=65 && event.keyCode <= 90){
        caja.append(event.key.toUpperCase())
        caja.append(igual)
        caja.append(event.keyCode)
        caja.append(space)
    } else{
        codigo(event.key)
    }
})

botones.addEventListener('click', (event) => {
    color(event.value)
})