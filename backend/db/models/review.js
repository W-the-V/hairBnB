'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    bookingId: DataTypes.INTEGER,
    rating: DataTypes.SMALLINT,
    body: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};