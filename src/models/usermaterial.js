'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usermaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usermaterial.belongsTo(models.user, {foreignKey: "userid"});
      usermaterial.belongsTo(models.material, {foreignKey: "materialid"})
    }
  }
  usermaterial.init({
    userid: DataTypes.INTEGER,
    materialid: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'usermaterial',
  });
  return usermaterial;
};