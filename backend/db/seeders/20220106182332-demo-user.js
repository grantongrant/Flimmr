'use strict';
const bcrypt = require('bcryptjs');
const user = require('../models/user');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'jan@user.io',
        name: 'Jan Nielsen',
        username: 'jan-nielsen',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'anne@user.io',
        name: 'Anne Andersen',
        username: 'anne-andersen',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'lars@user.io',
        name: 'Lars Larsen',
        username: 'lars-larsen',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['jan-nielsen', 'anne-andersen', 'lars-larsen'] }
    }, {});
  }
};
