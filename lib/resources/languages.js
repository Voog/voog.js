module.exports = {
    languages: function(parameters, callback) {
        var url = '/languages';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    language: function(id, parameters, callback) {
        var url = '/languages/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    createLanguage: function(data, callback) {
        var url = '/languages';
        this._post(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    updateLanguage: function(id, data, callback) {
        var url = '/languages/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteLanguage: function(id, callback) {
        var url = '/languages/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    },

    moveLanguage: function(id, params, callback) {
        var url = '/languages/' + id + '/move';
        this._put(url, params, function(error, body) {
            callback(error, body || {});
        });
    },

    enableLanguageAutodetect: function(callback) {
        var url = '/languages/enable_autodetect';
        this._put(url, {}, function(error, body) {
            callback(error, body || {});
        });
    }
}
