var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/element_definitions.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#element_definitions()", function(){
        it("should return an array of element_definitions", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/element_definitions')
                .reply(200, [{
                    id: 1,
                    name: 'ElementDefinition 1'
                }, {
                    id: 2,
                    name: 'ElementDefinition 2'
                }]);
            API.element_definitions({}, function(error, element_definitions) {
                expect(element_definitions.length).to.eq(2);
                expect(typeof element_definitions).to.eq('object');
                expect(element_definitions.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/element_definitions", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/element_definitions')
                .reply(200, []);
            API.element_definitions({}, function(error, element_definitions) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#element_definition()", function(){
        it("should return the same element_definition object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/element_definitions/1')
                .reply(200, { id: 1, name: 'ElementDefinition 1' });
            API.element_definition(1, {}, function(error, element_definition) {
                expect(typeof element_definition).to.eq('object');
                expect(element_definition.id).to.eq(1);
                expect(element_definition.name).to.eq('ElementDefinition 1');
            });
        });
        it("should send a GET request to /admin/api/element_definition/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/element_definitions/1')
                .reply(200, []);
            API.element_definition(1, {}, function(error, element_definition) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createElementDefinition()", function(){
        it("should send a POST request to /admin/api/element_definitions", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/element_definitions')
                .reply(200, {});
            API.createElementDefinition({}, function(error, element_definition) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateElementDefinition()", function(){
        it("should send a PUT request to /admin/api/element_definitions/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/element_definitions/1')
                .reply(200, {});
            API.updateElementDefinition(1, {}, function(error, element_definition) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteElementDefinition()", function(){
        it("should send a DELETE request to /admin/api/element_definitions/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/element_definitions/1')
                .reply(200, '');
            API.deleteElementDefinition(1, function(error, element_definition) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
