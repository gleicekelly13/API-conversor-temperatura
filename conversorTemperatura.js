function converteTemperatura(temperatura, conversor) {  //Função que converte a temperatura
    let resultado;  //A temperatura convertida será armazenada na variável resultado

    if(conversor == 'C') {  // Se o conversor for C...
        resultado = converteParaCelsius(temperatura);   /*...converte a temperatura para celsius e 
                                                            armazena o retorno na variável resultado */
    } 
    
    else if (conversor == 'F') {  // Faz o msmo, porém a conversão é feita para Fahrenheit.
        resultado = converteParaFahrenheit(temperatura);
    }

    return resultado;
}

function converteParaCelsius(fahrenheit) {  //Função que converte para Celsius recevebe como parâmetro a temperatura em Fahrenheit
    let celsius = (fahrenheit - 32) / 1.8;  /* Converte o valor para Celsius, associando o resultado à variável celsius */
    
    return celsius;   //O valor convertido e retornado
}

function converteParaFahrenheit(celsius) {  //Faz o mesmo que a função acima, porém a conversão é feita para Fahrenheit
    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}

exports.converteTemperatura = converteTemperatura;
/* Apenas a função converteTemperatura é exportada, pois apenas ela será acessada pela camada Rest,
   as funções converteParaCelsius e converteParaFahrenheit são usadas apenas internamente pela 
   camada de serviços.
*/
