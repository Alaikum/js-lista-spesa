// Data una lista della spesa, (che vi dovete creare voi)
// stampare sulla pagina (anche brutalmente, basta che si 
//     vedano)gli elementi della lista individualmente

console.log('ListaSpesa')
const spesa = ['carne', 'pasta', 'acqua', 'vino', 'birra', 'pesce',
    'formaggio', 'patate', 'verdure', 'cartine lunghe']


console.log(spesa)
const ulElementFor = document.querySelector('.ul__spesa__for')
const ulElementWhile = document.querySelector('.ul__spesa__while')
// svuoto ulElement
ulElementFor.innerHTML = ''
ulElementWhile.innerHTML=''
console.log(ulElementFor, ulElementWhile)

for (let i = 0; i < 10; i++) {
    const li = `<li class="li__spesa">${spesa[i]} </li>`
    ulElementFor.innerHTML += li

}

let i= spesa.length -1
while (i >= 0) {
    const li = `<li class="li__spesa">${spesa[i]} </li>`
    ulElementWhile.innerHTML += li
    i--

}
