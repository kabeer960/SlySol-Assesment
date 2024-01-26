'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, commonFields) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Booking.belongsTo(models.Agent, {
        foreignKey: 'agent_id'
      })
    }
  }
  Booking.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_at: DataTypes.DATE,
    finish_at: DataTypes.DATE,
    ...commonFields
  }, {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings'
  });
  return Booking;
};