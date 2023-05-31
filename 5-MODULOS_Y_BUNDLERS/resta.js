

function restar(arr){
    return arr.reduce((acumulador, current)=>{
        if(typeof current === 'number'){
            throw new TypeError('Los valores deben ser solo números')
        }
    
        return acumulador - current        
    },0)
}

// console.log(suma([1,2,3,4,5]));