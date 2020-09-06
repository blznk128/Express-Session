module.exports = (sequelize, DataTypes) => {
    let Donor = sequelize.define("Donor", {
        userName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        first_Name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_Name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        aboutMe: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    Donor.associate = (models) => {
        Donor.hasMany(models.FavoriteNonProfit, {
            onDelete: "cascade",
        });
    };

    return Donor
}