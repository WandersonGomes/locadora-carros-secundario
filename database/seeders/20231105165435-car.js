'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cars', [
      {
        plate: 'XYZ789',
        model: 'Car Model 2',
        year: 2022,
        yearModel: 2022,
        licensing: 1231,
        color: 'Blue',
        renavan: 987654321,
        chassi: 'CHASSI456',
        motor: "1.5a",
        crv: 54321,
        codeCLA: 12312,
        fuel: 'Gasolina',
        cpfOwner: '98765432109',
        nameOwner: 'LocaCar',
        category: 'Aluguel',
        city: 'City 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        plate: 'ABC123',
        model: 'Car Model 1',
        year: 2020,
        yearModel: 2020,
        licensing: 1212,
        color: 'Red',
        renavan: 123456789,
        chassi: 'CHASSI123',
        motor: '2.0f',
        crv: 12345,
        codeCLA: 132,
        fuel: 'Gasoline',
        cpfOwner: '12345678901',
        nameOwner: 'LocaCar',
        category: 'Aluguel',
        city: 'City 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Car', null, {});
  }
};
