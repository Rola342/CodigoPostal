const { DataTypes } = require('sequelize');

const sequelize = require('../../config/db');

const zipCodes = sequelize.define('zip-code', {
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isZipCode(value) {
        if (!value.match(/[0-9]{5}/)) {
          throw new Error(
            'El valor de "key" no válido. Tiene que tener el fomarto correcto.',
          );
        }
      },
    },
  },
});

module.exports = zipCodes;
