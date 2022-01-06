'use strict';
const bcrypt = require('bcryptjs');
const user = require('../models/user');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-day',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'nell@user.io',
        username: 'Nell-burns',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'dorian@user.io',
        username: 'Mccauley-beach',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-day', 'Nell-burns', 'Mccauley-beach'] }
    }, {});
  }
};
