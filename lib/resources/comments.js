module.exports = {
    comments: function(article_id, parameters, callback) {
        var url = '/articles/' + article_id + '/comments';
        this._get(url, parameters, callback);
    },

    comment: function(article_id, id, parameters, callback) {
        var url = '/articles/' + article_id + '/comments/' + id;
        this._get(url, parameters, callback);
    },

    createComment: function(article_id, data, callback) {
        var url = '/articles/' + article_id + '/comments';
        this._post(url, data, callback);
    },

    toggleSpamComment: function(article_id, id, callback) {
        var url = '/articles/' + article_id + '/comments/' + id + '/toggle_spam';
        this._post(url, callback);
    },

    deleteComment: function(article_id, id, callback) {
        var url = '/articles/' + article_id + '/comments/' + id;
        this._delete(url, callback);
    },

    deleteSpamComments: function(article_id, callback) {
        var url = '/articles/' + article_id + '/comments/delete_spam';
        this._delete(url, callback);
    }
};
