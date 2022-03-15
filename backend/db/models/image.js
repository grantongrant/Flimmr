'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // albumId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Image.hasMany(models.Comment, {
      foreignKey: 'imageId'
    })
  };
  return Image;
};
