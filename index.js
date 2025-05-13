let incrementar = document.querySelector('.aumentar')
let decrementar = document.querySelector('.disminuir')
let resetear = document.querySelector('.cero')
let numero  = document.querySelector('h1')
let body = document.querySelector('body')
let caja = document.querySelector('.container')

let total = ''
let tecla = ''
let digito = ''

let br = document.createElement('br')

const codigo = (n) =>{
    digito = n
    if(digito.charCodeAt(0) >=48 && digito.charCodeAt(0) <= 57){
        caja.append(digito)
        caja.append(br)
        caja.append(digito.charCodeAt(0))
        caja.append(br)
    }
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
        caja.append(br)
        caja.append(event.keyCode)
        caja.append(br)
    } else{
        codigo(event.key)
    }
})