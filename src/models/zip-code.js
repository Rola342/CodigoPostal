const { DataTypes } = require('sequelize');

const sequelize = require('../../config/db');

const zipCode = sequelize.define('zip-code', {
  keyCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    validate: {
      args: true,
      msg: `Mensaje de prueba`,
      len: 5,
    },
  },
});

module.exports = zipCode;
