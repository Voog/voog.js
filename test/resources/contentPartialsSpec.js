var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/content_partials.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#content_partials()", function(){
        it("should return an array of content_partials", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/content_partials')
                .reply(200, [{
                    id: 1,
                    name: 'ContentPartial 1'
                }, {
                    id: 2,
                    name: 'ContentPartial 2'
                }]);
            API.content_partials(1, {}, function(error, content_partials) {
                expect(content_partials.length).to.eq(2);
                expect(typeof content_partials).to.eq('object');
                expect(content_partials.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/content_partials", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/content_partials')
                .reply(200, []);
            API.content_partials({}, function(error, content_partials) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#content_partial()", function(){
        it("should return the same content_partial object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/content_partials/1')
                .reply(200, { id: 1, name: 'ContentPartial 1' });
            API.content_partial(1, 1, {}, function(error, content_partial) {
                expect(typeof content_partial).to.eq('object');
                expect(content_partial.id).to.eq(1);
                expect(content_partial.name).to.eq('ContentPartial 1');
            });
        });
        it("should send a GET request to /admin/api/content_partial/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/content_partials/1')
                .reply(200, []);
            API.content_partial(1, 1, {}, function(error, content_partial) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateContentPartial()", function(){
        it("should send a PUT request to /admin/api/content_partials/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/content_partials/1')
                .reply(200, {});
            API.updateContentPartial(1, {}, function(error, content_partial) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
