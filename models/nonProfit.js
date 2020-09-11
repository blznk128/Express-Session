module.exports = (sequelize, DataTypes) => {
    let nonProfit = sequelize.define("nonProfit", {
        nonProfitName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true
        },
        proof: {
            type: DataTypes.STRING,
            allowNull: true
        },
        logLink: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hqAddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return nonProfit
}