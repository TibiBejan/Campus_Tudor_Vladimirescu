'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({University, User}) {
      this.belongsTo(University, { foreignKey: 'universityId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.belongsTo(User, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
    }
  };

  Enrollment.init({
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
    university: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year_of_study: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_of_study: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    financial_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'enrollment',
    modelName: 'Enrollment',
  });

  return Enrollment;
};