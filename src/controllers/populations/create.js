const { StatusCodes } = require('http-status-codes');

const { Population, ZipCode } = require('../../models');

module.exports = async ({ body: { data, zipCode } }, res) => {
  try {
    // Buscamos un zipCode en la base de datos,
    // si no existe lo crea
    const zipCodeRecord = await ZipCode.findOneAndUpdate(
      { key: zipCode },
      { key: zipCode },
      { upsert: true, new: true },
    );

    try {
      // Creamos la poblacion y agregamos el zipCode
      const population = await Population.create({
        location: data.location,
        locationType: data.locationType,
        delegation: data.delegation,
        state: data.state,
        city: data.city,
        stateCode: data.stateCode,
        officeKey: data.officeKey,
        zone: data.zone,
        zipCode: zipCodeRecord._id,
        delegationCode: data.delegationCode,
      });

      // Actualizamos el registro en el modelo ZipCode
      await ZipCode.findOneAndUpdate(
        { key: zipCode },
        { $addToSet: { populations: population._id } },
        { new: true },
      );

      return res.status(StatusCodes.CREATED).json(population);
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error,
      });
    }
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error,
    });
  }
};
