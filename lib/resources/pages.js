module.exports = {
    pages: function(parameters, callback) {
        var url = '/pages';
        this._get(url, parameters, callback);
    },

    page: function(id, parameters, callback) {
        var url = '/pages/' + id;
        this._get(url, parameters, callback);
    },

    createPage: function(data, callback) {
        var url = '/pages';
        this._post(url, data, callback);
    },

    updatePage: function(id, data, callback) {
        var url = '/pages/' + id;
        this._put(url, data, callback);
    },

    patchPage: function(id, data, callback) {
        var url = '/pages/' + id;
        this._patch(url, data, callback);
    },

    deletePage: function(id, callback) {
        var url = '/pages/' + id;
        this._delete(url, callback);
    },

    updatePageData: function(page_id, id, data, callback) {
        var url = '/pages/' + page_id + '/data/' + id;
        this._put(url, data, callback);
    },

    deletePageData: function(page_id, id, callback) {
        var url = '/pages/' + page_id + '/data/' + id;
        this._delete(url, callback);
    }
}
