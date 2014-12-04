var mime = require('mime'),
    request = require('request'),
    nodeproxy = require('nodeproxy');

module.exports = {
    assets: function(parameters, callback) {
        var url = '/assets';
        this._get(url, parameters, callback);
    },

    asset: function(id, parameters, callback) {
        var url = '/assets/' + id;
        this._get(url, parameters, callback);
    },

    createAsset: function(data, callback) {
        var url = '/assets';
        this._post(url, data, callback);
    },

    uploadAndConfirmAsset: function(file, callback) {
        var mimeType = mime.lookup(file),
            fileSize = fs.statSync(file)["size"],
            originalFile = file,
            data = {
                filename: file.split('/').pop(),
                size: fileSize,
                content_type: mimeType
            };

        this._post('/assets', data, nodeproxy(function(error, body) {
            if (!error && body) {
                var uploadUrl = body.upload_url;
                var confirmUrl = body.confirm_url;
                console.log(uploadUrl, confirmUrl, data);

                this._s3upload(uploadUrl, originalFile, nodeproxy(function(error, body) {
                    if (!error && body) {
                        var assetId = body.id;
                        this._put(confirmUrl, {}, callback);
                    }
                }, this));
            }
        }, this));
    },

    confirmAsset: function(id, callback) {
        var url = '/assets/' + id + '/confirm';
        this._put(url, {}, callback);
    },

    deleteAsset: function(id, callback) {
        var url = '/assets/' + id;
        this._delete(url, callback);
    }
};
