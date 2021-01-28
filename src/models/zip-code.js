const { DataTypes } = require('sequelize');

const sequelize = require('../../config/db');

const zipCode = sequelize.define('zip-codes', {
  keyZip: {
    type: DataTypes.INTEGER,
    unique: DataTypes.TRUE,
  },
});

module.exports = zipCode;
