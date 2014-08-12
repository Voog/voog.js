module.exports = {
    nodes: function(parameters, callback) {
        var url = '/nodes';
        this._get(url, parameters, callback);
    },

    node: function(id, parameters, callback) {
        var url = '/nodes/' + id;
        this._get(url, parameters, callback);
    },

    moveNode: function(id, data, callback) {
        var url = '/nodes/' + id + '/move';
        this._put(url, data, callback);
    },

    updateNode: function(id, data, callback) {
        var url = '/nodes/' + id;
        this._put(url, data, callback);
    }
}
