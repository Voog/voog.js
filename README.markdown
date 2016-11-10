# Voog.js

NodeJS wrapper for the Voog API, based on the [Ruby gem](http://github.com/Edicy/voog.rb).

Learn more at the [Voog developer central](http://www.voog.com/developers/api) and by reading the [Voog API documentation](http://www.voog.com/developers/api).

## Getting started

First, you have to install the Voog.js module to your project directory 
via `npm install voog`. Alternatively you can add the __'voog.js'__ package to
your Gruntfile as a dependency and let Grunt do all the work.

## API token

To generate your personal **API token** for your site, go to `Account` -> `My profile` and click on "Generate new API token".

## Initializing the client
After you have installed the module, you can start using it in your Gruntfile or other script files.

```
var Voog = require('voog');
var client = new Voog(
    'example.com',                     // site url
    'afcf30182aecfc8155d390d7d4552d14' // API token
);
```

In the rare case of getting an `Error: Cannot find module 'voog'`, your `$NODE_PATH`
environment variable is either unset or incorrect. 
To fix this, add the following line to the end of your ~/.bash_profile:
`export NODE_PATH="<NPM_PATH>/node_modules/"`, where NPM_PATH stands for the first
line of the `npm ls -g` command, e.g `export NODE_PATH="/usr/local/lib/node_modules/"`.

After logging out and back in to your terminal or running `source ~/.bash_profile`, 
the `$NODE_PATH` should be correct and hopefully the module should be globally available now.

## Using the client

Now, the `client` is all set up and you can access virtually all resources by just calling the correct methods.

For example, we want to fetch a specific language with the `id` of 1 and display it:

```
client.language(1, {}, function(error, language) {
    console.log(language);
});
```
This displays the Language as an object:

```
{ 
    id: 1, 
    code: 'en', 
    title: 'ENG', 
        created_at: '2014-07-08T22:12:35.000Z',
    updated_at: '2014-07-08T22:13:18.000Z',
    position: 1,
    default_language: false,
    site_title: 'My new site',
    url: 'http://example.com/admin/api/languages/1',
    move_url: 'http://example.com/admin/api/languages/1/move',
    pages_url: 'http://example.com/admin/api/pages?language_id=1' 
}
```

We can see that its `title` attribute is "ENG". Let's change it to something more verbose:

```
client.updateLanguage(1, {title: 'English'}, function(error, language) {
    console.log(language.title);
});
```
This displays:

```
'English'
```

To see what other methods are available, see the [API documentation](http://www.voog.com/developers/api) 
and browse the code of this module - all methods follow the same principles and should be fairly simple to follow.
