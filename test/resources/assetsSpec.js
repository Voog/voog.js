var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/assets.js", function(){
    var API = new Voog('testsite.com', 'test_token');
    describe("#assets()", function(){
        it("should return an array of assets", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/assets')
                .reply(200, [{
                    id: 1,
                    name: 'Asset 1'
                }, {
                    id: 2,
                    name: 'Asset 2'
                }]);
            API.assets({}, function(error, assets) {
                expect(assets.length).to.eq(2);
                expect(typeof assets).to.eq('object');
                expect(assets.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/assets", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/assets')
                .reply(200, []);
            API.assets({}, function(error, assets) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#asset()", function(){
        it("should return the same asset object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/assets/1')
                .reply(200, { id: 1, name: 'Asset 1' });
            API.asset(1, {}, function(error, asset) {
                expect(typeof asset).to.eq('object');
                expect(asset.id).to.eq(1);
                expect(asset.name).to.eq('Asset 1');
            });
        });
        it("should send a GET request to /admin/api/asset/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/assets/1')
                .reply(200, []);
            API.asset(1, {}, function(error, asset) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createAsset()", function(){
        it("should send a POST request to /admin/api/assets", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/assets')
                .reply(200, {});
            API.createAsset({}, function(error, asset) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#confirmAsset()", function(){
        it("should send a PUT request to /admin/api/assets/1/confirm", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/assets/1/confirm')
                .reply(200, {});
            API.confirmAsset(1, function(error, asset) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteAsset()", function(){
        it("should send a DELETE request to /admin/api/assets/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/assets/1')
                .reply(200, '');
            API.deleteAsset(1, function(error, asset) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
