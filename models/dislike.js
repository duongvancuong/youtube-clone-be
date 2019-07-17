'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dislike = sequelize.define('Dislike', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    UserId: DataTypes.UUID,
    VideoId: DataTypes.UUID,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  Dislike.associate = function(models) {
    // association here
  };
  return Dislike;
};
