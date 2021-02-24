'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here
  };
  return Amenity;
};