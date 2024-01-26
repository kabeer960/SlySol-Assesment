'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Agent.hasMany(models.Booking, {
        foreignKey: 'agent_id'
      });
      Agent.hasMany(models.User, {
        foreignKey: 'agent_id'
      });
    }
  }
  Agent.init({
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ...commonFields
  }, {
    sequelize,
    modelName: 'Agent',
    tableName: 'agents'
  })
  return Agent
}