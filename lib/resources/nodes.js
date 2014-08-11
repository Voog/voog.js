module.exports = {
    nodes: function(parameters, callback) {
        var url = '/nodes';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    node: function(id, parameters, callback) {
        var url = '/nodes/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    moveNode: function(id, data, callback) {
        var url = '/nodes/' + id + '/move';
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    updateNode: function(id, data, callback) {
        var url = '/nodes/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    }
}
