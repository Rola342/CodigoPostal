const { StatusCodes } = require('http-status-codes');

const { ZipCode } = require('../../models');

module.exports = async ({ query }, res) => {
  let { page = 1, perPage = 10, sort = 'createdAt' } = query;

  if (typeof page === 'string') {
    page = parseInt(page, 10);
  }

  if (typeof perPage === 'string') {
    perPage = parseInt(perPage, 10);
  }

  try {
    const totalZipCodes = await ZipCode.countDocuments();
    const totalPages = Math.ceil(totalZipCodes / perPage);
    const zipCodes = await ZipCode.find()
      .skip(perPage * (page - 1))
      .limit(perPage)
      .sort(sort)
      .populate('populations');

    return res
      .status(StatusCodes.OK)
      .json({ zipCodes, totalPages, totalZipCodes, page });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error,
    });
  }
};
