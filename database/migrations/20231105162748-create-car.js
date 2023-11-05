'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Car', {
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
      renavan: {
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
        type: Sequelize.ENUM('Gasolina', 'Álcool', 'Flex'),
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
        type: Sequelize.ENUM('Aluguel'),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
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
