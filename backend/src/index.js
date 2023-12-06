/* eslint no-console: "off" */
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const orm = require('./models');

const port = process.env.PORT || 3002;

orm.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(port, (error) => {
            if (error) {
                console.error('Failed', error);
            }
            console.log(`server is running at http://localhost:${port}`);
            return app;
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });