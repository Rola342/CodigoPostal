const { DataTypes } = require('sequelize');

const sequelize = require('../../config/db');

const zipCode = sequelize.define('zip-code', {
  keyCode: {
    type: DataTypes.INTEGER,
    unique: DataTypes.TRUE,
  },
});

module.exports = zipCode;
