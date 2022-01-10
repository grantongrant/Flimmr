'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
    type: DataTypes.INTEGER,
    allowNull: false
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
      allowNull: false
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Image;
};
