const parseCsvToJson = require('./parse-csv-to-json');
const states = require('../zip-codes/states');
const { ZipCode, Population } = require('../src/models');

module.exports = (rootPath) => {
  const migrations = states.map(async (state) => {
    // Parseando base de datos de csv
    const populations = await parseCsvToJson(`${rootPath}/${state}.csv`);

    console.log(populations);

    const populationsPromises = populations.map(async (population) => {
      // console.log(`Empezando migración de ${state} - ${population.zipCode}`);

      try {
        const zipCodeRecord = await ZipCode.findOneAndUpdate(
          { key: population.zipCode },
          { key: population.zipCode },
          { upsert: true, new: true },
        );

        // Creamos la poblacion y agregamos el zipCpode
        const newPopulation = await Population.create({
          location: population.location,
          locationType: population.locationType,
          delegation: population.delegation,
          state: population.state,
          city: population.city,
          stateCode: population.stateCode,
          officeKey: population.officeKey,
          zone: population.zone,
          delegationCode: population.delegationCode,
          zipCode: zipCodeRecord._id,
        });

        // Actualizamos el registro en el modelo ZipCode
        await ZipCode.findByIdAndUpdate(
          zipCodeRecord._id,
          { $addToSet: { populations: newPopulation._id } },
          { new: true },
        );

        return { succes: true };
      } catch (error) {
        return { success: false };
      }
    });

    return Promise.all(populationsPromises);
  });

  return Promise.all(migrations);
};
