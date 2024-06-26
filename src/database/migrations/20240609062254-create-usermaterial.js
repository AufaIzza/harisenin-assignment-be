'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usermaterials', {
      userid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      materialid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usermaterials');
  }
};