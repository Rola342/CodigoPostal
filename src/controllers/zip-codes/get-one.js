const { StatusCodes } = require('http-status-codes');

module.exports = ({ params: { zipCode } }, res) => {
  // TODO: Debe de estar implementada la búsqueda por :zipCode
  res.status(StatusCodes.OK).json({
    message: 'Implementar obtención de código postal por :zipCode',
    zipCode,
  });
};
