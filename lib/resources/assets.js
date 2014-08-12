module.exports = {
    assets: function(parameters, callback) {
        var url = '/assets';
        this._get(url, parameters, callback);
    },

    asset: function(id, parameters, callback) {
        var url = '/assets/' + id;
        this._get(url, parameters, callback);
    },

    createAsset: function(data, callback) {
        var url = '/assets';
        this._post(url, data, callback);
    },

    confirmAsset: function(id, callback) {
        var url = '/assets/' + id + '/confirm';
        this._put(url, {}, callback);
    },

    deleteAsset: function(id, callback) {
        var url = '/assets/' + id;
        this._delete(url, callback);
    }
}
