module.exports = {
    texts: function(parameters, callback) {
        var url = '/texts';
        this._get(url, parameters, callback);
    },

    text: function(id, parameters, callback) {
        var url = '/texts/' + id;
        this._get(url, parameters, callback);
    },

    updateText: function(id, data, callback) {
        var url = '/texts/' + id;
        this._put(url, data, callback);
    }
}
