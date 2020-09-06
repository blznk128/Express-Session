module.exports = (sequelize, DataTypes) => {
    let FavoriteNonProfit = sequelize.define("FavoriteNonProfit", {
        favoriteNP: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    FavoriteNonProfit.associate = (models) => {
        FavoriteNonProfit.belongsTo(models.Donor, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return FavoriteNonProfit
}