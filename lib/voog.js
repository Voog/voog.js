var extend = require('extend'),
    request = require('request'),
    querystring = require('querystring');

var API_URL_PROTOCOL = 'http://',
    API_URL_ENDPOINT = '/admin/api';

var Voog = function(host, api_token) {
    this.host = host;
    this.api_token = api_token;
};

module.exports = Voog;

Voog.prototype._get = function(url, parameters, callback) {
    var getUrl = API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url + '?' + querystring.stringify(parameters);

    request.get({
        url: getUrl,
        json: true,
        headers: {
            'X_API_TOKEN': this.api_token
        }
    }, function(error, response, body) {
        if (!error && !!response.statusCode && response.statusCode !== 200) {
            error = new Error(body.message);
        }
        callback(error, body || {});
    });
};

Voog.prototype.getLanguages = function(parameters, callback) {
    this._get('/languages', parameters, function(error, body) {
        callback(error, body || {});
    });
};
