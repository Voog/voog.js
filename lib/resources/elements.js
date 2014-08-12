module.exports = {
    elements: function(parameters, callback) {
        var url = '/elements';
        this._get(url, parameters, callback);
    },

    element: function(id, parameters, callback) {
        var url = '/elements/' + id;
        this._get(url, parameters, callback);
    },

    createElement: function(data, callback) {
        var url = '/elements';
        this._post(url, data, callback);
    },

    updateElement: function(id, data, callback) {
        var url = '/elements/' + id;
        this._put(url, data, callback);
    },

    deleteElement: function(id, callback) {
        var url = '/elements/' + id;
        this._delete(url, callback);
    },

    moveElement: function(id, params, callback) {
        var url = '/elements/' + id + '/move';
        this._put(url, params, callback)
    }
}
