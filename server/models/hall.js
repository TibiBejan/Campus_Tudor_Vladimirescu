'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hall extends Model {

    static associate({HallStaff, HallRoom, User}) {
      // define association here  
      this.hasMany(User, { foreignKey: 'hallId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" })
      this.hasMany(HallStaff, { foreignKey: 'hallId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.hasMany(HallRoom, { foreignKey: 'hallId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  };

  Hall.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    hall_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hall_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rooms_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    students_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_per_room: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    min_grade: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    max_grade: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    facilities: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    universities: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    bathroom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    adress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    coords: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'hall',
    modelName: 'Hall',
  });

  return Hall;
};
