module.exports = {
    pages: function(parameters, callback) {
        var url = '/pages';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    page: function(id, parameters, callback) {
        var url = '/pages/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    createPage: function(data, callback) {
        var url = '/pages';
        this._post(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    updatePage: function(id, data, callback) {
        var url = '/pages/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    patchPage: function(id, data, callback) {
        var url = '/pages/' + id;
        this._patch(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    deletePage: function(id, callback) {
        var url = '/pages/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    },

    updatePageData: function(page_id, id, data, callback) {
        var url = '/pages/' + page_id + '/data/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    deletePageData: function(page_id, id, callback) {
        var url = '/pages/' + page_id + '/data/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    }
}
