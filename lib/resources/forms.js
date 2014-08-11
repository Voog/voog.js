module.exports = {
    forms: function(parameters, callback) {
        var url = '/forms';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    form: function(id, parameters, callback) {
        var url = '/forms/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    updateForm: function(id, data, callback) {
        var url = '/forms/' + id;
        this._put(url, data, function(error, body) {
            callback(error, body || {});
        });
    }
}
