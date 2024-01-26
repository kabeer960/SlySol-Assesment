'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('agents', [
      {
        name: "Agent 1",
        email: "adminAgent@gmail.com",
        password: "123456",
        role: "Admin",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Agent 2",
        email: "regularAgent@gmail.com",
        password: "123456",
        role: "Regular",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('agents', null, {})
  }
};
