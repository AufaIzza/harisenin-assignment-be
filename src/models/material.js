'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      material.hasMany(models.usermaterial, {foreignKey:"materialid"})
      material.hasMany(models.subbabmaterial, {foreignKey:"materialid"})
    }
  }
  material.init({
    materialid: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'material',
  });
  return material;
};