import nc from 'next-connect';
import sessionMiddleware from '../../middleware/session';
import { ncOption } from '../../lib/ncOption';

const handler = nc(ncOption);
handler.use(sessionMiddleware);

handler.get( async (req, res) => {
				try {
								const user = req.session.user;
								res.status(200).json({ user });
				} catch (e) {
								res.status(400).end('Error');
				}
})

export default handler;
