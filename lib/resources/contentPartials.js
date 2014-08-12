module.exports = {
    contentPartials: function(parameters, callback) {
        var url = '/content_partials';
        this._get(url, parameters, callback);
    },

    contentPartial: function(id, parameters, callback) {
        var url = '/content_partials/' + id;
        this._get(url, parameters, callback);
    },

    updateContentPartial: function(id, data, callback) {
        var url = '/content_partials/' + id;
        this._put(url, data, callback);
    }
};
