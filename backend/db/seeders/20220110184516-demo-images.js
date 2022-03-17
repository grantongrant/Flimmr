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
     imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641840798/Flimmr/arvid-malde-3VCrw7nHH4A-unsplash_rqfcfi.jpg",
     description: "The goal was to show activity on an around the beautiful opera house in Oslo, and to show how beautiful the Opera is in itself.",
    },
    {
      userId: 1,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641840928/Flimmr/colton-jones-11g6Xzonsq4-unsplash_w9vuvl.jpg",
      description: "Curious pigeon by Colton Jones",
     },
     {
      userId: 1,
      albumId: 1,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641841008/Flimmr/eirik-skarstein-sphlovA7EjI-unsplash_iqo6cl.jpg",
      description: "Sørenga, Oslo, Norway. A photo of Norwegian people by Eirik Skarstein",
     },
     {
      userId: 1,
      albumId: 1,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641841101/Flimmr/mathilde-ro-IiqG8qA-cww-unsplash_fmot6j.jpg",
      description: "Oslo, Norvège by Mathilde Ro",
     },
     {
      userId: 1,
      albumId: 1,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641841159/Flimmr/phil-aicken-7Am4N9J5Lts-unsplash_ufvjra.jpg",
      description: "Oslo Sognsvann by Phil Aicken",
     },
     {
      userId: 1,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641841322/Flimmr/foyn-e7gsQWTnMwQ-unsplash_ki3nok.jpg",
      description: "Eidskog, Norway. instagram.com/foynfoyen/",
     },
     {
      userId: 2,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641841447/Flimmr/lachlan-gowen-jrMsv-0o0bw-unsplash_mq5t6s.jpg",
      description: "Bryggen, Bergen, Norway, Rain. by Lachlan Gowen",
     },
     {
      userId: 2,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641841520/Flimmr/taneli-lahtinen-e57Hpo-Qek4-unsplash_x6wx2t.jpg",
      description: "Watching the world in Senja Norway, by Taneli Lahtinen",
     },
     {
      userId: 2,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641841608/Flimmr/laura-cleffmann-vCPBI5uDXM8-unsplash_hspzav.jpg",
      description: "Viewpoint Snohetta, Hjerkinn, Norway, by Laura Cleffmann",
     },
     {
      userId: 2,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1642112527/Flimmr/michael-fousert-lE5-z4nTCTQ-unsplash_iww976.jpg",
      description: "Row Houses in Bryggen, Bergen, Norway by Michael Fousert.",
     },
     {
      userId: 2,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1642112526/Flimmr/jarand-k-lokeland-3-MftKobVtg-unsplash_ovmovr.jpg",
      description: "Aksla Viewpoint, Alesund, Norway by Jarand K. Løkeland",
     },
     {
      userId: 2,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1642112525/Flimmr/agent-j-szMWVPuPzJI-unsplash_bn9oti.jpg",
      description: "Nordnes, Bergen, Norwegen by Agent J",
     },
     {
      userId: 3,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1642113132/Flimmr/christoffer-engstrom-en0CrvuW6Zc-unsplash_ovizfu.jpg",
      description: "Contemporary architecture in Oslo, Norway by Christoffer Engström",
     },
     {
      userId: 3,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1642113132/Flimmr/tobias-tullius-rit9JuAXOhI-unsplash_vphpzq.jpg",
      description: "The church in Lærdal, Norway by Tobias Tullius",
     },
     {
      userId: 3,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1642113130/Flimmr/giorgio-grani-yFh7EFPBnXA-unsplash_n6yekr.jpg",
      description: "The Norwegian National Opera & Ballet, Oslo, Norway By Giorgio Grani",
     },
     {
      userId: 3,
      imageUrl: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1642113128/Flimmr/akira-hojo-cI-Ctf3PRPs-unsplash_bhykdl.jpg",
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
