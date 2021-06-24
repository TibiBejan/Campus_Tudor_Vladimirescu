'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Invoice, HallRoom}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.hasMany(Invoice, { foreignKey: 'leaseId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
    }
  };

  Lease.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    duration_months: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    account_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hall_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_enter:{
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    date_leave: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'lease',
    modelName: 'Lease',
  });

  return Lease;
};