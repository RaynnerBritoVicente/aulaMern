/**
* Efetua a soma de dois números
*
* @author Raynner Brito
* @version 1.0
* @param float {num1} Primeiro Número a ser adicionado
* @param float {num2} Segundo Número a ser adicionado
* @return {soma} float
*/
function soma(num1,num2){
    return(parseFloat(num1)+parseFloat(num2)).toFixed(2)
}

module.exports = soma