module.exports = {
    tags: function(parameters, callback) {
        var url = '/tags';
        this._get(url, parameters, callback);
    },

    tag: function(id, parameters, callback) {
        var url = '/tags/' + id;
        this._get(url, parameters, callback);
    },

    updateTag: function(id, data, callback) {
        var url = '/tags/' + id;
        this._put(url, data, callback);  
    },

    patchTag: function(id, data, callback) {
        var url = '/tags/' + id;
        this._patch(url, data, callback);  
    },

    deleteTag: function(id, callback) {
        var url = '/tags/' + id;
        this._delete(url, callback);
    }

}
