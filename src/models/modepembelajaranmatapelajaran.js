'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modepembelajaranmatapelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  modepembelajaranmatapelajaran.init({
    modepembelajaranid: DataTypes.INTEGER,
    matapelajaranid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'modepembelajaranmatapelajaran',
  });
  return modepembelajaranmatapelajaran;
};