module.exports = {
    languages: function(parameters, callback) {
        var url = '/languages';
        this._get(url, parameters, callback);
    },

    language: function(id, parameters, callback) {
        var url = '/languages/' + id;
        this._get(url, parameters, callback);
    },

    createLanguage: function(data, callback) {
        var url = '/languages';
        this._post(url, data, callback);
    },

    updateLanguage: function(id, data, callback) {
        var url = '/languages/' + id;
        this._put(url, data, callback);
    },

    deleteLanguage: function(id, callback) {
        var url = '/languages/' + id;
        this._delete(url, callback);
    },

    moveLanguage: function(id, params, callback) {
        var url = '/languages/' + id + '/move';
        this._put(url, params, callback);
    },

    enableLanguageAutodetect: function(callback) {
        var url = '/languages/enable_autodetect';
        this._put(url, {}, callback);
    }
}
