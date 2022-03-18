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
      return queryInterface.bulkInsert('Albums', [
        {
          userId: 1,
          name: "Oslo",
          coverImg: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641840798/Flimmr/arvid-malde-3VCrw7nHH4A-unsplash_rqfcfi.jpg",
          description: "A place to put my photos of Oslo."
        },
        {
          userId: 1,
          name: "Norway",
          coverImg: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641841101/Flimmr/mathilde-ro-IiqG8qA-cww-unsplash_fmot6j.jpg",
          description: "A place to put my photos of Norway."
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
      return queryInterface.bulkDelete('Albums', null, {});
  }
};
