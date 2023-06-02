'use strict';
const { Model } = require('sequelize');
const db = require('.');
  module.exports = (sequelize, DataTypes) => {
    class Trabalhador extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
       

      }
    }
    Trabalhador.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      trabalhadorNome: DataTypes.STRING,
      trabalhadorApelido: DataTypes.STRING,
      trabalhadorGenero: DataTypes.STRING,
      trabalhadorDataNascimento: DataTypes.DATE,
      trabalhadorAgrgadoFamiliar: DataTypes.INTEGER,
      trabalhadorContactoPrincipal: DataTypes.STRING,
      trabalhadorContactoAlternativo: DataTypes.STRING,
      trabalhadorEmail: DataTypes.STRING,
      trabalhadorCargo: DataTypes.STRING,
      trabalhadorEndereco: DataTypes.STRING,
      trabalhadorDataAdmissao: DataTypes.DATE,
      trabalhadorStaus: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      sequelize,
      modelName: 'Trabalhador',
      timestamps: true,
      freezeTableName: true,
    });
    return Trabalhador;
  };