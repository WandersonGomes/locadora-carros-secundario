'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName : {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    rg: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    address : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complement : {
      type: DataTypes.STRING,
    },
    city : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};