import nextSession from 'next-session';
import Redis from 'ioredis';
import { expressSession } from 'next-session/lib/compat';
import RedisStore from 'connect-redis';
const redisStore = RedisStore(expressSession);

const redisStoreOpt = {
				host: 'localhost',
				port: 6379,
				db: 5,
				keyPrefix: 'session:',
}

const initSessionStore = () => {
				try {
								const client = new Redis(redisStoreOpt);

								const nextSessionOpt = {
												store: new redisStore({ client }),
												ttl: 86000,
												autoCommit: false,
												cookie: {
																secure: true,
																httpOnly: true,
																domain: 'localhost',
																maxAge: new Date(Date.now() + 60 * 60 * 1000 * 720),
												}
								};

								return nextSession(nextSessionOpt);

				} catch (e) {
								console.log(e);
								return e;
				}
}

const getSession = initSessionStore();

export default getSession;
