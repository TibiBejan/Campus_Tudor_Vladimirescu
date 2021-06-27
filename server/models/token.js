'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
    }
  };


  Token.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    reset_token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    token_expiration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'token',
    modelName: 'Token',
  });


  return Token;
};
