var extend = require('extend'),
    Voog = require('./client');

Voog.prototype = extend(Voog.prototype,
    require('./resources/articles.js'),
    require('./resources/assets.js'),
    require('./resources/comments.js'),
    require('./resources/contentPartials.js'),
    require('./resources/contents.js'),
    require('./resources/elementDefinitions.js'),
    require('./resources/elements.js'),
    require('./resources/forms.js'),
    require('./resources/languages.js'),
    require('./resources/layoutAssets.js'),
    require('./resources/layouts.js'),
    require('./resources/mediaSets.js'),
    require('./resources/nodes.js'),
    require('./resources/pages.js'),
    require('./resources/people.js'),
    require('./resources/site.js'),
    require('./resources/tags.js'),
    require('./resources/texts.js'),
    require('./resources/tickets.js')
);

module.exports = Voog;
