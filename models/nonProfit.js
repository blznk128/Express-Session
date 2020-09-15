module.exports = (sequelize, DataTypes) => {
    let NonProfit = sequelize.define("NonProfit", {
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
        logoLink: {
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
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return NonProfit
}