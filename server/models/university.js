'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class University extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Enrollment}) {
      this.hasMany(Enrollment, { foreignKey: 'universityId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
    }
  };

  University.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    halls: {
      type: DataTypes.JSON,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'university',
    modelName: 'University',
  });

  return University;
};