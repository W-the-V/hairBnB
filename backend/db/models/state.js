"use strict";
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    "State",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  State.associate = function (models) {
    State.hasMany(models.City, { foreignKey: "stateId" });
    State.hasMany(models.Spot, { foreignKey: "stateId" });
  };
  return State;
};
