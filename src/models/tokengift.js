'use strict';
const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  var TokenGift = sequelize.define('TokenGift', {
    id: {
      type: DataTypes.UUID(),
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    transactionHash: DataTypes.STRING,
    isForReferral: DataTypes.BOOLEAN
  });
  TokenGift.associate = function(models) {
    TokenGift.belongsTo(models.User, {foreignKey: 'userId'})
  }
  return TokenGift;
};