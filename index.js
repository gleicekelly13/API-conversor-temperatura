const express = require('express');
const app = express();

const conversorTemperatura = require('./conversorTemperatura');  //Importação da camada de serviço


app.get('/', (req, res) => {  
    let temperatura = req.query.temperatura;
    let conversor = req.query.conversor;

    let temperaturaGraus = conversorTemperatura.converteTemperatura(temperatura, conversor); // *

    let json = {temperatura : temperaturaGraus}; /*A variável temperaturaGraus é utilizada na formação do json 
                                                   que contém a temperatura convertida */

    res.json(json);  
});

app.listen(8080, () => {  //Trecho responsável por escutar as requisições à nossa API na porta 8080
    let data = new Date();
    console.log('Servidor iniciado em: ' + data);
})


/*
* let temperaturaGraus = conversorTemperatura.converteTemperatura(temperatura, conversor); 
  Os valores dentro dos parênteses(os parâmetros) são passados para a função converteTemperatura,
  que está sendo chamada da camada de serviço. E a temperatura convertida 
  será armazenada na variável temperaturaGraus.
*/
