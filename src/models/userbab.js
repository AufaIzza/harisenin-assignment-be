'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userbab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userbab.init({
    userid: DataTypes.INTEGER,
    babid: DataTypes.INTEGER,
    progress: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'userbab',
  });
  return userbab;
};