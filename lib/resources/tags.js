module.exports = {
    tags: function(parameters, callback) {
        var url = '/tags';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    tag: function(id, parameters, callback) {
        var url = '/tags/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    updateTag: function(id, data, callback) {
        var url = '/tags/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });  
    },

    patchTag: function(id, data, callback) {
        var url = '/tags/' + id;
        this._patch(url, data, function(error, body) {
            callback(error, body || {});
        });  
    },

    deleteTag: function(id, callback) {
        var url = '/tags/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    }

}
