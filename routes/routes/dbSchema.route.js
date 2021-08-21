const { MongoClient } = require('mongodb');
const { MongoScanner } = require('mongo-scanner');
const { Logger } = require('euberlog');

const { MONGODB } = require('../../utils/config');
const mongoScanner = new MongoScanner(MONGODB.URI, null, { 
    excludeSystem: true,
    ignoreLackOfPermissions: true
});

const logger = new Logger({ scope: 'DBSCHEMA' });

module.exports = function (router) {

    router.get('/database-schema', async (_req, res) => {
        logger.info('api/database-schema');
        try {
            logger.debug('Uri is ', MONGODB.URI);
            const collections = await mongoScanner.listCollections(MONGODB.DATABASE);
            const connection = await MongoClient.connect(MONGODB.URI, { useUnifiedTopology: true, ...MONGODB.OPTIONS });
            const db = connection.db(MONGODB.DATABASE);
            const dbSchema = await collections.reduce(async (acc, coll) => ({
                ...(await acc),
                [coll]: (await db.collection(coll).find({ id: undefined }).toArray()).map(s => s.sessionName)
            }), Promise.resolve({}));
            res.status(200).send(dbSchema);
        }
        catch (error) {
            logger.warning('Uri was ', MONGODB.URI);
            logger.error('Error in getting database schema', error);
            res.status(500).send(error);
        }
    });

};