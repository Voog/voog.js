var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/layout_assets.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#layout_assets()", function(){
        it("should return an array of layout_assets", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/layout_assets')
                .reply(200, [{
                    id: 1,
                    name: 'LayoutAsset 1'
                }, {
                    id: 2,
                    name: 'LayoutAsset 2'
                }]);
            API.layout_assets({}, function(error, layout_assets) {
                expect(layout_assets.length).to.eq(2);
                expect(typeof layout_assets).to.eq('object');
                expect(layout_assets.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/layout_assets", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/layout_assets')
                .reply(200, []);
            API.layout_assets({}, function(error, layout_assets) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#layout_asset()", function(){
        it("should return the same layout_asset object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/layout_assets/1')
                .reply(200, { id: 1, name: 'LayoutAsset 1' });
            API.layout_asset(1, {}, function(error, layout_asset) {
                expect(typeof layout_asset).to.eq('object');
                expect(layout_asset.id).to.eq(1);
                expect(layout_asset.name).to.eq('LayoutAsset 1');
            });
        });
        it("should send a GET request to /admin/api/layout_asset/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/layout_assets/1')
                .reply(200, []);
            API.layout_asset(1, {}, function(error, layout_asset) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createLayoutAsset()", function(){
        it("should send a POST request to /admin/api/layout_assets", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/layout_assets')
                .reply(200, {});
            API.createLayoutAsset({}, function(error, layout_asset) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateLayoutAsset()", function(){
        it("should send a PUT request to /admin/api/layout_assets/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/layout_assets/1')
                .reply(200, {});
            API.updateLayoutAsset(1, {}, function(error, layout_asset) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteLayoutAsset()", function(){
        it("should send a DELETE request to /admin/api/layout_assets/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/layout_assets/1')
                .reply(200, '');
            API.deleteLayoutAsset(1, function(error, layout_asset) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
