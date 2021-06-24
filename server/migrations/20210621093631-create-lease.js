'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lease', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      duration_months: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      account_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      room_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hall_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date_enter: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      date_leave: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('lease');
  }
};