'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hall', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hall_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hall_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rooms_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      students_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      student_per_room: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      min_grade: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      max_grade: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      facilities: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      universities: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      bathroom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      adress: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      coords: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('hall');
  }
};