const path = require('path');

module.exports = {
    PORT: 8000,
    PORT_HTTPS: 445,
    MONGO: {
        uri: 'mongodb://localhost:27017',
        options: {},
        database: 'eagle_test'
    },
    DIST_PATH: path.join(__dirname, 'frontend')
};
