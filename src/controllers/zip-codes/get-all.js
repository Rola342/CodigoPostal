const { StatusCodes } = require('http-status-codes');

module.exports = (
  { query: { page = 1, perPage = 10, sort = 'createdAt', filter = null } },
  res,
) => {
  // TODO: Deben estar implementadas las funciones de
  // paginación, ordenamiento y filtrado
  res.status(StatusCodes.OK).json({
    message: 'Implementar paginación, búsqueda y filtrado',
    page,
    perPage,
    sort,
    filter,
  });
};
