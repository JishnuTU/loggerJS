
var expect = require('chai').expect;

var LoggerJS = require("../index");

describe('#log_', function () {
    it('should console info witn no payload', function () {
        var log_ = new LoggerJS.LoggerJS('index');
        function sample() {
            log_.info('My Message');
        }
        sample()
    });
    it('should console info with payload', function () {
        var log_ = new LoggerJS.LoggerJS('index');
        function sample() {
            log_.info('My Message', { "test": "data" });
        }
        sample()
    });
    it('should console info with function name', function () {
        var log_ = new LoggerJS.LoggerJS('index');
        function sample() {
            log_.info('My Message', { "test": "data" }, "myfunction");
        }
        sample()
    });

});