'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
    {
     userId: 1,
     albumId: 1,
     imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/1.jpg",
     description: "The goal was to show activity on an around the beautiful opera house in Oslo, and to show how beautiful the Opera is in itself.",
    },
    {
      userId: 1,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/2.jpg",
      description: "Curious pigeon by Colton Jones",
     },
     {
      userId: 1,
      albumId: 1,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/3.jpg",
      description: "Sørenga, Oslo, Norway. A photo of Norwegian people by Eirik Skarstein",
     },
     {
      userId: 1,
      albumId: 2,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/4.jpg",
      description: "Oslo, Norvège by Mathilde Ro",
     },
     {
      userId: 1,
      albumId: 2,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/5.jpg",
      description: "Oslo Sognsvann by Phil Aicken",
     },
     {
      userId: 1,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/6.jpg",
      description: "Eidskog, Norway. instagram.com/foynfoyen/",
     },
     {
      userId: 2,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/7.jpg",
      description: "Bryggen, Bergen, Norway, Rain. by Lachlan Gowen",
     },
     {
      userId: 2,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/8.jpg",
      description: "Watching the world in Senja Norway, by Taneli Lahtinen",
     },
     {
      userId: 2,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/9.jpg",
      description: "Viewpoint Snohetta, Hjerkinn, Norway, by Laura Cleffmann",
     },
     {
      userId: 2,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/10.jpg",
      description: "Row Houses in Bryggen, Bergen, Norway by Michael Fousert.",
     },
     {
      userId: 2,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/11.jpg",
      description: "Aksla Viewpoint, Alesund, Norway by Jarand K. Løkeland",
     },
     {
      userId: 2,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/12.jpg",
      description: "Nordnes, Bergen, Norwegen by Agent J",
     },
     {
      userId: 3,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/13.jpg",
      description: "Contemporary architecture in Oslo, Norway by Christoffer Engström",
     },
     {
      userId: 3,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/14.jpg",
      description: "The church in Lærdal, Norway by Tobias Tullius",
     },
     {
      userId: 3,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/15.jpg",
      description: "The Norwegian National Opera & Ballet, Oslo, Norway By Giorgio Grani",
     },
     {
      userId: 3,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/16.jpg",
      description: "She lies in Oslo, Norway by Akira Hojo",
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
