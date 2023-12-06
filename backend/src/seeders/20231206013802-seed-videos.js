'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Videos', [
      {
        id: 0,
        name: 'demo 5 - FlowGPT',
        link: 'https://www.youtube.com/watch?v=pDGEwmnD7dM',
        visualizaciones: 1500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1,
        name: 'Shakira x Bizarrap',
        link: 'https://www.youtube.com/watch?v=CocEMWdc7Ck',
        visualizaciones: 2100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'La Resaka - Supermerk2',
        link: 'https://www.youtube.com/watch?v=sNySpPlSqhQ',
        visualizaciones: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Videos', null, {});
  }
};
