'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    UserId: {
      type: DataTypes.UUID,
      primaryKey: false,
      references: {
        model: 'User',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      unique: 'unique-like-per-user'
    },
    VideoId: {
      type: DataTypes.UUID,
      primaryKey: false,
      references: {
        model: 'Video',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      unique: 'unique-like-per-video'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.Video, { foreignKey: 'VideoId', targetKey: 'id', as: 'VideoLike' });
    Like.belongsTo(models.User, { foreignKey: 'UserId', targetKey: 'id', as: 'UserLike' });
  };
  return Like;
};
