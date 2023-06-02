'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trabalhador', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trabalhadorNome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      trabalhadorApelido: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      trabalhadorGenero: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      trabalhadorDataNascimento: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      trabalhadorAgrgadoFamiliar: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      trabalhadorContactoPrincipal: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      trabalhadorContactoAlternativo: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      trabalhadorEmail: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      trabalhadorCargo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      trabalhadorEndereco: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      trabalhadorDataAdmissao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      trabalhadorDataDemissao: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      trabalhadorStaus: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tabalhador');
  }
};