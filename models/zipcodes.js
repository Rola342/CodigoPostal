export default (sequelize, Sequelize) => {
    const zipcodes = sequelize.define('ZipCodes', {
        key: {
            type: Sequelize.int,
            unique: Sequelize.true,
        },
    });
    return zipcodes;
};