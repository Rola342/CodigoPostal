const ZipCode = require('./zip-code');
const Population = require('./population');

ZipCode.hasMany(Population);
Population.belongsTo(ZipCode);

module.exports = { Population, ZipCode };
