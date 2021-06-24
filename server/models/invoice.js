'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Lease}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.belongsTo(Lease, { foreignKey: 'leaseId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
    }
  };

  Invoice.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    month: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    due: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    paid_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'invoice',
    modelName: 'Invoice',
  });
  return Invoice;
};