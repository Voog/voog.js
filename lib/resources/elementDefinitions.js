module.exports = {
    elementDefinitions: function(parameters, callback) {
        var url = '/element_definitions';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    elementDefinition: function(id, parameters, callback) {
        var url = '/element_definitions/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    createElementDefinition: function(data, callback) {
        var url = '/element_definitions';
        this._post(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    updateElementDefinition: function(id, parameters, callback) {
        var url = '/element_definitions/' + id;
        this._put(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteElementDefinition: function(id, callback) {
        var url = '/element_definitions/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    }
}
