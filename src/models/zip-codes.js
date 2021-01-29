const { DataTypes } = require('sequelize');

const sequelize = require('../../config/db');

const zipCodes = sequelize.define('zip-code', {
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /[0-9]{5}/,
    },
  },
});

module.exports = zipCodes;
