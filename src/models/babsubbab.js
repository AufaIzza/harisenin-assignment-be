'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class babsubbab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      babsubbab.belongsTo(models.bab, {foreignKey: "bab_id"})
      babsubbab.belongsTo(models.subbab, {foreignKey: "subbab_id"})
    }
  }
  babsubbab.init({
    babid: DataTypes.INTEGER,
    subbabid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'babsubbab',
  });
  return babsubbab;
};