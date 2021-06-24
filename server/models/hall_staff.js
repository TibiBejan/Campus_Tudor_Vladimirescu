'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HallStaff extends Model {

    static associate({Hall}) {
      this.belongsTo(Hall, { foreignKey: 'hallId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
    }

    toJSON() {
      return { ...this.get(), id: undefined, hallId: undefined }
    }
  };

  HallStaff.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'hall_staff',
    modelName: 'HallStaff',
  });

  return HallStaff;
};