var request = require('request'),
    extend = require('extend'),
    mime = require('mime'),
    url = require('url');

var DEFAULT_PROTOCOL = 'http:',
    API_URL_ENDPOINT = '/admin/api/';

/**
 * API Client constructor method
 * @param {string} host      site host in the form of [[[http:|https:]//]www.]HOSTNAME.TLD
 * @param {string} api_token API token for the given user
 * @param {string} protocol  'http' or 'https', overrides the one given with the host (optional)
 */
var Voog = function Voog(host, api_token, protocol) {
    var parsedHost = url.parse(host);
    this.host = parsedHost.host || host || '';
    this.api_token = api_token || '';
    this.protocol = ((protocol || parsedHost.protocol || DEFAULT_PROTOCOL) + ':').replace(/::*/, ':');
};

Voog.prototype._get = function(path, parameters, callback) {
    var parsedUrl = url.parse(path),
        getUrl;
    if (parsedUrl.host) {
      getUrl = parsedUrl;
    } else {
      getUrl = url.parse(this.protocol + '//' + this.host + (API_URL_ENDPOINT + path).replace(/\/\/+/, '/'));
    }
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

Voog.prototype._post = function(path, parameters, callback) {
    var parsedUrl = url.parse(path),
        postUrl;
    if (parsedUrl.host) {
      postUrl = parsedUrl;
    } else {
      postUrl = url.parse(this.protocol + '//' + this.host + (API_URL_ENDPOINT + path).replace(/\/\//, '/'));
    }
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

Voog.prototype._put = function(path, data, callback) {
    var parsedUrl = url.parse(path),
        putUrl;
    if (parsedUrl.host) {
      putUrl = parsedUrl;
    } else {
      putUrl = url.parse(this.protocol + '//' + this.host + (API_URL_ENDPOINT + path).replace(/\/\//, '/'));
    }
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

Voog.prototype._delete = function(path, callback) {
    deleteUrl = url.parse(this.protocol + '//' + this.host + (API_URL_ENDPOINT + path).replace(/\/\//, '/'));
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

Voog.prototype._patch = function(path, data, callback) {
    var parsedUrl = url.parse(path),
        patchUrl;
    if (parsedUrl.host) {
      patchUrl = parsedUrl;
    } else {
      patchUrl = url.parse(this.protocol + '//' + this.host + (API_URL_ENDPOINT + path).replace(/\/\//, '/'));
    }
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

Voog.prototype._s3upload = function(path, file, callback) {
    var uploadUrl = (url.indexOf('://') > -1 ? url : this.protocol + this.host + API_URL_ENDPOINT + path),
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
