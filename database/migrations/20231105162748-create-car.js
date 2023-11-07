'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plate: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      yearModel: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      licensing: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false
      },
      renavam: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      chassi: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      motor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      crv: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      codeCLA: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      fuel: {
        type: Sequelize.ENUM('gasolina', 'alcool', 'flex', 'eletrico'),
        allowNull: false
      },
      cpfOwner: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      nameOwner: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.ENUM('aluguel'),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      optional: {
        type: Sequelize.STRING,
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      priceDaily: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('disponivel', 'indisponivel', 'manutencao'),
        allowNull: false,
        defaultValue: 'disponivel',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};
