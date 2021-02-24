"use strict";
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    "City",
    {
      name: DataTypes.STRING,
      stateId: DataTypes.INTEGER,
    },
    {}
  );
  City.associate = function (models) {
    City.hasMany(models.Spot, { foreignKey: "cityId" });
    City.belongsTo(models.State, { foreignKey: "stateId" });
  };
  return City;
};
