const { StatusCodes } = require('http-status-codes');

const { ZipCode } = require('../../models');

module.exports = async ({ params: { zipCode } }, res) => {
  try {
    const zipCodeRecord = await ZipCode.findOne({
      key: zipCode,
    }).populate('populations');

    return res.status(StatusCodes.OK).json(zipCodeRecord);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
