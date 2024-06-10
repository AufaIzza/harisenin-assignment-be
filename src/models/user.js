'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.userbab, {foreignKey: "userid"})
      user.hasMany(models.usersubbab, {foreignKey: "userid"})
      user.hasMany(models.usermaterial, {foreignKey: "userid"})
    }
  }
  user.init({
    userid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING
    }
  }, 
  {
    sequelize,
    modelName: 'user',
  });
  return user;
};