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
     title: "Oslo Opera House in September",
     albumId: 1,
     views: 17,
     imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/1.jpg",
     description: "The goal was to show activity on an around the beautiful opera house in Oslo, and to show how beautiful the Opera is in itself.",
    },
    {
      userId: 1,
      title: "Colton's Curious Pigeon",
      views: 22,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/2.jpg",
      description: "A curious pigeon taken on a Sony DSC-P73",
     },
     {
      userId: 1,
      title: "Summer Swim",
      albumId: 1,
      views: 12,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/3.jpg",
      description: "Sørenga, Oslo, Norway. A photo of Norwegian people by Eirik Skarstein",
     },
     {
      userId: 1,
      title: "Norwegian Red",
      albumId: 2,
      views: 9,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/4.jpg",
      description: "Oslo, Norvège by Mathilde Ro",
     },
     {
      userId: 1,
      title: "Hike in the City",
      albumId: 2,
      views: 34,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/5.jpg",
      description: "Oslo Sognsvann by Phil Aicken",
     },
     {
      userId: 1,
      title: "Sheep Shearing in Eidskog",
      views: 7,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/6.jpg",
      description: "Eidskog, Norway. Taken on a Sony ILCE-7M3",
     },
     {
      userId: 2,
      title: "Lachlan Gowen's Rain",
      views: 14,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/7.jpg",
      description: "Bryggen, Bergen, Norway. Taken on a Sony Alpha A7mii",
     },
     {
      userId: 2,
      title: "Taneli Lahtinen's World Watching",
      views: 17,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/8.jpg",
      description: "Watching the world in Senja Norway",
     },
     {
      userId: 2,
      title: "Viewpoint",
      views: 24,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/9.jpg",
      description: "Snohetta, Hjerkinn, Norway. Photo by Laura Cleffmann on her iPhone12",
     },
     {
      userId: 2,
      title: "Row Houses",
      views: 27,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/10.jpg",
      description: "Bryggen, Bergen, Norway. Photo by Michael Fousert.",
     },
     {
      userId: 2,
      title: "Viewpoint II",
      views: 9,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/11.jpg",
      description: "Aksla Viewpoint, Alesund, Norway by Jarand K. Løkeland",
     },
     {
      userId: 2,
      title: "Agent J's Sunday Stroll",
      views: 19,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/12.jpg",
      description: "Nordnes, Bergen, Norwegen by Agent J - Canon EOS 5D Mark III",
     },
     {
      userId: 3,
      title: "The Future is Now",
      views: 23,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/13.jpg",
      description: "Contemporary architecture in Oslo, Norway by Christoffer Engström",
     },
     {
      userId: 3,
      title: "The Church in Lærdal",
      views: 21,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/14.jpg",
      description: "The church in Lærdal, Norway by Tobias Tullius",
     },
     {
      userId: 3,
      title: "Now You See Me",
      views: 20,
      imageUrl: "https://flimmr.s3.us-east-2.amazonaws.com/15.jpg",
      description: "The Norwegian National Opera & Ballet, Oslo, Norway By Giorgio Grani",
     },
     {
      userId: 3,
      title: "If You Build It",
      views: 12,
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
