var mime = require('mime'),
    request = require('request'),
    nodeproxy = require('nodeproxy'),
    fs = require('fs');

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

    /**
     * Goes through the whole upload process
     * @param {string}              file     path to the file to be uploaded
     * @param {object}              options  extra parameters, e.g mediaset_id
     * @param {Function(err, data)} callback function
     */
    uploadAndConfirmAsset: function(file, options, callback) {
        var mimeType = mime.lookup(file),
            fileSize = fs.statSync(file)["size"],
            originalFile = file,
            data = {
                filename: file.split('/').pop(),
                size: fileSize,
                content_type: mimeType
            },
            confirmData = {};

        if (options && options.mediaset_id) {
          confirmData.mediaset_id = options.mediaset_id
        }

        this._post('/assets', data, nodeproxy(function(error, body) {
            if (!error && body) {
                var uploadUrl = body.upload_url;
                var confirmUrl = body.confirm_url;

                this._s3upload(uploadUrl, originalFile, nodeproxy(function(error, body) {
                    if (!error && body) {
                        var assetId = body.id;
                        this._put(confirmUrl, confirmData, callback);
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
