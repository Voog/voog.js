module.exports = {
    layouts: function(parameters, callback) {
        var url = '/layouts';
        this._get(url, parameters, callback);
    },

    layout: function(id, parameters, callback) {
        var url = '/layouts/' + id;
        this._get(url, parameters, callback);
    },

    createLayout: function(data, callback) {
        var url = '/layouts';
        this._post(url, data, callback);
    },

    updateLayout: function(id, data, callback) {
        var url = '/layouts/' + id;
        this._put(url, data, callback);
    },

    deleteLayout: function(id, callback) {
        var url = '/layouts/' + id;
        this._delete(url, callback);
    }
}
