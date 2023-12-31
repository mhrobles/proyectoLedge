'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Videos.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    link: DataTypes.STRING,
    visualizaciones: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Videos',
  });
  return Videos;
};