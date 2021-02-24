"use strict";
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define(
    "Amenity",
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {}
  );
  Amenity.associate = function (models) {
    Amenity.hasMany(models.Join, { foreignKey: "amenitiesId" });
  };
  return Amenity;
};
