'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        name: 'Cliente 1',
        lastname: 'Primeiro',
        cpf: '111.111.111-11',
        rg: '111AAA111',
        email: 'cliente01@gmail.com',
        address: 'Rua 01',
        complement: '',
        city: 'São Benedito',
        state: 'Ceará',
        cep: '62370-000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cliente 2',
        lastname: 'Segundo',
        cpf: '222.222.222-22',
        rg: '222BBB222',
        email: 'cliente02@gmail.com',
        address: 'Rua 02',
        complement: '',
        city: 'Ibiapina',
        state: 'Ceará',
        cep: '62360-000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cliente 3',
        lastname: 'Terceiro',
        cpf: '333.333.333-33',
        rg: '333CCC333',
        email: 'cliente03@gmail.com',
        address: 'Rua 03',
        complement: '',
        city: 'Ubajara',
        state: 'Ceará',
        cep: '62350-000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
