'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Videos', [
      {
        id: 0,
        name: 'demo 5 - FlowGPT',
        img: 'https://i.ytimg.com/vi/u1FiPDPM9po/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC2ltvQDrbs4bEm1lRDFf-8Uc7dFQ',
        link: 'https://www.youtube.com/watch?v=pDGEwmnD7dM',
        visualizaciones: 3500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1,
        name: 'Shakira x Bizarrap',
        img: 'https://i.ytimg.com/vi/CocEMWdc7Ck/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAcI8nJuYatDJp1FxT2q0dbjQQgeQ',
        link: 'https://www.youtube.com/watch?v=CocEMWdc7Ck',
        visualizaciones: 6100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'La Resaka - Supermerk2',
        img:'https://i.ytimg.com/vi/htc-knWf018/hq720.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYFSArKH8wDw==&rs=AOn4CLBp9GD9rscvIR33gUJ0YF21yXRBLw',
        link: 'https://www.youtube.com/watch?v=htc-knWf018',
        visualizaciones: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Dragon Ball Z - Opening 1',
        img:'https://i.ytimg.com/vi/CGSiSr_QL4M/hqdefault.jpg?sqp=-oaymwE9COADEI4CSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Ab4CgALwAYoCDAgAEAEYfyAiKBMwDw==&rs=AOn4CLCnoygcS2y7CqLvmu1XoP4jCOs3ow',
        link: 'https://www.youtube.com/watch?v=5LVcwPrfNo4',
        visualizaciones: 4750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Linkin Park - In The End',
        img:'https://i.ytimg.com/vi/eVTXPUF4Oz4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAiHKmVrcaI6ZVkFHQVwQTweKNasg',
        link: 'https://www.youtube.com/watch?v=eVTXPUF4Oz4',
        visualizaciones: 5500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'BTS - Dynamite',
        img:'https://i.ytimg.com/vi/gdZLi9oWNZg/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA2RoOmMIgnDOkDqtaX0phnYuFGaA',
        link: 'https://www.youtube.com/watch?v=gdZLi9oWNZg',
        visualizaciones: 2580,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Daddy Yankee - Limbo',
        img:'https://i.ytimg.com/vi/6BTjG-dhf5s/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAJ4v7TBqgbSyhaa1X-mUPMYPSDBw',
        link: 'https://www.youtube.com/watch?v=6BTjG-dhf5s',
        visualizaciones: 2790,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Jujutsu Kaisen S2 - Opening 2',
        img:'https://i.ytimg.com/vi/gjkNwuPcl50/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAKTUk3Z9qYl8lN1H4pFnGIsyhrVA',
        link: 'https://www.youtube.com/watch?v=Es_xmX57HgU',
        visualizaciones: 6750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Heartsteel - Paranoia',
        img:'https://i.ytimg.com/vi/MDErQ1KTzaI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA02NsMQ31zDjO8YSs3pXlA_j9CKA',
        link: 'https://www.youtube.com/watch?v=MDErQ1KTzaI',
        visualizaciones: 5580,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'JOJO Golden Wind Opening 2',
        img:'https://i.ytimg.com/vi/uozWirwqxJk/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCdOy9hmnxx6y3ZxnDOyCcaEf8lHw',
        link: 'https://www.youtube.com/watch?v=m4SXKRBztQk',
        visualizaciones: 6780,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Chayanne - Torero',
        img:'https://i.ytimg.com/vi/GuZzuQvv7uc/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDzL9tWwa-Lut0ChFk_bSdDobIrSw',
        link: 'https://www.youtube.com/watch?v=GuZzuQvv7uc',
        visualizaciones: 6750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'Chayanne - Navidad',
        img:'https://i.ytimg.com/vi/2q_uT1amzQM/hq720.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYciBZKDEwDw==&rs=AOn4CLA9Qr3YJS7UqbcfXkjIBb8ZU45yWg',
        link: 'https://www.youtube.com/watch?v=uHY7buMhsrE',
        visualizaciones: 6750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'Jujutsu Kaisen S2 - Opening 1',
        img:'https://i.ytimg.com/vi/AQcOdxEmfEg/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDC-dNJ8DYWoTxualnVAwqjGVHPVQ',
        link: 'https://www.youtube.com/watch?v=9vFQc8MoU9g',
        visualizaciones: 6750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'Don Omar - El señor de la Noche',
        img:'https://i.ytimg.com/vi/Ctc0CUIJUaE/hq2.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBbaR77lLsgL9aAtXZSn_wrPPTmBA',
        link: 'https://www.youtube.com/watch?v=Ctc0CUIJUaE',
        visualizaciones: 6750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Videos', null, {});
  }
};
