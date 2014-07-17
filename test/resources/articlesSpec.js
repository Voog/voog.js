var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/articles.js", function(){
    var API = new Voog('testsite.com:80', 'test_token');
    describe("#articles()", function(){
        it("should return an array of articles", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/articles')
                .reply(200, [{
                    id: 1,
                    name: 'Article 1'
                }, {
                    id: 2,
                    name: 'Article 2'
                }]);
            API.articles({}, function(error, articles) {
                expect(articles.length).to.eq(2);
                expect(typeof articles).to.eq('object');
                expect(articles.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/articles", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/articles')
                .reply(200, []);
            API.articles({}, function(error, articles) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#article()", function(){
        it("should return the same article object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/articles/1')
                .reply(200, { id: 1, name: 'Article 1' });
            API.article(1, {}, function(error, article) {
                expect(typeof article).to.eq('object');
                expect(article.id).to.eq(1);
                expect(article.name).to.eq('Article 1');
            });
        });
        it("should send a GET request to /admin/api/article/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/articles/1')
                .reply(200, []);
            API.article(1, {}, function(error, article) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateArticle()", function(){
        it("should send a PUT request to /admin/api/articles/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/articles/1')
                .reply(200, {});
            API.updateArticle(1, {}, function(error, article) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#patchArticle()", function(){
        it("should send a PATCH request to /admin/api/articles/1", function(){
            var scope = nock('http://testsite.com')
                .patch('/admin/api/articles/1')
                .reply(200, {});
            API.patchArticle(1, {}, function(error, article) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#createArticle()", function(){
        it("should send a POST request to /admin/api/articles", function(){
            var scope = nock('http://testsite.com')
                .post('/admin/api/articles')
                .reply(200, {});
            API.createArticle({}, function(error, article) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteArticle()", function(){
        it("should send a DELETE request to /admin/api/articles/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/articles/1')
                .reply(200, '');
            API.deleteArticle(1, function(error, article) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateArticleData()", function(){
        it("should send a PUT request to /admin/api/articles/1/data/test", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/articles/1/data/test')
                .reply(200, '');
            API.updateArticleData(1, 'test', "", function(error, article) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteArticleData()", function(){
        it("should send a DELETE request to /admin/api/articles/1/data/test", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/articles/1/data/test')
                .reply(200, '');
            API.deleteArticleData(1, 'test', function(error, article) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
