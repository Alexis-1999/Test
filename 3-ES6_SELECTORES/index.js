//ARROW FUNCTION

let original = [1,2,3,4,5];

let arr = original.map(function(element){
    return element * 2;
})

console.log(arr);

//Recibimos un solo argumento y tenemos un solo statement
//Tiene el return implícito(sin las llaves)
let arr1 = original.map(element => element * 2)
console.log(arr1);

//Recibimos dos argumentos y tenemos un solo statement
let arr2 = original.map((element, index) => element * index)
console.log(arr2);

//Recibimos un solo parámetro y multiples statements
//No tengo return implícito
let even = number => {
    if(number%2==0){ 
        console.log('Even');
    }else{
    console.log('Odd');
    }
    return 'termine'
}
console.log(even(5))

let arr4 = original.map(element => {
    console.log(element);
    return element
})
console.log(arr4);

//Recibímos dos parámetros y múltiples statements
//No hay return implícito
let arr5 = original.map((element, index) =>{
    console.log(element);
    return element*index
})

//Un solo statement sin parámetros
let saludo = () => 'Hello World'
console.log(saludo());
//Un solo statement sin parámetros
let saludo2 = () => {
    let hola = 'Bye World'
    return hola
}
console.log(saludo2());

//ARROW FUNCTION CON EL THIS
let obj2 ={
    a:'Alexis',
    b:'Aguilar',
    friend:['Ale Gon', 'Hola','gogo'],
    print(){
        return this.friend.map(friend => this.a + ' conoce a ' + friend )
    
    }
}
console.log(obj2.print());

/////////////////////////////////////////////////////////
// CLASES  y HERENCIAS
class Vehicle {
    constructor(nombre, price){
        this.nombre = nombre;
        this.price = price
    }

    start(){
        return `${this.nombre} veicle started`
    }
}

class Car extends Vehicle{
    constructor(nombre, model, price){
        super(nombre, price)
        this.model = model
    }
}

let auto1 = new Car('BMW', 2020, '$20000000')
console.log(auto1);
console.log(auto1.start());

/*
//Function constructora
function Vehicle(nombre){
    this.nombre = nombre;
}

Vehicle.prototype.getCar = function(){
    return this.nombre;
}

function Car2(model){
    Vehicle1.call(this, nombre)
    this.model = model
}*/

//////////////////////////////////////////////////
// OBJECT LITERALS

let a =1;
let b = 2;
let c = 3;
let prop = 'Altura'

//COMPUTED( DYNAMMIC) PROPERTY NAMES
let obj3 = {
    a,
    b,
    c,
    [prop]: 1.72
}

console.log(obj3);

function Persona(nombre, apellido, prop, value){
    this.nombre = nombre;
    this.apellido = apellido;
    this[prop] = value
}

let jacinto = new Persona('Alexis', 'Aguilar', 'altura', 1.55)
console.log(jacinto);

let rodrigo = new Persona('Ruben', 'Gonzalez', 'mucha', 'fuerza')
console.log(rodrigo);

//////////////////////////////////////////////////////
// TEMPLATE LITERAL STRINGS

let string = 'soy string '
let string2 = 'y yo soy string2'

let result = string + ' ' + string2
console.log(result);

let template = `${string.toUpperCase()} ${string2}`
console.log(template);

let prueba = `Hola voy a bajar de línea
bajo línea
bajo dos`

console.log(prueba);

/////////////////////////////////////////////////////////////
// DESTRUCTURING con Objeto

const user = {firstName: 'Alexis', lastName: 'Aguilar'}
//antes se hacia así
console.log(user.firstName, user.lastName);
//nueva forma de hacer
const {firstName, lastName} = user
console.log(firstName);
console.log(lastName);

const persona3 ={
    deporte:'Futbol',
    nombre: 'Messi',
    extraData: {
        altura: '1,69',
        edad: 35
    }
}

//Podemos redefinir el nombre que queramos Ejemplo con el "deporte"
const {deporte: sport/*deporte*/, nombre ,extraData: {altura, edad}} = persona3
console.log(altura);
console.log(edad);
console.log(sport/*deporte*/);
console.log(nombre);

//DESTRUCTURING con array

const nuestroArray = [1, 2, 3, 4, 5, 6, 7]

const [one, two, three, , e] = nuestroArray //Puedo cambiar el nombre en destructuring

console.log(one);
console.log(two);
console.log(three);
console.log(e);

///////////////////////////////////////////////////////////
// SPREAD OPERATOR

var arrs = [0, 1, 2]
var arrsa = [3, 4, 5]

let concat = [...arrs, ...arrsa]
console.log(concat);

var repetead = [1,1,1,1,2,3,3,4,5,5,6]
let fileterd = [...new Set(repetead)]
console.log(fileterd);

// REST OPERATOR
const [pos0, ...rest] = nuestroArray
console.log(pos0);
console.log(rest);

////////////////////////////////////////////////////////////////
// PROMISES
then(
    
).catch(

)



