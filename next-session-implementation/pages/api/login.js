import getSession from '../../lib/next-session';

export default async function handler(req, res) {
				try {
				const sess = await getSession(req, res);
				sess.user = 'vincent';
				await sess.commit();
				res.status(200).json({sess})
				} catch (e) {
								res.status(400).json({message: e});
				}
}
