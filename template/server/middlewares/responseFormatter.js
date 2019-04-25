// 格式化api返回码
import apiStatus from '../config/apiStatus'
/**
 * 在app.use(router)之前调用
 */
export default async (ctx, next) => {
    //先去执行路由
    await next()
    
    // 如果有返回数据，将返回数据添加到data中
    if (ctx.json !== undefined) {
        if (Object.prototype.toString.call(ctx.json) === '[object Number]') {
            return ctx.body = {
                code: ctx.json,
                message: apiStatus[ctx.json+''],
            }
        }
        if (ctx.json === 2000) {

        }
        return ctx.body = {
            code: 2000,
            message: 'success',
            data: ctx.json
        }
    }
    // 如果不做格式化输出
    return ctx.body = ctx.body
}
