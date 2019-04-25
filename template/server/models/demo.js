import CONFIG from '../config'
import logger from '../libs/log4js'
import { AESEncode, base64_urlSafeEncode } from '../utils'
import KingApi from '../libs/HxerKongApi'

export default class Demo {
    static getInstance () {
        if (!this.instance)
            this.instance = new Demo()
        return this.instance
    }

    /**
     * 获取专员信息
     * @param {*} uid 获取专员id
     */
    async getAdminInfo (uid) {
        uid = base64_urlSafeEncode(AESEncode(CONFIG.ADMIN_UID_KEY, uid))
        let params = { uid }
        let kongApi = KingApi.getInstance('adminapi')
        let outputData = await kongApi.kongCurl('/adminInfo', params)

        if (2000 !== outputData.code || !outputData.data) {
            logger.error('获取专员信息数据出错：input_data:' + JSON.stringify(params) + 'output_data:' + JSON.stringify(outputData))
            return {}
        }

        return outputData.data
    }
}