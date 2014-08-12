module.exports = {
    forms: function(parameters, callback) {
        var url = '/forms';
        this._get(url, parameters, callback);
    },

    form: function(id, parameters, callback) {
        var url = '/forms/' + id;
        this._get(url, parameters, callback);
    },

    updateForm: function(id, data, callback) {
        var url = '/forms/' + id;
        this._put(url, data, callback);
    }
}
