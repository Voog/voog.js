module.exports = {
    comments: function(article_id, parameters, callback) {
        var url = '/articles/' + article_id + '/comments';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    comment: function(article_id, id, parameters, callback) {
        var url = '/articles/' + article_id + '/comments/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    createComment: function(article_id, data, callback) {
        var url = '/articles/' + article_id + '/comments';
        this._post(url, data, function(error, body) {
            callback(error, body || {});
        });
    },

    toggleSpamComment: function(article_id, id, callback) {
        var url = '/articles/' + article_id + '/comments/' + id + '/toggle_spam';
        this._post(url, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteComment: function(article_id, id, callback) {
        var url = '/articles/' + article_id + '/comments/' + id;
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteSpamComments: function(article_id, callback) {
        var url = '/articles/' + article_id + '/comments/delete_spam';
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    }
};
