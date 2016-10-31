var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/people.js", function(){
    var API = new Voog('testsite.com', 'test_token');
    describe("#people()", function(){
        it("should return an array of people", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/people')
                .reply(200, [{
                    name: 'Test User #1'
                }, {
                    name: 'Test User #2'
                }]);
            API.people({}, function(error, people) {
                expect(people.length).to.eq(2);
                expect(typeof people).to.eq('object');
                expect(people.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/people", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/people')
                .reply(200, []);
            API.people({}, function(error, people) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#person()", function(){
        it("should return the same person object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/people/1')
                .reply(200, { name: 'Test User #1' });
            API.person(1, {}, function(error, person) {
                expect(typeof person).to.eq('object');
                expect(person.name).to.eq('Test User #1');
            });
        });
        it("should send a GET request to /admin/api/person/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/people/1')
                .reply(200, []);
            API.person(1, {}, function(error, person) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
