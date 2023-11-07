'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rental.init({
    id_car: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_rental_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finish_rental_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('finalizado', 'em andamento'),
      defaultValue: 'em andamento',
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};