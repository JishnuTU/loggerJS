

function info(msg, data) {
    let fieldScope = "ds";
    var fnName = info.caller.name;
    var time = new Date;
    if (fnName == '')
        fnName = "_global";
    if (typeof msg == 'string') {
        console.log("[INFO] [" + msg + "]\n");
        console.log('[' + time.toISOString() + '] [' + fieldScope + ' : ' + fnName + ']\n');
        if (data != null)
            console.log("[PAYLOAD] ", JSON.stringify(data));
    }
    else {
        console.log("[INFO] \n");
        console.log('[' + time.toISOString() + '] [' + fieldScope + ' : ' + fnName + ']\n');
        if (data == null && msg != null)
            console.log("[PAYLOAD] ", JSON.stringify(msg));
        if (data != null && msg == null)
            console.log("[PAYLOAD] ", JSON.stringify(data));
    }
    console.log("- - - - - - \n");
}
/*
LoggerJS.prototype.error = function (msg, data) {
};
LoggerJS.prototype.debug = function (msg, data) {
};
*/
function test() {
    // var log_ = new LoggerJS('index');
    info("sample");
}
test();
