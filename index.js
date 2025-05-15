//Seleccionando elementos del primer ejercicio: 
let incrementar = document.querySelector('.aumentar')
let decrementar = document.querySelector('.disminuir')
let resetear = document.querySelector('.cero')
let numero  = document.querySelector('h1')

//Seleccionando elementos del segundo ejercicio:
let body = document.querySelector('body')
let caja = document.querySelector('.container')

//Seleccionando elementos del tercer ejercicio:
let botones = document.querySelectorAll('.btn')

//Seleccionando elementos del cuarto ejercicios:
let cantidad = document.querySelector('.cantidad')
let convertir = document.querySelector('.convertir')
let cajaConversion = document.querySelector('.cajaConversion')
let resultado = document.querySelector('.resultado')
let monedaOrigen = document.querySelector('.selectOne')
let monedaCambio = document.querySelector('.selectTwo')

//Declarando variables del segundo ejercicio:
let digito = ''
let space = '  '
let igual = '='

//Declarando variables del cuarto ejercicio:
let mO = ''
let mC = ''
let cant = 0

//Función que se utiliza en el segundo ejercicio:
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

//Arrow function del tercer ejercicio:
botones.forEach(btn => {
    btn.addEventListener('click', (event) => {
        if(event.target.value == 'blue'){
            body.className = 'bg-primary'
        } else if(event.target.value == 'red'){
            body.className = 'bg-danger'
        } else if(event.target.value == 'green'){
            body.className = 'bg-success'
        } else if(event.target.value == 'yellow'){
            body.className = 'bg-warning'
        }
    })
})

//Creación de objetos para el cuarto ejercicio:
const tablaDollar = {
    value: 'USD',
    USD: 1,
    GTQ: 7.80,
    EUR: 0.92,
    MXN: 17.10,
    GBP: 0.79
}

const tablaQuetzal = {
    value: "GTQ",
    USD: 0.13,
    GTQ: 1,
    EUR: 0.12,
    MXN: 2.20,
    GBP: 0.10
}

const conversion = () => {
    if(mO == tablaQuetzal.value){
        resultado.value = cant*tablaQuetzal[mC]

    } else{
        resultado.value = cant*tablaDollar[mC]
    }

}

//Arrow function con event handler del primer ejercicio que recibe el parámetro event(representa el objeto del evento):
incrementar.addEventListener('click', () => {
    numero.innerText = parseInt(numero.innerText) +1;
    decrementar.disabled = false
})

decrementar.addEventListener('click', () => {
    
    if(numero.innerText == '1'){
        numero.innerText = parseInt(numero.innerText) -1;
        decrementar.disabled = true
        
    } else{
        numero.innerText = parseInt(numero.innerText) -1;
    }
})

resetear.addEventListener('click', () => {
    numero.innerText = 0;
    decrementar.disabled = true
})

//Arrow function con event handler del segundo ejercicio que recibe el parámetro event(representa el objeto del evento):
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

//Arrow function con event handler del cuarto ejercicio que recibe el parámetro event(representa el objeto del evento):
monedaOrigen.addEventListener('change', (event) =>{
    mO = event.target.value

})

monedaCambio.addEventListener('change', (event) =>{
    mC = event.target.value
    
})

cantidad.addEventListener('keyup', (event) => {
    cant = event.target.value
})

convertir.addEventListener('click', () =>{
    conversion()
})
