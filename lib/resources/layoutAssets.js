module.exports = {
    layoutAssets: function(parameters, callback) {
        var url = '/layout_assets';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    layoutAsset: function(id, parameters, callback) {
        var url = '/layout_assets/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    createLayoutAsset: function(data, callback) {
        var url = '/layout_assets';
        this._post(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    updateLayoutAsset: function(id, data, callback) {
        var url = '/layout_assets/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteLayoutAsset: function(id, callback) {
        var url = '/layout_assets/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    }
}
