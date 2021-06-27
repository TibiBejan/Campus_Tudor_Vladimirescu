'use strict';
const { Model } = require('sequelize');
const bcrypt = require ('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({Token, NextOfKin, StudentMeta, Enrollment, Lease, Invoice, HallRoom, Hall}) {
      this.hasMany(Token, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.hasMany(NextOfKin, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.hasOne(StudentMeta, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.hasOne(Enrollment, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" }); 
      this.hasOne(Lease, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.hasMany(Invoice, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.hasOne(HallRoom, { foreignKey: 'userId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
      this.belongsTo(Hall, { foreignKey: 'hallId', foreignKeyConstraint: true, allowNull: false, onDelete: "CASCADE" });
    }

    toJSON() {
      return { ...this.get(), id: undefined, password: undefined, password_changed_at: undefined, createdAt: undefined, updatedAt: undefined }
    }
  };

  User.init({
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
      unique: true,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8,
      }
    },
    password_changed_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'student'
    },
  }, {
    sequelize,
    tableName: 'user',
    modelName: 'User',
  });

  // VALIDATE PASSWORD FROM TOKEN
  User.prototype.checkPwdValidation = async (targetPassword, password) => {
    return await bcrypt.compare(targetPassword, password);
  }

  // CHECK IF PWD HAS BEEN UPDATED AFTER JWT TOKEN SETUP
  User.prototype.changedPwdAfterCheck = function(JWTExpirationDate) {

    if(this.password_changed_at) {
      // IF NOT, COMPARE TOKEN TIMESTAMP TO USER PROFILE TIMESTAMP
      const changedTimestamp = this.password_changed_at.getTime() / 1000;
      return changedTimestamp > JWTExpirationDate; // CHANGED
    } 
    return false; // NOT CHANGED
  }

  return User;
};