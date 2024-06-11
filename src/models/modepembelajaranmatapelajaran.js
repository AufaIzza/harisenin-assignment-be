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
      modepembelajaranmatapelajaran.belongsTo(models.modepembelajaran, {foreignKey: "modepembelajaranid"})
      modepembelajaranmatapelajaran.belongsTo(models.matapelajaran, {foreignKey: "matapelajaranid"})
    }
  }
  modepembelajaranmatapelajaran.init({
    modepembelajaranid: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    matapelajaranid: {
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'modepembelajaranmatapelajaran',
  });
  return modepembelajaranmatapelajaran;
};