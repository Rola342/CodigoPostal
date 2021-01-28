const { StatusCodes } = require('http-status-codes');

const Populations = require('../../models/populations');

module.exports = async (
  { query: { page = 1, perPage = 10, sort = {}, filter = {} } },
  res,
) => {
  // TODO: Deben estar implementadas las funciones de
  // paginación, ordenamiento y filtrado
  const totalPopulations = await Populations.count();
  const totalPages = totalPopulations / perPage;
  const populations = await Populations.findAll({
    order: sort,
    where: filter,
  });

  res.status(StatusCodes.OK).json({
    populations,
    page,
    totalPopulations,
    totalPages,
  });
};
