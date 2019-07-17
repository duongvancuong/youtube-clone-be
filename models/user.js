'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        max: 30,
        min: 1,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        max: 30,
        min: 1,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Video, { as: 'VideosLikedByUser', through: models.Like, foreignKey: 'UserId' });
    User.belongsToMany(models.Video, { as: 'VideosDislikedByUser', through: models.Dislike, foreignKey: 'UserId' });
  };
  return User;
};
