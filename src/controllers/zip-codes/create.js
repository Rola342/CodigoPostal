const { StatusCodes } = require('http-status-codes');

const ZipCodes = require('../../models/zip-codes');

module.exports = async ({ body: { key } }, res) => {
  // TODO: Debe de estar implementada la búsqueda por :zipCode
  try {
    const [zipCode, created] = await ZipCodes.findOrCreate({
      where: { key },
      defaults: { key },
    });

    return res.status(StatusCodes.CREATED).json({ zipCode, created });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error,
    });
  }
};
