var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/pages.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#pages()", function(){
        it("should return an array of pages", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/pages')
                .reply(200, [{
                    id: 1,
                    name: 'Page 1'
                }, {
                    id: 2,
                    name: 'Page 2'
                }]);
            API.pages({}, function(error, pages) {
                expect(pages.length).to.eq(2);
                expect(typeof pages).to.eq('object');
                expect(pages.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/pages", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/pages')
                .reply(200, []);
            API.pages({}, function(error, pages) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#page()", function(){
        it("should return the same page object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/pages/1')
                .reply(200, { id: 1, name: 'Page 1' });
            API.page(1, {}, function(error, page) {
                expect(typeof page).to.eq('object');
                expect(page.id).to.eq(1);
                expect(page.name).to.eq('Page 1');
            });
        });
        it("should send a GET request to /admin/api/page/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/pages/1')
                .reply(200, []);
            API.page(1, {}, function(error, page) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updatePage()", function(){
        it("should send a PUT request to /admin/api/pages/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/pages/1')
                .reply(200, {});
            API.updatePage(1, {}, function(error, page) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#patchPage()", function(){
        it("should send a PATCH request to /admin/api/pages/1", function(){
            var scope = nock('http://testsite.com')
                .patch('/admin/api/pages/1')
                .reply(200, {});
            API.patchPage(1, {}, function(error, page) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createPage()", function(){
        it("should send a POST request to /admin/api/pages", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/pages')
                .reply(200, {});
            API.createPage({}, function(error, page) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deletePage()", function(){
        it("should send a DELETE request to /admin/api/pages/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/pages/1')
                .reply(200, '');
            API.deletePage(1, function(error, page) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updatePageData()", function(){
        it("should send a PUT request to /admin/api/pages/1/data/test", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/pages/1/data/test')
                .reply(200, '');
            API.updatePageData(1, 'test', "", function(error, page) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deletePageData()", function(){
        it("should send a DELETE request to /admin/api/pages/1/data/test", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/pages/1/data/test')
                .reply(200, '');
            API.deletePageData(1, 'test', function(error, page) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
