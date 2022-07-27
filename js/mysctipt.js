// Data una lista della spesa, (che vi dovete creare voi)
// stampare sulla pagina (anche brutalmente, basta che si 
//     vedano)gli elementi della lista individualmente

console.log('ListaSpesa')
const spesa = ['carne', 'pasta', 'acqua', 'vino', 'birra', 'pesce',
    'formaggio', 'patate', 'verdure', 'cartine lunghe']


console.log(spesa)
const ulElement = document.querySelector('.ul__spesa')
// svuoto ulElement
ulElement.innerHTML = ''
console.log(ulElement)

for (let i = 0; i < 10; i++) {
    const li = `<li class="li__spesa">${spesa[i]} </li>`
    ulElement.innerHTML += li

}

// for(let i=0; i< spesa.length;i++){

// }