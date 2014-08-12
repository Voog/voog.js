module.exports = {
    articles: function(parameters, callback) {
        var url = '/articles';
        this._get(url, parameters, callback);
    },

    article: function(id, parameters, callback) {
        var url = '/articles/' + id;
        this._get(url, parameters, callback);
    },

    createArticle: function(data, callback) {
        var url = '/articles';
        this._post(url, data, callback);
    },

    updateArticle: function(id, data, callback) {
        var url = '/articles/' + id;
        this._put(url, data, callback);
    },

    patchArticle: function(id, data, callback) {
        var url = '/articles/' + id;
        this._patch(url, data, callback);
    },

    deleteArticle: function(id, callback) {
        var url = '/articles/' + id;
        this._delete(url, callback);
    },

    updateArticleData: function(article_id, id, data, callback) {
        var url = '/articles/' + article_id + '/data/' + id;
        this._put(url, data, callback);
    },

    deleteArticleData: function(article_id, id, callback) {
        var url = '/articles/' + article_id + '/data/' + id;
        this._delete(url, callback);
    }
}
