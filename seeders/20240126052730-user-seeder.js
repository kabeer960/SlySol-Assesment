'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: "User 1",
        email: "user1@gmail.com",
        agent_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "User 2",
        email: "user2@gmail.com",
        agent_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
