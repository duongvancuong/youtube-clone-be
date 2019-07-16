'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  User.associate = function(models) {
    this.Likes = User.belongsToMany(models.Video, { through: 'Likes' });
    this.Dislikes = User.belongsToMany(models.Video, { through: 'Dislikes' });
  };
  return User;
};
