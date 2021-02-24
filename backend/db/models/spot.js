'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    stateId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};