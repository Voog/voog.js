module.exports = {
    people: function(parameters, callback) {
        var url = '/people';
        this._get(url, parameters, callback);
    },

    person: function(id, parameters, callback) {
        var url = '/people/' + id;
        this._get(url, parameters, callback);
    }
}
