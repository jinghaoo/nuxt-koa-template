import log4js from 'log4js'
import CONFIG from '../config'
log4js.configure({
    appenders: {
        console: {
            type: 'console'
        },
        log: {
            type: "dateFile",
            filename: CONFIG.access_log,
            pattern: "yyyy-MM-dd.log",
            alwaysIncludePattern: true
        },
        error: {
            type: "dateFile",
            filename: CONFIG.error_log,
            pattern: "yyyy-MM-dd.log",
            alwaysIncludePattern: true
        },
        errorFilter: {
            type: "logLevelFilter",
            appender: "error",
            level: "error"
        },
    },
    categories: {
        default: {appenders: ['console', 'log', 'errorFilter'], level: 'debug'}
    },
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID'
})
export default log4js.getLogger('mhuixiaoer')
