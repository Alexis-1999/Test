function suma(arr){
    return arr.reduce((acumulador, current)=>{
        if(typeof current === 'number'){
            throw new TypeError('Los valores deben ser solo números')
        }
    
        return acumulador + current        
    },0)
}


module.exports = {
    suma,
    restar
}