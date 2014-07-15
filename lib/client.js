var request = require('request'),
    extend = require('extend');

var API_URL_PROTOCOL = 'http://',
    API_URL_ENDPOINT = '/admin/api';

var Voog = function Voog(host, api_token) {
    this.host = host || '';
    this.api_token = api_token || '';
};

Voog.prototype._get = function(url, parameters, callback) {
    var getUrl = API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url;
    request({
        method: 'GET',
        url: getUrl,
        json: true,
        headers: {
            'X-API-TOKEN': this.api_token
        },
        qs: parameters
    }, function(error, response, body) {
        if (!error && !!response.statusCode && !isSuccessCode(response.statusCode)) {
            if (body && body.message) { error = new Error(body.message) };
        }
        if (callback && typeof callback == 'function') { callback(error || null, body || {}) };
    });
};

Voog.prototype._post = function(url, parameters, callback) {
    var postUrl = API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url;

    request({
        method: 'POST',
        url: postUrl,
        json: true,
        headers: {
            'X-API-TOKEN': this.api_token
        },
        qs: parameters || {}
    }, function(error, response, body) {
        if (!error && !!response.statusCode && !isSuccessCode(response.statusCode)) {
            if (body && body.message) { error = new Error(body.message) };
        }
        if (callback && typeof callback == 'function') { callback(error || null, body || {}) };
    });
};

Voog.prototype._put = function(url, data, callback) {
    var putUrl = API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url;

    request({
        method: 'PUT',
        url: putUrl,
        json: true,
        headers: {
            'X-API-TOKEN': this.api_token
        },
        qs: {tag: data}
    }, function(error, response, body) {
        if (!error && !!response.statusCode && !isSuccessCode(response.statusCode)) {
            if (body && body.message) { error = new Error(body.message) };
        }
        if (callback && typeof callback == 'function') { callback(error || null, body || {}) };
    });
};

Voog.prototype._delete = function(url, callback) {
    var deleteUrl = API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url;

    request({
        method: 'DELETE',
        url: deleteUrl,
        json: true,
        headers: {
            'X-API-TOKEN': this.api_token
        }
    }, function(error, response, body) {
        if (!error && !!response.statusCode && !isSuccessCode(response.statusCode)) {
            if (body && body.message) { error = new Error(body.message) };
        }
        if (callback && typeof callback == 'function') { callback(error || null, body || "") };
    });
};

var isSuccessCode = function(code) {
    return (code == 200 || code == 204);
}

module.exports = Voog;
