var expect = require('chai').expect,
    client = require('../lib/client');

describe("client.js", function(){
   describe("#isSuccessCode()", function(){
       it("should return true if provided code is a HTTP Success code", function(){
           expect(client.prototype.isSuccessCode(200)).to.be.true
           expect(client.prototype.isSuccessCode(404)).to.be.false
       });
   });
});
