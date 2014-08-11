module.exports = {
    site: function(parameters, callback) {
        var url = '/site';
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    updateSite: function(data, callback) {
        var url = '/site';
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    patchSite: function(data, callback) {
        var url = '/site';
        this._patch(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    updateSiteData: function(key, data, callback) {
        var url = '/site/data/' + key;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteSiteData: function(key, callback) {
        var url = '/site/data/' + key;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    }
}
