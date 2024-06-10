'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usersubbab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usersubbab.belongsTo(models.user, {foreignKey: "userid"});
      usersubbab.belongsTo(models.subbab, {foreignKey: "subbabid"})
    }
  }
  usersubbab.init({
    userid: DataTypes.INTEGER,
    subbabid: DataTypes.INTEGER,
    progress: DataTypes.DECIMAL(5,2)
  }, {
    sequelize,
    modelName: 'usersubbab',
  });
  return usersubbab;
};