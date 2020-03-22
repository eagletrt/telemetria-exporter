module.exports = function (collectionsToExport) {
    return Object.keys(collectionsToExport)
        .map(collection => ({
            collections: collection,
            query: { sessionName: { $in: collectionsToExport[collection] } }
        }));
}
