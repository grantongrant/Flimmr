'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        imageId: 2,
        body: "What a cool photo."
      },
      {
        userId: 2,
        imageId: 4,
        body: "What a cool photo."
      },
      {
        userId: 3,
        imageId: 6,
        body: "What a cool photo."
      },
      {
        userId: 1,
        imageId: 8,
        body: "What a cool photo."
      },
      {
        userId: 2,
        imageId: 10,
        body: "What a cool photo."
      },
      {
        userId: 3,
        imageId: 12,
        body: "What a cool photo."
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
