const mongoback = require('mongoback');
const zl = require('zip-lib');
const { Logger } = require('euberlog');

const remover = require('../../utils/remover');
const pather = require('../../utils/pather');
const getSessions = require('../../utils/get-sessions');

const { MONGODB } = require('../../utils/config');

const logger = new Logger({ scope: 'EXPORT_JSON' });

module.exports = function (router) {

    router.post('/export/json', async (req, res) => {
        logger.info('api/export/json');

        const {
            timestamp,
            folderPath,
            zipPath
        } = pather();
        logger.debug('timestamp is', timestamp);

        const collectionsToExport = req.body.collectionsToExport;
        logger.debug('collections are ', collectionsToExport);
        const sessionsToExport = getSessions(collectionsToExport);
            
        try {
            await mongoback.mongoExport({
                uri: MONGODB.URI,
                collections: { [MONGODB.DATABASE]: sessionsToExport },
                jsonArray: true,
                throwIfLackOfPermissions: true,
                throwIfOneFails: true,
                outDir: folderPath
            });

            const zip = new zl.Zip();
            zip.addFolder(folderPath);
            await zip.archive(zipPath);
            
            res.sendFile(zipPath, async () => await remover(timestamp));
        }
        catch (error) {
            logger.warning('Timestamp was ', timestamp);
            logger.error('Error in exporting json', error);
            res.status(500).send(error);
        }
    });

};