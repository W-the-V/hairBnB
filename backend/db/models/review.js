"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: DataTypes.INTEGER,
      spotId: DataTypes.INTEGER,
      bookingId: DataTypes.INTEGER,
      rating: DataTypes.SMALLINT,
      body: DataTypes.TEXT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.Spot, { foreignKey: "spotId" });
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Booking, { foreignKey: "bookingId" });
  };
  return Review;
};
