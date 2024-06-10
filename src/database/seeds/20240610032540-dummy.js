'use strict';

const {
  bab,
  babsubbab,
  kelas,
  kelasmodepembelajaran,
  matapelajaran,
  matapelajaranbab,
  material,
  modepembelajaran,
  modepembelajaranmatapelajaran,
  subbab,
  subbabmaterial,
  user,
  userbab,
  usersubbab,
  usermaterial
} = require("../../models")


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

    await queryInterface.bulkInsert('users', [
      {
        userid: 1,
        name: "john doe"
      },
      {
        userid: 2,
        name: "john smith"
      }
    ])

    await queryInterface.bulkInsert('bab', [
      {
        babid: 1,
        name: "bab 1",
        freeamount: 3
      },
      {
        babid: 2,
        name: "bab 2",
        freeamount: 5
      }
    ])

    await queryInterface.bulkInsert('kelas', [
      {
        kelasid: 1,
        name: "kelas 1"
      },
      {
        kelaseid: 2,
        name: "kelas 2"
      }
    ])

    await queryInterface.bulkInsert('matapelajaran', [
      {
        matapelajaranid: 1,
        name: "matapelajaran 1"
      },
      {
        matapelajaranid: 2,
        name: "matapelajaran 2"
      }
    ])

    await queryInterface.bulkInsert('subbab', [
      {
        subbabid: 1,
        name: "subbab 1"
      },
      {
        subbabid: 2,
        name: "subbab 2"
      }
    ])


    
    await queryInterface.bulkInsert('material', [
      {
        materialid: 1,
        name: "material 1"
      },
      {
        materialid: 2,
        name: "material 2"
      }
    ])

    await queryInterface.bulkInsert('usermaterial', [
      {
        materialid: 1,
        userid: 1,
        status: true
      },
      {
        materialid: 2,
        userid: 1,
        status: true
      }
    ])

    await queryInterface.bulkInsert('userbab', [
      {
        babid: 1,
        userid: 1,
        progress: 50.20
      },
      {
        babid: 2,
        userid: 1,
        progress: 20.20
      }
    ])

    await queryInterface.bulkInsert('usersubbab', [
      {
        subbabid: 1,
        userid: 1,
        progress: 50.20
      },
      {
        subbabid: 2,
        userid: 1,
        progress: 20.20
      }
    ])

    await queryInterface.bulkInsert('kelasmodepembelajaran', [
      {
        kelasid: 1,
        modepembelajaranid: 1
      },
      {
        kelasid: 2,
        modepembelajaranid: 2
      }
    ])

    await queryInterface.bulkInsert("modepembelajaran", [
      {
        modepembelajaranid: 1,
        name: "mode pembelajaran 1"
      },
      {
        modepembelajaranid: 2,
        name: "mode pembelajaran 2"
      }
    ])

    await queryInterface.bulkInsert('modepembelajaranmatapelajaran', [
      {
        matapelajaranid: 1,
        modepembelajaranid: 1
      },
      {
        matapelajaranid: 2,
        modepembelajaranid: 2
      }
    ])

    await queryInterface.bulkInsert('subbabmaterial', [
      {
        subbabid: 1,
        materialid: 1
      },
      {
        subbabid: 2,
        materialid: 2
      }
    ])

    await queryInterface.bulkInsert('babsubbab', [
      {
        subbabid: 1,
        babid: 1
      },
      {
        subbabid: 2,
        babid: 2
      }
    ])

    await queryInterface.bulkInsert('matapelajaranbab', [
      {
        matapelajaranid: 1,
        babid: 1
      },
      {
        matapelajaranid: 2,
        babid: 2
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
