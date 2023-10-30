'use strict';

const bcrypt = require('bcrypt');
const { config_bcrypt } = require('../../config/authentication');
const SALT = 10;


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      username: 'admin',
      password: await bcrypt.hash('admin', config_bcrypt.saltRounds),
      perfil: 'administrator',
      createdAt: await new Date(),
      updatedAt: await new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {}); 
  }
};
