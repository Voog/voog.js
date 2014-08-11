module.exports = {
    texts: function(parameters, callback) {
        var url = '/texts';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    text: function(id, parameters, callback) {
        var url = '/texts/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    updateText: function(id, data, callback) {
        var url = '/texts/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    }
}
