
export class LoggerJS {
    fieldScope: string;
    constructor(fieldScope?: string) {
        if (fieldScope == null)
            this.fieldScope = '_default'
        else
            this.fieldScope = fieldScope;
    }
    info(msg?: any, data?: any) {
        let fnName = this.info.caller.name
        let time = new Date;
        if (fnName == '')
            fnName = "_global"

        if (typeof msg == 'string') {
            console.log("[INFO] [" + msg + "]")
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data != null)
                console.log("[PAYLOAD] ", JSON.stringify(data));

        } else {
            console.log("[INFO] ");
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data == null && msg != null)
                console.log("[PAYLOAD] ", JSON.stringify(msg));
            if (data != null && msg == null)
                console.log("[PAYLOAD] ", JSON.stringify(data));
        }
        console.log("- - - - - - \n")
    }
    error(msg: any, data: any) {
        let fnName = this.info.caller.name
        let time = new Date;
        if (fnName == '')
            fnName = "_global"

        if (typeof msg == 'string') {
            console.log("[ERROR] [" + msg + "]")
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data != null)
                console.log("[PAYLOAD] ", JSON.stringify(data));

        } else {
            console.log("[ERROR] ");
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data == null && msg != null)
                console.log("[PAYLOAD] ", JSON.stringify(msg));
            if (data != null && msg == null)
                console.log("[PAYLOAD] ", JSON.stringify(data));
        }
        console.log("- - - - - - \n")
    }
    debug(msg: any, data: any) {
        let fnName = this.info.caller.name
        let time = new Date;
        if (fnName == '')
            fnName = "_global"

        if (typeof msg == 'string') {
            console.log("[DEBUG] [" + msg + "]")
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data != null)
                console.log("[PAYLOAD] ", JSON.stringify(data));

        } else {
            console.log("[DEBUG] ");
            console.log('[' + time.toISOString() + '] [' + this.fieldScope + ' : ' + fnName + ']');
            if (data == null && msg != null)
                console.log("[PAYLOAD] ", JSON.stringify(msg));
            if (data != null && msg == null)
                console.log("[PAYLOAD] ", JSON.stringify(data));
        }
        console.log("- - - - - - \n")
    }
}
