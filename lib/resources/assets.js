module.exports = {
    assets: function(parameters, callback) {
        var url = '/assets';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    asset: function(id, parameters, callback) {
        var url = '/assets/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    createAsset: function(data, callback) {
        var url = '/assets';
        this._post(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    confirmAsset: function(id, callback) {
        var url = '/assets/' + id + '/confirm';
        this._put(url, {}, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteAsset: function(id, callback) {
        var url = '/assets/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    }
}
