const { StatusCodes } = require('http-status-codes');

const ZipCodes = require('../../models/zip-codes');

module.exports = async (
  { query: { page = 1, perPage = 10, sort = {}, filter = {} } },
  res,
) => {
  // TODO: Deben estar implementadas las funciones de
  // paginación, ordenamiento y filtrado
  try {
    const totalZipCodes = await ZipCodes.count({ where: filter });
    const totalPages = totalZipCodes / perPage;
    const zipCodes = await ZipCodes.findAll({
      order: sort,
      where: filter,
    });

    return res.status(StatusCodes.OK).json({
      zipCodes,
      page,
      totalZipCodes,
      totalPages,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error,
    });
  }
};
