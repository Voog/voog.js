module.exports = {
    layoutAssets: function(parameters, callback) {
        var url = '/layout_assets';
        this._get(url, parameters, callback);
    },

    layoutAsset: function(id, parameters, callback) {
        var url = '/layout_assets/' + id;
        this._get(url, parameters, callback);
    },

    createLayoutAsset: function(data, callback) {
        var url = '/layout_assets';
        if (data.file && (data.file instanceof fs.ReadStream || data.file instanceof Buffer)) {
            this._multipart_post(url, data, callback);
        } else {
            this._post(url, data, callback);
        }
    },

    updateLayoutAsset: function(id, data, callback) {
        var url = '/layout_assets/' + id;
        this._put(url, data, callback);
    },

    deleteLayoutAsset: function(id, callback) {
        var url = '/layout_assets/' + id;
        this._delete(url, callback);
    }
}
