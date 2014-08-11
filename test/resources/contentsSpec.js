var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/contents.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#contents()", function(){
        it("should send a GET request to /admin/api/pages/1/contents", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/pages/1/contents')
                .reply(200, []);
            API.contents('pages', 1, {}, function(error, contents) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#content()", function(){
        it("should return the same content object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/pages/1/contents/1')
                .reply(200, { id: 1, name: 'Content 1' });
            API.content('pages', 1, 1, {}, function(error, content) {
                expect(typeof content).to.eq('object');
                expect(content.id).to.eq(1);
                expect(content.name).to.eq('Content 1');
            });
        });
        it("should send a GET request to /admin/api/pages/1/content/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/pages/1/contents/1')
                .reply(200, []);
            API.content('pages', 1, 1, {}, function(error, content) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createContent()", function(){
        it("should send a POST request to /admin/api/pages/1/contents", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/pages/1/contents')
                .reply(200, {});
            API.createContent('pages', 1, {}, function(error, content) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteContent()", function(){
        it("should send a DELETE request to /admin/api/pages/1/contents/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/pages/1/contents/1')
                .reply(200, {});
            API.deleteContent('pages', 1, 1, function(error, content) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#moveContent()", function(){
        it("should send a PUT request to /admin/api/pages/1/contents/1/move", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/pages/1/contents/1/move')
                .reply(200, {});
            API.moveContent('pages', 1, 1, {}, function(error, content) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
