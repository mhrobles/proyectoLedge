'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Videos', [
      {
        id: 0,
        name: 'demo 5 - FlowGPT',
        img: 'https://i.ytimg.com/vi/u1FiPDPM9po/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC2ltvQDrbs4bEm1lRDFf-8Uc7dFQ',
        link: 'https://www.youtube.com/watch?v=pDGEwmnD7dM',
        visualizaciones: 1500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1,
        name: 'Shakira x Bizarrap',
        img: 'https://i.ytimg.com/vi/CocEMWdc7Ck/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAcI8nJuYatDJp1FxT2q0dbjQQgeQ',
        link: 'https://www.youtube.com/watch?v=CocEMWdc7Ck',
        visualizaciones: 2100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'La Resaka - Supermerk2',
        img:'https://i.ytimg.com/vi/htc-knWf018/hq720.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYFSArKH8wDw==&rs=AOn4CLBp9GD9rscvIR33gUJ0YF21yXRBLw',
        link: 'https://www.youtube.com/watch?v=htc-knWf018',
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
