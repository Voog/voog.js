var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/media_sets.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#media_sets()", function(){
        it("should return an array of media_sets", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/media_sets')
                .reply(200, [{
                    id: 1,
                    name: 'MediaSet 1'
                }, {
                    id: 2,
                    name: 'MediaSet 2'
                }]);
            API.media_sets({}, function(error, media_sets) {
                expect(media_sets.length).to.eq(2);
                expect(typeof media_sets).to.eq('object');
                expect(media_sets.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/media_sets", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/media_sets')
                .reply(200, []);
            API.media_sets({}, function(error, media_sets) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#media_set()", function(){
        it("should return the same media_set object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/media_sets/1')
                .reply(200, { id: 1, name: 'MediaSet 1' });
            API.media_set(1, {}, function(error, media_set) {
                expect(typeof media_set).to.eq('object');
                expect(media_set.id).to.eq(1);
                expect(media_set.name).to.eq('MediaSet 1');
            });
        });
        it("should send a GET request to /admin/api/media_set/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/media_sets/1')
                .reply(200, []);
            API.media_set(1, {}, function(error, media_set) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createMediaSet()", function(){
        it("should send a POST request to /admin/api/media_sets", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/media_sets')
                .reply(200, {});
            API.createMediaSet({}, function(error, media_set) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateMediaSet()", function(){
        it("should send a PUT request to /admin/api/media_sets/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/media_sets/1')
                .reply(200, {});
            API.updateMediaSet(1, {}, function(error, media_set) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteMediaSet()", function(){
        it("should send a DELETE request to /admin/api/media_sets/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/media_sets/1')
                .reply(200, '');
            API.deleteMediaSet(1, function(error, media_set) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#addAssetsToMediaSet()", function(){
        it("should send a DELETE request to /admin/api/media_sets/1/add_assets", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/media_sets/1/add_assets')
                .reply(200, '');
            API.addAssetsToMediaSet(1, {}, function(error, media_set) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
