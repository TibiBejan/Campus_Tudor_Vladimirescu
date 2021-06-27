'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NextOfKin extends Model {

    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" })
    }
  };
  NextOfKin.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    },
    relation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'next_of_kin',
    modelName: 'NextOfKin',
  });
  return NextOfKin;
};