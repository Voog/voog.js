var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/texts.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#texts()", function(){
        it("should return an array of texts", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/texts')
                .reply(200, [{
                    id: 1,
                    name: 'Text 1'
                }, {
                    id: 2,
                    name: 'Text 2'
                }]);
            API.texts({}, function(error, texts) {
                expect(texts.length).to.eq(2);
                expect(typeof texts).to.eq('object');
                expect(texts.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/texts", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/texts')
                .reply(200, []);
            API.texts({}, function(error, texts) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#text()", function(){
        it("should return the same text object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/texts/1')
                .reply(200, { id: 1, name: 'Text 1' });
            API.text(1, {}, function(error, text) {
                expect(typeof text).to.eq('object');
                expect(text.id).to.eq(1);
                expect(text.name).to.eq('Text 1');
            });
        });
        it("should send a GET request to /admin/api/text/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/texts/1')
                .reply(200, []);
            API.text(1, {}, function(error, text) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateText()", function(){
        it("should send a PUT request to /admin/api/texts/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/texts/1')
                .reply(200, {});
            API.updateText(1, {}, function(error, text) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
