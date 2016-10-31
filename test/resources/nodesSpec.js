var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/nodes.js", function(){
    var API = new Voog('testsite.com', 'test_token');
    describe("#nodes()", function(){
        it("should return an array of nodes", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/nodes')
                .reply(200, [{
                    id: 1,
                    name: 'Node 1'
                }, {
                    id: 2,
                    name: 'Node 2'
                }]);
            API.nodes({}, function(error, nodes) {
                expect(nodes.length).to.eq(2);
                expect(typeof nodes).to.eq('object');
                expect(nodes.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/nodes", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/nodes')
                .reply(200, []);
            API.nodes({}, function(error, nodes) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#node()", function(){
        it("should return the same node object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/nodes/1')
                .reply(200, { id: 1, name: 'Node 1' });
            API.node(1, {}, function(error, node) {
                expect(typeof node).to.eq('object');
                expect(node.id).to.eq(1);
                expect(node.name).to.eq('Node 1');
            });
        });
        it("should send a GET request to /admin/api/node/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/nodes/1')
                .reply(200, []);
            API.node(1, {}, function(error, node) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateNode()", function(){
        it("should send a PUT request to /admin/api/nodes/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/nodes/1')
                .reply(200, {});
            API.updateNode(1, {}, function(error, node) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#moveNode()", function(){
        it("should send a PUT request to /admin/api/nodes/1/move", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/nodes/1/move')
                .reply(200, {});
            API.moveNode(1, {}, function(error, node) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
