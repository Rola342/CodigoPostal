const { StatusCodes } = require('http-status-codes');

const { ZipCode } = require('../../models');

module.exports = async ({ params: { zipCode } }, res) => {
  // TODO: Debe de estar implementada la búsqueda por :zipCode
  try {
    const zipCodeRecord = await ZipCode.findOne({ where: { key: zipCode } });

    return res.status(StatusCodes.OK).json(zipCodeRecord);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
