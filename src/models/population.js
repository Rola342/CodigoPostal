const { DataTypes } = require('sequelize');

const sequelize = require('../../config/db');

const Populations = sequelize.define('population', {
  location: {
    type: DataTypes.STRING,
  },
  locationType: {
    type: DataTypes.STRING,
  },
  delegation: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  stateCode: {
    type: DataTypes.INTEGER,
  },
  officeKey: {
    type: DataTypes.INTEGER,
  },
  zone: {
    type: DataTypes.STRING,
  },
});

module.exports = Populations;
