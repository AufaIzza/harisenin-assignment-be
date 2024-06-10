'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matapelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      matapelajaran.hasMany(models.matapelajaranbab, {foreignKey: "matapelajaranid"})
      matapelajaran.hasMany(models.modepembelajaranmatapelajaran, {foreignKey: "matapelajaranid"})
    }
  }
  matapelajaran.init({
    matapelajaranid: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'matapelajaran',
  });
  return matapelajaran;
};