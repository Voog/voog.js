var request = require('request'),
    extend = require('extend'),
    mime = require('mime');

var API_URL_PROTOCOL = 'http://',
    API_URL_ENDPOINT = '/admin/api';

var Voog = function Voog(host, api_token) {
    this.host = host || '';
    this.api_token = api_token || '';
};

Voog.prototype._get = function(url, parameters, callback) {
    var getUrl = (url.indexOf('http://') > -1 ? url : API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url);
    var that = this;
    request({
        method: 'GET',
        url: getUrl,
        json: true,
        headers: {
            'X-API-TOKEN': this.api_token
        },
        qs: parameters || {}
    }, function(error, response, body) {
        if (!error && !!response.statusCode && !that.isSuccessCode(response.statusCode)) {
            if (body && body.message) { error = new Error(body.message) };
        }
        if (callback && typeof callback == 'function') { callback(error || null, body || {}, response) };
    });
};

Voog.prototype._post = function(url, parameters, callback) {
    var postUrl = (url.indexOf('http://') > -1 ? url : API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url);
    var that = this;
    request({
        method: 'POST',
        url: postUrl,
        json: true,
        headers: {
            'X-API-TOKEN': this.api_token
        },
        body: parameters || {}
    }, function(error, response, body) {
        if (!error && !!response.statusCode && !that.isSuccessCode(response.statusCode)) {
            if (body && body.message) { error = new Error(body.message) };
        }
        if (callback && typeof callback == 'function') { callback(error || null, body || {}, response) };
    });
};

Voog.prototype._put = function(url, data, callback) {
    var putUrl = (url.indexOf('http://') > -1 ? url : API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url);
    var that = this;
    request({
        method: 'PUT',
        url: putUrl,
        json: true,
        headers: {
            'X-API-TOKEN': this.api_token
        },
        body: data || {}
    }, function(error, response, body) {
        if (!error && !!response.statusCode && !that.isSuccessCode(response.statusCode)) {
            if (body && body.message) { error = new Error(body.message) };
        }
        if (callback && typeof callback == 'function') { callback(error || null, body || {}, response) };
    });
};

Voog.prototype._delete = function(url, callback) {
    var deleteUrl = API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url;
    var that = this;
    request({
        method: 'DELETE',
        url: deleteUrl,
        json: true,
        headers: {
            'X-API-TOKEN': this.api_token
        }
    }, function(error, response, body) {
        if (!error && !!response.statusCode && !that.isSuccessCode(response.statusCode)) {
            if (body && body.message) { error = new Error(body.message) };
        }
        if (callback && typeof callback == 'function') { callback(error || null, body || "", response) };
    });
};

Voog.prototype._patch = function(url, data, callback) {
    var patchUrl = (url.indexOf('http://') > -1 ? url : API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url);
    var that = this;
    request({
        method: 'PATCH',
        url: patchUrl,
        json: true,
        headers: {
            'X-API-TOKEN': this.api_token
        },
        body: data
    }, function(error, response, body) {
        if (!error && !!response.statusCode && !that.isSuccessCode(response.statusCode)) {
            if (body && body.message) { error = new Error(body.message) };
        }
        if (callback && typeof callback == 'function') { callback(error || null, body || {}, response) };
    });
};

Voog.prototype._s3upload = function(url, file, callback) {
    var uploadUrl = (url.indexOf('http://') > -1 ? url : API_URL_PROTOCOL + this.host + API_URL_ENDPOINT + url),
        mimeType = mime.lookup(file),
        fileSize = fs.statSync(file)["size"],
        fileBody = fs.readFileSync(file),
        that = this;

    request({
        method: "PUT",
        uri: uploadUrl,
        headers: {
          'x-amz-acl': 'public-read',
          'Content-Type': mimeType,
          'Content-Length': fileSize
        },
        body: fileBody
    }, function(error, response, body) {
        if (!error && !!response.statusCode && !that.isSuccessCode(response.statusCode)) {
            if (body && body.message) { error = new Error(body.message) };
        }
        if (callback && typeof callback == 'function') { callback(error || null, body || {}, response) };
    });
};

Voog.prototype.isSuccessCode = function(code) {
    return (code == 200 || code == 204);
}

module.exports = Voog;
