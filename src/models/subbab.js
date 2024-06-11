'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subbab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      subbab.hasMany(models.subbabmaterial, {foreignKey: "subbabid"})
      subbab.hasMany(models.babsubbab, {foreignKey: "subbabid"})
      subbab.hasMany(models.usersubbab, {foreignKey: "subbabid"})
    }
  }
  subbab.init({
    subbabid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    } ,
    name: DataTypes.STRING,
    freestatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'subbab',
  });
  return subbab;
};