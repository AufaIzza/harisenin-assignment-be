'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bab.hasMany(models.babsubbab, {foreignKey: "babid"})
      bab.hasMany(models.userbab, {foreignKey: "babid"})
      bab.hasMany(models.matapelajaranbab, {foreignKey: "babid"})
    }
  }
  bab.init({
    babid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    } ,
    name: DataTypes.STRING,
    freeamount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bab',
  });
  return bab;
};