const csv = require('csvtojson');

module.exports = async (csvPath) => {
  if (!csvPath) {
    throw new Error('El argumento csvPath es necesario');
  }
  const result = await csv().fromFile(csvPath);

  const parsedResult = result.map((item) => ({
    zipCode: item.d_codigo,
    location: item.d_asenta,
    locationType: item.d_tipo_asenta,
    delegation: item.D_mnpio,
    state: item.d_estado,
    city: item.d_ciudad,
    stateCode: item.c_estado,
    officeKey: item.c_oficina,
    zone: item.d_zona,
    delegationCode: item.c_mnpio,
  }));

  return parsedResult;
};
