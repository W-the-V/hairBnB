"use strict";
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
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
    Spot.hasMany(models.Join, { foreignKey: "spotId" });
  };
  return Spot;
};
