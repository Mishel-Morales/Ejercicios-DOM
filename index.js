// let incrementar = document.querySelector('.aumentar')
// let decrementar = document.querySelector('.disminuir')
// let resetear = document.querySelector('.cero')
// let numero  = document.querySelector('h1')
// let body = document.querySelector('body')
// let caja = document.querySelector('.container')
// let botones = document.querySelectorAll('.btn')
let cantidad = document.querySelector('.cantidad')
let convertir = document.querySelector('.convertir')
let cajaConversion = document.querySelector('.cajaConversion')
let resultado = document.querySelector('.resultado')

let monedaOrigen = document.querySelector('.selectOne')
let monedaCambio = document.querySelector('.selectTwo')

// let total = ''
// let tecla = ''
// let digito = ''
// let space = '  '
// let igual = '='
let total = ''
let mO = ''
let mC = ''
let cant = 0



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

// const codigo = (n) =>{
//     let cambio = document.createElement('span')
//     cambio.classList.add('text-danger')
//     digito = n
//     if(digito.charCodeAt(0) >=48 && digito.charCodeAt(0) <= 57){
//         cambio.append(digito)
//         caja.append(cambio)
//         caja.append(igual)
//         caja.append(digito.charCodeAt(0))
//         caja.append(space)
//     }
// }

// botones.forEach(btn =>{
//     btn.addEventListener('click', (event) => {
//         console.log(event)
//         if(event.target.value == 'blue'){
//             body.className = 'bg-primary'
//         } else if(event.target.value == 'red'){
//             body.className = 'bg-danger'
//         } else if(event.target.value == 'green'){
//             body.className = 'bg-success'
//         } else if(event.target.value == 'yellow'){
//             body.className = 'bg-warning'
//         }
//     })
// })

// incrementar.addEventListener('click', (event) => {
//     total = parseInt(numero.innerText) +1;
//     numero.innerText = total;
//     decrementar.disabled = false
//     console.log(total)
// })

// decrementar.addEventListener('click', (event) => {
    
//     if(numero.innerText == '1'){
//         total = parseInt(numero.innerText) -1;
//         numero.innerText = total;
//         decrementar.disabled = true
        
//     } else{
//         total = parseInt(numero.innerText) -1;
//         numero.innerText = total
//     }
//     console.log(total)
    
// })

// resetear.addEventListener('click', () => {
//     numero.innerText = 0;
//     decrementar.disabled = true
// })

// body.addEventListener('keyup', (event) => {
//     if(event.keyCode >=65 && event.keyCode <= 90){
//         caja.append(event.key.toUpperCase())
//         caja.append(igual)
//         caja.append(event.keyCode)
//         caja.append(space)
//     } else{
//         codigo(event.key)
//     }
// })

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

const conversion = () =>{
    if(mO == tablaQuetzal.value){
        resultado.value = cant*tablaQuetzal[mC]

    } else{
        resultado.value = cant*tablaDollar[mC]
    }

}

