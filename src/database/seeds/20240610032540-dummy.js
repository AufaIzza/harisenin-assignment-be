'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await bab.destroy({ truncate:true})
    await babsubbab.destroy({ truncate:true})
    await kelas.destroy({ truncate:true})
    await kelasmodepembelajaran.destroy({ truncate:true})
    await matapelajaran.destroy({ truncate:true})
    await matapelajaranbab.destroy({ truncate:true})
    await material.destroy({ truncate:true})
    await modepembelajaran.destroy({ truncate:true})
    await modepembelajaranmatapelajaran.destroy({ truncate:true})
    await subbab.destroy({ truncate:true})
    await subbabmaterial.destroy({ truncate:true})
    await user.destroy({ truncate:true})
    await userbab.destroy({ truncate:true})
    await usermaterial.destroy({ truncate:true})
    await usersubbab.destroy({ truncate:true})
-

    await queryInterface.bulkInsert('user', [
      {
        userid: 1,
        name: "john doe"
      },
      {
        userid: 2,
        name: "john smith"
      }
    ])

    

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
