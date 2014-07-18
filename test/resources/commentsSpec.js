var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/comments.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#comments()", function(){
        it("should return an array of comments", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/articles/1/comments')
                .reply(200, [{
                    id: 1,
                    name: 'Comment 1'
                }, {
                    id: 2,
                    name: 'Comment 2'
                }]);
            API.comments(1, {}, function(error, comments) {
                expect(comments.length).to.eq(2);
                expect(typeof comments).to.eq('object');
                expect(comments.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/articles/1/comments", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/articles/1/comments')
                .reply(200, []);
            API.comments({}, function(error, comments) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#comment()", function(){
        it("should return the same comment object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/articles/1/comments/1')
                .reply(200, { id: 1, name: 'Comment 1' });
            API.comment(1, 1, {}, function(error, comment) {
                expect(typeof comment).to.eq('object');
                expect(comment.id).to.eq(1);
                expect(comment.name).to.eq('Comment 1');
            });
        });
        it("should send a GET request to /admin/api/articles/1/comment/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/articles/1/comments/1')
                .reply(200, []);
            API.comment(1, 1, {}, function(error, comment) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createComment()", function(){
        it("should send a POST request to /admin/api/articles/1/comments", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/articles/1/comments')
                .reply(200, {});
            API.createComment(1, {}, function(error, comment) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#toggleSpamComment()", function(){
        it("should send a PUT request to /admin/api/articles/1/comments/1/toggle_spam", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/articles/1/comments/1/toggle_spam')
                .reply(200, {});
            API.toggleSpamComment(1, 1, function(error, comment) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteComment()", function(){
        it("should send a DELETE request to /admin/api/articles/1/comments/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/articles/1/comments/1')
                .reply(200, '');
            API.deleteComment(1, 1, function(error, comment) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteSpamComments()", function(){
        it("should send a DELETE request to /admin/api/articles/1/comments/delete_spam", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/articles/1/comments/1')
                .reply(200, '');
            API.deleteSpamComments(1, function(error, comment) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
