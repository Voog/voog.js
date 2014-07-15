module.exports = {
    people: function(parameters, callback) {
        var url = '/people';
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    person: function(id, parameters, callback) {
        var url = '/people/' + id;
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    }
}
