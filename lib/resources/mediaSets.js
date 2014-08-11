module.exports = {
    mediaSets: function(parameters, callback) {
        var url = '/media_sets';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    mediaSet: function(id, parameters, callback) {
        var url = '/media_sets/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    createMediaSet: function(data, callback) {
        var url = '/media_sets';
        this._post(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    updateMediaSet: function(id, data, callback) {
        var url = '/media_sets/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteMediaSet: function(id, callback) {
        var url = '/media_sets/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    },

    mediaSetAddAssets: function(id, params, callback) {
        var url = '/media_sets/' + id + '/add_assets';
        this._post(url, params, function(error, body) {
            callback(error, body || {});
        });
    }
}
