module.exports = {
    mediaSets: function(parameters, callback) {
        var url = '/media_sets';
        this._get(url, parameters, callback);
    },

    mediaSet: function(id, parameters, callback) {
        var url = '/media_sets/' + id;
        this._get(url, parameters, callback);
    },

    createMediaSet: function(data, callback) {
        var url = '/media_sets';
        this._post(url, data, callback);
    },

    updateMediaSet: function(id, data, callback) {
        var url = '/media_sets/' + id;
        this._put(url, data, callback);
    },

    deleteMediaSet: function(id, callback) {
        var url = '/media_sets/' + id;
        this._delete(url, callback);
    },

    mediaSetAddAssets: function(id, params, callback) {
        var url = '/media_sets/' + id + '/add_assets';
        this._post(url, params, callback);
    }
}
