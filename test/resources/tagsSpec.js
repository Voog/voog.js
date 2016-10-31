var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/tags.js", function(){
    var API = new Voog('testsite.com', 'test_token');
    describe("#tags()", function(){
        it("should return an array of tags", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/tags')
                .reply(200, [{
                    id: 1,
                    name: 'Tag 1'
                }, {
                    id: 2,
                    name: 'Tag 2'
                }]);
            API.tags({}, function(error, tags) {
                expect(tags.length).to.eq(2);
                expect(typeof tags).to.eq('object');
                expect(tags.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/tags", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/tags')
                .reply(200, []);
            API.tags({}, function(error, tags) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#tag()", function(){
        it("should return the same tag object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/tags/1')
                .reply(200, { id: 1, name: 'Tag 1' });
            API.tag(1, {}, function(error, tag) {
                expect(typeof tag).to.eq('object');
                expect(tag.id).to.eq(1);
                expect(tag.name).to.eq('Tag 1');
            });
        });
        it("should send a GET request to /admin/api/tag/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/tags/1')
                .reply(200, []);
            API.tag(1, {}, function(error, tag) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateTag()", function(){
        it("should send a PUT request to /admin/api/tags/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/tags/1')
                .reply(200, {});
            API.updateTag(1, {}, function(error, tag) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#patchTag()", function(){
        it("should send a PATCH request to /admin/api/tags/1", function(){
            var scope = nock('http://testsite.com')
                .patch('/admin/api/tags/1')
                .reply(200, {});
            API.patchTag(1, {}, function(error, tag) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteTag()", function(){
        it("should send a DELETE request to /admin/api/tags/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/tags/1')
                .reply(200, '');
            API.deleteTag(1, function(error, tag) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
