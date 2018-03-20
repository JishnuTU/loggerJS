Object.defineProperty(exports, "__esModule", { value: true });
var LoggerJS = /** @class */ (function () {
    function LoggerJS(fieldScope) {
        if (fieldScope == null)
            this.fieldScope = '_default';
        else
            this.fieldScope = fieldScope;
    }
    LoggerJS.prototype.info = function (msg, data, fnName) {
        if (fnName == null) {
            try {
                fnName = this.info.caller.name;
            }
            catch (e) {
                fnName = " ";
            }
        }
        var time = new Date;
        if (fnName == '')
            fnName = "_global";
        if (typeof msg == 'string') {
            console.log("[INFO] [" + msg + "]");
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data != null)
                console.log("[PAYLOAD] ", JSON.stringify(data));
        }
        else {
            console.log("[INFO] ");
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data == null && msg != null)
                console.log("[PAYLOAD] ", JSON.stringify(msg));
            if (data != null && msg == null)
                console.log("[PAYLOAD] ", JSON.stringify(data));
        }
        console.log("- - - - - - \n");
    };
    LoggerJS.prototype.error = function (msg, data, fnName) {
        if (fnName == null) {
            try {
                fnName = this.info.caller.name;
            }
            catch (e) {
                fnName = " ";
            }
        }
        var time = new Date;
        if (fnName == '')
            fnName = "_global";
        if (typeof msg == 'string') {
            console.log("[ERROR] [" + msg + "]");
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data != null)
                console.log("[PAYLOAD] ", JSON.stringify(data));
        }
        else {
            console.log("[ERROR] ");
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data == null && msg != null)
                console.log("[PAYLOAD] ", JSON.stringify(msg));
            if (data != null && msg == null)
                console.log("[PAYLOAD] ", JSON.stringify(data));
        }
        console.log("- - - - - - \n");
    };
    LoggerJS.prototype.debug = function (msg, data, fnName) {
        if (fnName == null) {
            try {
                fnName = this.info.caller.name;
            }
            catch (e) {
                fnName = " ";
            }
        }
        var time = new Date;
        if (fnName == '')
            fnName = "_global";
        if (typeof msg == 'string') {
            console.log("[DEBUG] [" + msg + "]");
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data != null)
                console.log("[PAYLOAD] ", JSON.stringify(data));
        }
        else {
            console.log("[DEBUG] ");
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data == null && msg != null)
                console.log("[PAYLOAD] ", JSON.stringify(msg));
            if (data != null && msg == null)
                console.log("[PAYLOAD] ", JSON.stringify(data));
        }
        console.log("- - - - - - \n");
    };
    return LoggerJS;
}());
exports.LoggerJS = LoggerJS;
