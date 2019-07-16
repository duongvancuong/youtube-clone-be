'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    UserId: DataTypes.UUID,
    VideoId: DataTypes.UUID,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  Like.associate = function(models) {
    // association here
  };
  return Like;
};
