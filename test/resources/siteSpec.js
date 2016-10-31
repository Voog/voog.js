var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/site.js", function(){
    var API = new Voog('testsite.com', 'test_token');
    describe("#site()", function(){
        it("should return the same site object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/site')
                .reply(200, { name: 'My Site' });
            API.site({}, function(error, site) {
                expect(typeof site).to.eq('object');
                expect(site.name).to.eq('My Site');
            });
        });
        it("should send a GET request to /admin/api/site", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/site')
                .reply(200, []);
            API.site({}, function(error, site) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateSite()", function(){
        it("should send a PUT request to /admin/api/site", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/site')
                .reply(200, {});
            API.updateSite({}, function(error, site) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#patchSite()", function(){
        it("should send a PATCH request to /admin/api/site", function(){
            var scope = nock('http://testsite.com')
                .patch('/admin/api/site')
                .reply(200, {});
            API.patchSite({}, function(error, site) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateSiteData()", function(){
        it("should send a PUT request to /admin/api/site/data/test", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/site/data/test')
                .reply(200, {});
            API.updateSiteData('test', {}, function(error, data) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteSiteData()", function(){
        it("should send a DELETE request to /admin/api/site/data/test", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/site/data/test')
                .reply(200, {});
            API.deleteSiteData('test', function(error, data) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
