contentParentKinds = ['articles', 'elements', 'languages', 'pages'];
module.exports = {
    contents: function(parent_kind, parent_id, parameters, callback) {
        if (contentParentKinds.indexOf(parent_kind) < 0) { return };

        var url = ['', parent_kind, parent_id, 'contents'].join('/');
        this._get(url, parameters, callback);
    },

    content: function(parent_kind, parent_id, id, parameters, callback) {
        if (contentParentKinds.indexOf(parent_kind) < 0) { return };

        var url = ['', parent_kind, parent_id, 'contents', id].join('/');
        this._get(url, parameters, callback);
    },

    createContent: function(parent_kind, parent_id, data, callback) {
        if (contentParentKinds.indexOf(parent_kind) < 0) { return };

        var url = ['', parent_kind, parent_id, 'contents'].join('/');
        this._post(url, data, callback);
    },

    deleteContent: function(parent_kind, parent_id, id, callback) {
        if (contentParentKinds.indexOf(parent_kind) < 0) { return };

        var url = ['', parent_kind, parent_id, 'contents', id].join('/');
        this._delete(url, callback);
    },

    moveContent: function(parent_kind, parent_id, id, parameters, callback) {
        if (contentParentKinds.indexOf(parent_kind) < 0) { return };

        var url = ['', parent_kind, parent_id, 'contents', id, 'move'].join('/');
        this._put(url, parameters, callback);
    }
}
