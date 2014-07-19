module.exports = {
    contentPartials: function(parameters, callback) {
        var url = '/content_partials';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    contentPartial: function(id, parameters, callback) {
        var url = '/content_partials/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    updateContentPartial: function(id, data, callback) {
        var url = '/content_partials/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    }
};
