var extend = require('extend'),
    Voog = require('./client');

Voog.prototype = extend(Voog.prototype,
    require('./resources/articles.js'),
    require('./resources/pages.js'),
    require('./resources/people.js'),
    require('./resources/tags.js')
);

module.exports = Voog;
