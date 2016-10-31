var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/elements.js", function(){
    var API = new Voog('testsite.com', 'test_token');
    describe("#elements()", function(){
        it("should return an array of elements", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/elements')
                .reply(200, [{
                    id: 1,
                    name: 'Element 1'
                }, {
                    id: 2,
                    name: 'Element 2'
                }]);
            API.elements({}, function(error, elements) {
                expect(elements.length).to.eq(2);
                expect(typeof elements).to.eq('object');
                expect(elements.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/elements", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/elements')
                .reply(200, []);
            API.elements({}, function(error, elements) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#element()", function(){
        it("should return the same element object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/elements/1')
                .reply(200, { id: 1, name: 'Element 1' });
            API.element(1, {}, function(error, element) {
                expect(typeof element).to.eq('object');
                expect(element.id).to.eq(1);
                expect(element.name).to.eq('Element 1');
            });
        });
        it("should send a GET request to /admin/api/element/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/elements/1')
                .reply(200, []);
            API.element(1, {}, function(error, element) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createElement()", function(){
        it("should send a POST request to /admin/api/elements", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/elements')
                .reply(200, {});
            API.createElement({}, function(error, element) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateElement()", function(){
        it("should send a PUT request to /admin/api/elements/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/elements/1')
                .reply(200, {});
            API.updateElement(1, {}, function(error, element) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteElement()", function(){
        it("should send a DELETE request to /admin/api/elements/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/elements/1')
                .reply(200, '');
            API.deleteElement(1, function(error, element) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#moveElement()", function(){
        it("should send a DELETE request to /admin/api/elements/1/move", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/elements/1/move')
                .reply(200, '');
            API.moveElement(1, {}, function(error, element) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
