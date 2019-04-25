import CONFIG from '../config'
import rediz from 'redis'
import bluebird from 'bluebird'

bluebird.promisifyAll(rediz);
const redis = rediz.createClient({
    'host': CONFIG.REDIS_HOST, 
    'port': CONFIG.REDIS_PORT, 
    'password': CONFIG.REDIS_PASSWORD,
    'prefix': CONFIG.REDIS_PREFIX + ':'
})

redis.on('error', function (err) { 
    console.log('redis-errorevent - ' + redis.host + ':' + redis.port + ' - ' + err); 
})


export default redis