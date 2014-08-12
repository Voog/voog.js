module.exports = {
    elementDefinitions: function(parameters, callback) {
        var url = '/element_definitions';
        this._get(url, parameters, callback);
    },

    elementDefinition: function(id, parameters, callback) {
        var url = '/element_definitions/' + id;
        this._get(url, parameters, callback);
    },

    createElementDefinition: function(data, callback) {
        var url = '/element_definitions';
        this._post(url, data, callback);
    },

    updateElementDefinition: function(id, parameters, callback) {
        var url = '/element_definitions/' + id;
        this._put(url, parameters, callback);
    },

    deleteElementDefinition: function(id, callback) {
        var url = '/element_definitions/' + id;
        this._delete(url, callback);
    }
}
