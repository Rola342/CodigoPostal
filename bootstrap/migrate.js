const csv = require('csvtojson');

module.exports = async (csvPath) => {
  if (!csvPath) {
    throw new Error('El argumento csvPath es necesario');
  }

  const relativePath = csvPath;
  const result = await csv().fromFile(relativePath);

  const parsedResult = result.map((item) => ({
    zipCode: item.d_codigo,
    data: {
      location: item.d_asenta,
      delegation: item.D_mnpio,
      state: item.d_estado,
      city: item.d_ciudad,
      zone: item.d_zona,
    },
  }));

  console.log(parsedResult);
};
