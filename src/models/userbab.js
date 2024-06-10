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
      userbab.belongsTo(models.user, {foreignKey: "userid"});
      userbab.belongsTo(models.bab, {foreignKey: "babid"})
    }
  }
  userbab.init({
    userid: DataTypes.INTEGER,
    babid: DataTypes.INTEGER,
    progress: DataTypes.DECIMAL(5,2)
  }, {
    sequelize,
    modelName: 'userbab',
  });
  return userbab;
};