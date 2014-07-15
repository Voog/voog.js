var extend = require('extend'),
    Voog = require('./client');

Voog.prototype = extend(Voog.prototype, require('./resources/tags.js'));

module.exports = Voog;
