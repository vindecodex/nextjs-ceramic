import nc from 'next-connect';
import sessionMiddleware from '../../middleware/session';
import { ncOption } from '../../lib/ncOption';

const handler = nc(ncOption);
handler.use(sessionMiddleware);

handler.post( async (req, res) => {
				try {
								req.session.user = req.body.user;
								await req.session.commit();
								res.status(200).json({ message: req.session });
				} catch (e) {
								res.status(400).end('Error');
				}
})

export default handler;
