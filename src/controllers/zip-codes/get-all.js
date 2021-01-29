const { StatusCodes } = require('http-status-codes');

const { ZipCode, Population } = require('../../models');

module.exports = async (_req, res) => {
  // TODO: Deben estar implementadas las funciones de
  // paginación, ordenamiento y filtrado
  try {
    const zipCodes = await ZipCode.findAll({
      include: [Population],
    });

    return res.status(StatusCodes.OK).json(zipCodes);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error,
    });
  }
};
