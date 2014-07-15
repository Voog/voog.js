module.exports = {
    articles: function(parameters, callback) {
        var url = '/articles';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    article: function(id, parameters, callback) {
        var url = '/articles/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    createArticle: function(data, callback) {
        var url = '/articles';
        this._post(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    updateArticle: function(id, data, callback) {
        var url = '/articles/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    patchArticle: function(id, data, callback) {
        var url = '/articles/' + id;
        this._patch(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteArticle: function(id, callback) {
        var url = '/articles/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    },

    updateArticleData: function(article_id, id, data, callback) {
        var url = '/articles/' + article_id + '/data/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteArticleData: function(article_id, id, callback) {
        var url = '/articles/' + article_id + '/data/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    }
}
