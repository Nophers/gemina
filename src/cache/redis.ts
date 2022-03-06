import Redis from 'ioredis';
import { getLogger } from '../helpers/logger';

const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379');

const redis = new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
    db: 0,
    family: 4,
    password: process.env.REDIS_PASSWORD,
});
const redisLogger = getLogger('redis');

redis.on('connect', () => {
    redisLogger.info(`Connected to redis at ${REDIS_HOST}:${REDIS_PORT}`);
});

redis.on('error', error => {
    redisLogger.error(`Error from redis: ${error}`);
});

export default redis;