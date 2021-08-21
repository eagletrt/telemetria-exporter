const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(process.cwd(), '.env')
});

function getPathCwd(address) {
    return path.resolve(process.cwd(), address);
}
function getPathDirname(address) {
    return path.resolve(__dirname, '..', address);
}

const CONFIG = {
    SERVER: {
        PORT: process.env.SERVER_PORT || 80,
        PORT_HTTPS: process.env.SERVER_PORT_HTTPS || 443
    },
    FRONTEND: {
        PATH: getPathDirname(process.env.FRONTEND_PATH || 'frontend')
    },
    MONGODB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost:27017',
        OPTIONS: {},
        DATABASE: process.env.MONGODB_DATABASE || 'eagle_test',
    }
};

module.exports = CONFIG;
