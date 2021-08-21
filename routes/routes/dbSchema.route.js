const { MongoClient } = require('mongodb');
const { MongoScanner } = require('mongo-scanner');
const { Logger } = require('euberlog');

const { MONGO } = require('../../config');
const mongoScanner = new MongoScanner(MONGO.uri, null, { 
    excludeSystem: true,
    ignoreLackOfPermissions: true
});

const logger = new Logger({ scope: 'DBSCHEMA' });

module.exports = function (router) {

    router.get('/database-schema', async (_req, res) => {
        logger.info('api/database-schema');
        try {
            logger.debug('Uri is ', MONGO.uri);
            const collections = await mongoScanner.listCollections(MONGO.database);
            const connection = await MongoClient.connect(MONGO.uri, { useUnifiedTopology: true });
            const db = connection.db(MONGO.database);
            const dbSchema = await collections.reduce(async (acc, coll) => ({
                ...(await acc),
                [coll]: (await db.collection(coll).find({ id: undefined }).toArray()).map(s => s.sessionName)
            }), Promise.resolve({}));
            res.status(200).send(dbSchema);
        }
        catch (error) {
            logger.warning('Uri was ', MONGO.uri);
            logger.error('Error in getting database schema', error);
            res.status(500).send(error);
        }
    });

};