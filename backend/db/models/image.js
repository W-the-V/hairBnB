'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spotId: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};