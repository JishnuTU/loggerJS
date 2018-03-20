
import { LoggerJS } from './loggerJs';

let log_ = new LoggerJS('index');

function sample() {
    log_.info('My Message');
}

sample();