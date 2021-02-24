"use strict";
module.exports = (sequelize, DataTypes) => {
  const Join = sequelize.define(
    "Join",
    {
      amenitiesId: DataTypes.INTEGER,
      spotId: DataTypes.INTEGER,
    },
    {}
  );
  Join.associate = function (models) {
    Join.belongsTo(models.Spot, { foreignKey: "spotId" });
    Join.belongsTo(models.Amenity, { foreignKey: "amenitiesId" });
  };
  return Join;
};
