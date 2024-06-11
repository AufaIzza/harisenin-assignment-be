'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kelas.hasMany(models.kelasmodepembelajaran, {foreignKey:"kelasid"})
    }
  }
  kelas.init({
    kelasid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    } ,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelas',
  });
  return kelas;
};