Object.defineProperty(exports, "__esModule", { value: true });
var loggerJs_1 = require("./loggerJs");
var log_ = new loggerJs_1.LoggerJS('index');
function sample() {
    log_.info('My Message');
}
sample();
