"use strict";
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
      stateId: DataTypes.INTEGER,
      cityId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {}
  );
  Spot.associate = function (models) {
    Spot.hasMany(models.Booking, { foreignKey: "spotId" });
    Spot.hasMany(models.Review, { foreignKey: "spotId" });
    Spot.hasMany(models.Image, { foreignKey: "spotId" });
    Spot.belongsTo(models.State, { foreignKey: "stateId" });
    Spot.belongsTo(models.City, { foreignKey: "cityId" });
    Spot.hasMany(models.Join, { foreignKey: "spotId" });
  };
  return Spot;
};
