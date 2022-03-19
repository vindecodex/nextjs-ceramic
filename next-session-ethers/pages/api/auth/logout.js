import nc from 'next-connect';
import sessionMiddleware from '../../../lib/session.module';


const handler = nc();

handler.use(sessionMiddleware);

handler.post( async (req, res) => {
	try {
		await req.session.destroy();
		res.status(200).json({ success: true });
	} catch (e) {
		res.status(400).json({ error: e });
	}
});

export default handler;
