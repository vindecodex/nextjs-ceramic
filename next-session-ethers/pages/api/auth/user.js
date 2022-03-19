import nc from 'next-connect';
import sessionMiddleware from '../../../lib/session.module';


const handler = nc();

handler.use(sessionMiddleware);

handler.get( async (req, res) => {
	try {
		const { address } = req.session;
		res.status(200).json({ address });
	} catch (e) {
		res.status(400).json({ error: e });
	}
});

export default handler;
