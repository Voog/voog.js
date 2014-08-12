module.exports = {
    site: function(parameters, callback) {
        var url = '/site';
        this._get(url, parameters, callback);
    },

    updateSite: function(data, callback) {
        var url = '/site';
        this._put(url, data, callback);
    },

    patchSite: function(data, callback) {
        var url = '/site';
        this._patch(url, data, callback);
    },

    updateSiteData: function(key, data, callback) {
        var url = '/site/data/' + key;
        this._put(url, data, callback);
    },

    deleteSiteData: function(key, callback) {
        var url = '/site/data/' + key;
        this._delete(url, callback);
    }
}
