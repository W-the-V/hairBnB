'use strict';
module.exports = (sequelize, DataTypes) => {
  const Join = sequelize.define('Join', {
    amenitiesId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER
  }, {});
  Join.associate = function(models) {
    // associations can be defined here
  };
  return Join;
};