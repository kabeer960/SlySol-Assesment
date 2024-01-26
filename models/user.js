'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Booking, {
        foreignKey: 'user_id'
      });
      User.belongsTo(models.Agent, {
        foreignKey: 'agent_id'
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ...commonFields
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};