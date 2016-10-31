var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/forms.js", function(){
    var API = new Voog('testsite.com', 'test_token');
    describe("#forms()", function(){
        it("should return an array of forms", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/forms')
                .reply(200, [{
                    id: 1,
                    name: 'Form 1'
                }, {
                    id: 2,
                    name: 'Form 2'
                }]);
            API.forms({}, function(error, forms) {
                expect(forms.length).to.eq(2);
                expect(typeof forms).to.eq('object');
                expect(forms.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/forms", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/forms')
                .reply(200, []);
            API.forms({}, function(error, forms) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#form()", function(){
        it("should return the same form object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/forms/1')
                .reply(200, { id: 1, name: 'Form 1' });
            API.form(1, {}, function(error, form) {
                expect(typeof form).to.eq('object');
                expect(form.id).to.eq(1);
                expect(form.name).to.eq('Form 1');
            });
        });
        it("should send a GET request to /admin/api/form/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/forms/1')
                .reply(200, []);
            API.form(1, {}, function(error, form) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#updateForm()", function(){
        it("should send a PUT request to /admin/api/forms/1", function(){
            var scope = nock('http://testsite.com')
                .put('/admin/api/forms/1')
                .reply(200, {});
            API.updateForm(1, {}, function(error, form) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
