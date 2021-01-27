import Sequelize from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: '',
    Pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

//para comprobar la conexión a database
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

//migrations -models imports
const models = {
    ZipCodes: sequelize.import('./zipcodes'),
    Populations: sequelize.import('./populations'),
};

//correr todo los metodos de asociación
Object.keys(models).forEach((nodelname) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;