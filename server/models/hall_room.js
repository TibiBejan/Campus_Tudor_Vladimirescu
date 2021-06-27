'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HallRoom extends Model {

    static associate({Hall, User}) {
      // define association here
      this.belongsTo(Hall, { foreignKey: 'hallId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.belongsTo(User, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
    }
  };

  HallRoom.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    room_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room_floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room_rent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room_beds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'hall_room',
    modelName: 'HallRoom',
  });
  return HallRoom;
};