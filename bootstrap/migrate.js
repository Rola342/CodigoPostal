const axios = require('axios');
const dotenv = require('dotenv');

const parseCsvToJson = require('./parse-csv-to-json');
const states = require('../zip-codes/states');

dotenv.config();

module.exports = (rootPath) => {
  return states.map(async (state) => {
    const populations = await parseCsvToJson(`${rootPath}/${state}.csv`);

    populations.map(async (population) => {
      try {
        await axios.post(`${process.env.HOST}/populations`, {
          zipCode: population.zipCode,
          data: population,
        });

        return { success: true };
      } catch (error) {
        return { error: 'ZipCodeError' };
      }
    });
  });
};
