module.exports = {
    layouts: function(parameters, callback) {
        var url = '/layouts';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    layout: function(id, parameters, callback) {
        var url = '/layouts/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    createLayout: function(data, callback) {
        var url = '/layouts';
        this._post(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    updateLayout: function(id, data, callback) {
        var url = '/layouts/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteLayout: function(id, callback) {
        var url = '/layouts/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    }
}
