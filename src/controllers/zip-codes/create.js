const { StatusCodes } = require('http-status-codes');

const ZipCodes = require('../../models/zip-codes');

module.exports = async ({ body: { key } }, res) => {
  // TODO: Debe de estar implementada la búsqueda por :zipCode
  try {
    const zipCode = await ZipCodes.create({ key });

    return res.status(StatusCodes.CREATED).json({ zipCode });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error,
    });
  }
};
