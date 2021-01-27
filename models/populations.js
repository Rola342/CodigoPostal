export default (sequelize, Sequelize) => {
    const Populations = sequelize.define('populations', {
        location: {
            type: Sequelize.STRING,
        },
        location_type: {
            type: Sequelize.STRING,
        },
        delegation: {
            type: Sequelize.STRING,
        },
        state: {
            type: Sequelize.STRING,
        },
        city: {
            type: Sequelize.STRING,
        },
        state_code: {
            type: Sequelize.INT,
        },
        office_key: {
            type: Sequelize.INT,
        },
        zone: {
            type: Sequelize.STRING,
        },
    });

    Populations.associate = (models) => {
        Populations.belongsTo(models.ZipCodes, { foreignKey: 'zip_code_id' });
    };

    return Populations;
};