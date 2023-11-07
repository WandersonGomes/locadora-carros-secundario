'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    plate: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    yearModel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    licensing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    renavam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:true,
    },
    chassi: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    motor: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    crv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:true,
    },
    codeCLA: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    fuel: {
      type: DataTypes.ENUM('Gasolina', 'Alcool', 'Flex'),
      allowNull: false,
    },
    cpfOwner: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    nameOwner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM('aluguel'),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    optional: {
      type: DataTypes.STRING,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priceDaily: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('enable', 'disable', 'maintenance'),
      allowNull: false,
      defaultValue: 'enable'
    }
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};
