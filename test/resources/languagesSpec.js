var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/languages.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#languages()", function(){
        it("should return an array of languages", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/languages')
                .reply(200, [{
                    id: 1,
                    name: 'Language 1'
                }, {
                    id: 2,
                    name: 'Language 2'
                }]);
            API.languages({}, function(error, languages) {
                expect(languages.length).to.eq(2);
                expect(typeof languages).to.eq('object');
                expect(languages.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/languages", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/languages')
                .reply(200, []);
            API.languages({}, function(error, languages) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#language()", function(){
        it("should return the same language object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/languages/1')
                .reply(200, { id: 1, name: 'Language 1' });
            API.language(1, {}, function(error, language) {
                expect(typeof language).to.eq('object');
                expect(language.id).to.eq(1);
                expect(language.name).to.eq('Language 1');
            });
        });
        it("should send a GET request to /admin/api/language/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/languages/1')
                .reply(200, []);
            API.language(1, {}, function(error, language) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createLanguage()", function(){
        it("should send a POST request to /admin/api/languages", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/languages')
                .reply(200, {});
            API.createLanguage({}, function(error, language) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateLanguage()", function(){
        it("should send a PUT request to /admin/api/languages/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/languages/1')
                .reply(200, {});
            API.updateLanguage(1, {}, function(error, language) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteLanguage()", function(){
        it("should send a DELETE request to /admin/api/languages/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/languages/1')
                .reply(200, '');
            API.deleteLanguage(1, function(error, language) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#moveLanguage()", function(){
        it("should send a DELETE request to /admin/api/languages/1/move", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/languages/1/move')
                .reply(200, '');
            API.moveLanguage(1, {}, function(error, language) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#enableLanguageAutodetect()", function(){
        it("should send a DELETE request to /admin/api/languages/enable_autodetect", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/languages/enable_autodetect')
                .reply(200, '');
            API.enableLanguageAutodetect(function(error, language) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
