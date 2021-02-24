'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    bookingDate: DataTypes.DATE,
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    time: DataTypes.TIME,
    totalPrice: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};