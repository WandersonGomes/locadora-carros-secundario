'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rentals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_car: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_customer: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      start_rental_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      finish_rental_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('finalizado', 'em andamento'),
        defaultValue: 'em andamento',
        allowNull: false,
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
    await queryInterface.dropTable('Rentals');
  }
};