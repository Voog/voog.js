module.exports = {
    elements: function(parameters, callback) {
        var url = '/elements';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    element: function(id, parameters, callback) {
        var url = '/elements/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    createElement: function(data, callback) {
        var url = '/elements';
        this._post(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    updateElement: function(id, data, callback) {
        var url = '/elements/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteElement: function(id, callback) {
        var url = '/elements/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    },

    moveElement: function(id, params, callback) {
        var url = '/elements/' + id + '/move';
        this._put(url, params, function(error, body) {
            callback(error, body || {});
        })
    }
}
