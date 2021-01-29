const { StatusCodes } = require('http-status-codes');

const { Population, ZipCode } = require('../../models');

module.exports = async ({ body: { data, zipCode } }, res) => {
  try {
    // Buscamos un zipCode en la base de datos,
    // si no existe lo crea
    const zipCodeRecord = await ZipCode.findOrCreate({
      where: { key: zipCode },
      defaults: { key: zipCode },
    });

    try {
      const population = await Population.create(
        {
          location: data.location,
          locationType: data.locationType,
          delegation: data.delegation,
          state: data.state,
          city: data.city,
          stateCode: data.stateCode,
          officeKey: data.officeKey,
          zone: data.zone,
          zipCodeId: zipCodeRecord[0].id,
        },
        {
          include: [ZipCode],
        },
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
