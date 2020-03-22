module.exports = function (collectionsToExport) {
    return Object.keys(collectionsToExport)
        .map(collection => ({
            match: collection,
            query: { sessionName: { $in: collectionsToExport[collection] } }
        }));
}
