'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    url: DataTypes.STRING,
    viewer: DataTypes.NUMBER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  Video.associate = function(models) {
    Video.belongsToMany(models.User, { as: 'UsersLikedVideo', through: models.Like, foreignKey: 'VideoId' });
    Video.belongsToMany(models.User, { as: 'UsersDislikedVideo', through: models.Dislike, foreignKey: 'VideoId' });
  };
  return Video;
};
