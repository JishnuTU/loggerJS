# loggerJS
console log in formal way for complex javascript applications


Usage

var LoggerJS = require("index");

var log_ = new LoggerJS.LoggerJS('index');

log_.info('My Message');

log_.info(<message>,<data>,<functionName>);

log_.error(<message>,<data>,<functionName>)

log_.debug(<message>,<data>,<functionName>)





[INFO]                     [Message] 
[2011-10-05T14:48:00.000Z] [FileName : <functionName>]
[PAYLOAD]                  []
- - - - - -
[DEBUG]                    [Message] 
[2011-10-05T14:48:00.000Z] [FileName : <functionName>]
[PAYLOAD]                  []
- - - - - -
[ERROR]                    [Message] 
[2011-10-05T14:48:00.000Z] [FileName : <functionName>]
[PAYLOAD]                  []
- - - - - -