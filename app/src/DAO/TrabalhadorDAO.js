const { Trabalhador } = require('../models');


exports.trabalhadorDAO = {
    create: create,

}


function create(trabalhador){
    var newTrabalhador = new Trabalhador(trabalhador);
    return newTrabalhador.save();
}




