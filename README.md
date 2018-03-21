# loggerJS
console log in formal way for complex javascript applications


Usage

npm install  logger-simple

var LoggerJS = require("logger-simple");

create a object as global in the js file

var log_ = new LoggerJS.LoggerJS('#custom profile name');

now console your message using the functions:


log_.info('#message');
log_.info('#message',#data);
log_.info('#data');
log_.info('#message',#data,'#functionName');
  
  
log_.error('#message');
log_.error('#message',#data);
log_.error('#data');
log_.error('#message',#data,'#functionName');
  
  
log_.debug('#message');
log_.debug('#message',#data);
log_.debug(#data);
log_.debug('#message',#data,'#functionName')


The message ,function and custom profile name is expected as string.

The data can be anything array,object,...

if used "use strict" then the function name cannot be acquired , you have to provide it as third parameter explictly.

The way the logging is done:


[INFO]                     [Message] 
[2011-10-05T14:48:00.000Z] [#custom profile name : #functionName]
[PAYLOAD]                  {"sample":"test"}
- - - - - -
[DEBUG]                    [Message] 
[2011-10-05T14:48:00.000Z] [#custom profile name : #functionName]
[PAYLOAD]                   {"sample":"test"}
- - - - - -
[ERROR]                    [Message] 
[2011-10-05T14:48:00.000Z] [#custom profile name : #functionName]
[PAYLOAD]                  {"sample":"test"}
- - - - - -
