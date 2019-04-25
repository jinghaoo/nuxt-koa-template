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


        return outputData.data
    }
}