//DEMO 1
/*const submitButton = document.querySelector('#btn-enviar')

submitButton.addEventListener('click', function(event){
    event.preventDefault();//Para no actualizar la página

    const saludoUsuario = document.querySelector('#bienvenido')
    const nombreUsuario = document.querySelector('#nombre-usuario').value
    const apellidoUsuario = document.querySelector('#apellido-usuario').value
    const edadUsuario = document.querySelector('#edad-usuario').value

    saludoUsuario.innerText = `Bienvenido ${nombreUsuario}`

    const saludoFinal = `Hola ${nombreUsuario} ${apellidoUsuario}, por si no lo sabías, tenes ${edadUsuario} años`

    const saludoParagraph = document.createElement('p')
    saludoParagraph.innerText = saludoFinal
    saludoParagraph.style.color = 'red'

    const resultDiv = document.querySelector('#resultado')
    resultDiv.appendChild(saludoParagraph)
})
*/

//DEMO 2
/*
const makeDivsButton = document.querySelector('#makeDivs')
const divContainer = document.querySelector('.container')
let count = 0

makeDivsButton.onclick = function(){
    const div = document.createElement('div')
    ++count
    div.className = 'box'
    if(count % 2 == 0){
        div.style.backgroundColor = 'black'
    }

    divContainer.appendChild(div)
}
*/

//DEMO 3
const boxDivs = document.querySelectorAll('.box')

for(let i = 0; i < boxDivs.length ; i ++){
    boxDivs[i].addEventListener('click', function(e){
        boxDivs[i].classList.toggle('greenBox') //classList = lista de clases, toggle = cambiar por; Estonces queda así: quiero que la lista que tengas la cambies por 'greenBox'
    })
}