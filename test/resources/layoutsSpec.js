var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/layouts.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#layouts()", function(){
        it("should return an array of layouts", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/layouts')
                .reply(200, [{
                    id: 1,
                    name: 'Layout 1'
                }, {
                    id: 2,
                    name: 'Layout 2'
                }]);
            API.layouts({}, function(error, layouts) {
                expect(layouts.length).to.eq(2);
                expect(typeof layouts).to.eq('object');
                expect(layouts.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/layouts", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/layouts')
                .reply(200, []);
            API.layouts({}, function(error, layouts) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#layout()", function(){
        it("should return the same layout object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/layouts/1')
                .reply(200, { id: 1, name: 'Layout 1' });
            API.layout(1, {}, function(error, layout) {
                expect(typeof layout).to.eq('object');
                expect(layout.id).to.eq(1);
                expect(layout.name).to.eq('Layout 1');
            });
        });
        it("should send a GET request to /admin/api/layout/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/layouts/1')
                .reply(200, []);
            API.layout(1, {}, function(error, layout) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createLayout()", function(){
        it("should send a POST request to /admin/api/layouts", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/layouts')
                .reply(200, {});
            API.createLayout({}, function(error, layout) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateLayout()", function(){
        it("should send a PUT request to /admin/api/layouts/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/layouts/1')
                .reply(200, {});
            API.updateLayout(1, {}, function(error, layout) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteLayout()", function(){
        it("should send a DELETE request to /admin/api/layouts/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/layouts/1')
                .reply(200, '');
            API.deleteLayout(1, function(error, layout) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
