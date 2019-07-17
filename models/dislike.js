'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dislike = sequelize.define('Dislike', {
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
      unique: 'unique-dislike-per-user'
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
      unique: 'unique-dislike-per-video'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  Dislike.associate = function(models) {
    Dislike.belongsTo(models.Video, { foreignKey: 'VideoId', targetKey: 'id', as: 'VideoDislike' });
    Dislike.belongsTo(models.User, { foreignKey: 'UserId', targetKey: 'id', as: 'UserDislike' });
  };
  return Dislike;
};
