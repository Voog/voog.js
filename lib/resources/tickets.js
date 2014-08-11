module.exports = {
    tickets: function(form_id, parameters, callback) {
        var url = ['', 'forms', form_id, 'tickets'].join('/');
        this._get(url, parameters, function(error, body) {
            callback(error, body || []);
        });
    },

    ticket: function(form_id, id, parameters, callback) {
        var url = ['', 'forms', form_id, 'tickets', id].join('/');
        this._get(url, parameters, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteTicket: function(form_id, id, callback) {
        var url = ['', 'forms', form_id, 'tickets', id].join('/');
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    },

    deleteSpamTickets: function(form_id, callback) {
        var url = ['', 'forms', form_id, 'tickets', 'delete_spam'].join('/');
        this._delete(url, function(error, body) {
            callback(error, body || {});
        });
    }
}
