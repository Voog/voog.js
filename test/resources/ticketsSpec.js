var expect = require('chai').expect,
    Voog = require('../../lib/voog'),
    nock = require('nock');

describe("resources/tickets.js", function(){
    var API = new Voog('testsite.com', 'test_token');
    describe("#tickets()", function(){
        it("should return an array of tickets", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/forms/1/tickets')
                .reply(200, [{
                    id: 1,
                    name: 'Ticket 1'
                }, {
                    id: 2,
                    name: 'Ticket 2'
                }]);
            API.tickets(1, {}, function(error, tickets) {
                expect(tickets.length).to.eq(2);
                expect(typeof tickets).to.eq('object');
                expect(tickets.hasOwnProperty('length')).to.be.true;
            });
        });
        it("should send a GET request to /admin/api/forms/1/tickets", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/forms/1/tickets')
                .reply(200, []);
            API.tickets(1, {}, function(error, tickets) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#ticket()", function(){
        it("should return the same ticket object as in the response body", function(){
            var scope = nock('http://testsite.com')
                .get('/admin/api/forms/1/tickets/1')
                .reply(200, { id: 1, name: 'Ticket 1' });
            API.ticket(1, 1, {}, function(error, ticket) {
                expect(typeof ticket).to.eq('object');
                expect(ticket.id).to.eq(1);
                expect(ticket.name).to.eq('Ticket 1');
            });
        });
        it("should send a GET request to /admin/api/ticket/1", function() {
            var scope = nock('http://testsite.com')
                .get('/admin/api/forms/1/tickets/1')
                .reply(200, []);
            API.ticket(1, 1, {}, function(error, ticket) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteTicket()", function(){
        it("should send a DELETE request to /admin/api/forms/1/tickets/1", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/forms/1/tickets/1')
                .reply(200, {});
            API.deleteTicket(1, 1, function(error, ticket) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
    describe("#deleteSpamTickets()", function(){
        it("should send a DELETE request to /admin/api/forms/1/tickets/delete_spam", function(){
            var scope = nock('http://testsite.com')
                .delete('/admin/api/forms/1/tickets/delete_spam')
                .reply(200, {});
            API.deleteSpamTickets(1, function(error, ticket) {
                expect(scope.isDone()).to.be.true;
            });
        });
    });
});
